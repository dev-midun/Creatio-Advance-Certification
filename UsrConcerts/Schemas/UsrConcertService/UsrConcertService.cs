using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.ServiceModel.Activation;
using Terrasoft.Core;
using Terrasoft.Core.DB;
using Terrasoft.Core.Entities;
using Terrasoft.Web.Common;
using Terrasoft.Common;
using Newtonsoft.Json;
using SysSettings = Terrasoft.Core.Configuration.SysSettings;

namespace UsrConcerts
{
	[ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class ConcertWebService : BaseService
    {
        [OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
        public int TotalDuration(string Code) 
		{
            var service = new ConcertService(UserConnection);				
            return service.GetTotalDuration(Code);
        }

		[OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
        public Concert GetConcert(string Code) 
		{
            var service = new ConcertService(UserConnection);				
            return service.GetConcert(Code);
        }

		[OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
        public List<Performance> GetPerformances(string Code) 
		{
            var service = new ConcertService(UserConnection);				
            return service.GetPerformances(Code);
        }

		[OperationContract]
        [WebInvoke(Method = "POST", RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.WrappedRequest, ResponseFormat = WebMessageFormat.Json)]
		public ResultStatus AutomaticConcert(Guid Id, int TotalRecord)
		{
			var service = new ConcertService(UserConnection);				
            return service.AutomaticConcert(Id, TotalRecord);
		}
    }

	public class ConcertService
	{
		private UserConnection _userConnection;
        public ConcertService(UserConnection userConnection)
        {
            _userConnection = userConnection;
        }

		public int GetTotalDuration(string code)
		{
			if(!IsConcertCodeExists(code))
			{
				return -1;
			}
			
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrPerformances");
			
			var columns = new Dictionary<string, EntitySchemaQueryColumn>();
			columns.Add("TotalDuration", esq.AddColumn(esq.CreateAggregationFunction(AggregationTypeStrict.Sum, "UsrDurationMinutes")));

			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrConcert.UsrCode", code));
			
			var entity = esq.GetEntityCollection(_userConnection).FirstOrDefault();
			return entity?.GetTypedColumnValue<int>(columns["TotalDuration"].Name) ?? 0;
		}

		public int GetTotalDuration(Guid id)
		{
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrPerformances");
			
			var columns = new Dictionary<string, EntitySchemaQueryColumn>();
			columns.Add("TotalDuration", esq.AddColumn(esq.CreateAggregationFunction(AggregationTypeStrict.Sum, "UsrDurationMinutes")));

			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrConcert.Id", id));
			
			var entity = esq.GetEntityCollection(_userConnection).FirstOrDefault();
			return entity?.GetTypedColumnValue<int>(columns["TotalDuration"].Name) ?? 0;
		}

		public Concert GetConcert(string code)
		{
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrConcerts");

			var columns = new Dictionary<string, EntitySchemaQueryColumn>();
			columns.Add("Id", esq.AddColumn("Id"));
			columns.Add("Code", esq.AddColumn("UsrCode"));
			columns.Add("Title", esq.AddColumn("UsrTitle"));
			columns.Add("Type", esq.AddColumn("UsrType.Name"));
			columns.Add("Owner", esq.AddColumn("UsrOwner.Name"));
			columns.Add("Active", esq.AddColumn("UsrActive"));

			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrCode", code));
			
			var entity = esq.GetEntityCollection(_userConnection).FirstOrDefault();
			if(entity == null)
			{
				return null;
			}
			
			Guid id = entity.GetTypedColumnValue<Guid>(columns["Id"].Name);
			List<Performance> performances = GetPerformances(code);
			int totalDuration = performances.Sum(item => item.Duration);
			
			return new Concert()
			{
				Code = entity.GetTypedColumnValue<string>(columns["Code"].Name),
				Title = entity.GetTypedColumnValue<string>(columns["Title"].Name),
				Type = entity.GetTypedColumnValue<string>(columns["Type"].Name),
				Owner = entity.GetTypedColumnValue<string>(columns["Owner"].Name),
				Active = entity.GetTypedColumnValue<bool>(columns["Active"].Name),
				TotalDuration = totalDuration,
				Performances = performances
			};
		}

		public List<Performance> GetPerformances(string code)
		{
			var result = new List<Performance>();
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrPerformances");

			var columns = new Dictionary<string, EntitySchemaQueryColumn>();
			columns.Add("Number", esq.AddColumn("UsrNumber"));
			columns.Add("Name", esq.AddColumn("UsrName"));
			columns.Add("Type", esq.AddColumn("UsrType.Name"));
			columns.Add("Duration", esq.AddColumn("UsrDurationMinutes"));
			
			columns["Number"].OrderByAsc(0);
			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrConcert.UsrCode", code));
			
			var entities = esq.GetEntityCollection(_userConnection);
			foreach(var entity in entities)
			{
				var performance = new Performance()
				{
					Number = entity.GetTypedColumnValue<int>(columns["Number"].Name),
					Name = entity.GetTypedColumnValue<string>(columns["Name"].Name),
					Type = entity.GetTypedColumnValue<string>(columns["Type"].Name),
					Duration = entity.GetTypedColumnValue<int>(columns["Duration"].Name)
				};
				result.Add(performance);
			}

			return result;
		}

		public ResultStatus AutomaticConcert(Guid id, int totalRecord)
		{
			var result = new ResultStatus();

			var randomPerformances = RandomPerformances();
			using (DBExecutor dbExecutor = _userConnection.EnsureDBConnection())
			{
				dbExecutor.StartTransaction();
				try
				{
					int maxTotalDuration = SysSettings.GetValue<int>(_userConnection, "UsrMaxDurationConcertPerformance", 150);
					int totalDuration = GetTotalDuration(id);
					int lastNumber = GetLastNumber(id);

					int restDuration = maxTotalDuration - totalDuration;
					int randomMaxDuration = restDuration;
					if(restDuration > 0)
					{
						Random randomMax = new Random();
						randomMaxDuration = restDuration > totalRecord ? randomMax.Next(totalRecord, restDuration) : randomMax.Next(restDuration);
					}
					
					int durationPerPerformance = Convert.ToInt32(Math.Floor(Convert.ToDecimal(randomMaxDuration/totalRecord)));
					for(int i=0; i<totalRecord; i++)
					{
						int no = i+1;
						
						Random random = new Random();
						var performance = randomPerformances.ElementAt(random.Next(randomPerformances.Count));
						
						InsertPerformance(id, new Performance()
						{
							Number = lastNumber + no,
							Name = performance.Key,
							Type = performance.Value,
							Duration = durationPerPerformance
						});
					}
					
					dbExecutor.CommitTransaction();
					result.Success = true;
				}
				catch(Exception e)
				{
					dbExecutor.RollbackTransaction();
					result.Message = e.Message;
				}
			}

			return result;
		}

		private bool IsConcertCodeExists(string code)
		{
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrConcerts");
			
			var columns = new Dictionary<string, EntitySchemaQueryColumn>();
			columns.Add("Id", esq.AddColumn("Id"));

			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrCode", code));
			
			var entity = esq.GetEntityCollection(_userConnection).FirstOrDefault();
			return entity != null ? true : false;
		}

		private int GetLastNumber(Guid concertId)
		{
			var esq = new EntitySchemaQuery(_userConnection.EntitySchemaManager, "UsrPerformances");
			
			var columns = new Dictionary<string, EntitySchemaQueryColumn>();
			columns.Add("LastNumber", esq.AddColumn(esq.CreateAggregationFunction(AggregationTypeStrict.Max, "UsrNumber")));

			esq.Filters.Add(esq.CreateFilterWithParameters(FilterComparisonType.Equal, "UsrConcert.Id", concertId));

			var entity = esq.GetEntityCollection(_userConnection).FirstOrDefault();
			return entity?.GetTypedColumnValue<int>(columns["LastNumber"].Name) ?? 0;
		}

		private void InsertPerformance(Guid concertId, Performance performance)
		{
			var entity = _userConnection
				.EntitySchemaManager
				.GetInstanceByName("UsrPerformances")
				.CreateEntity(_userConnection);

			entity.SetDefColumnValues();
			entity.SetColumnValue("UsrConcertId", concertId);
			entity.SetColumnValue("UsrNumber", performance.Number);
			entity.SetColumnValue("UsrName", performance.Name);
			entity.SetColumnValue("UsrTypeId", GetPerformanceType(performance.Type));
			entity.SetColumnValue("UsrDurationMinutes", performance.Duration);
			
			entity.Save(false);
		}

		private Guid GetPerformanceType(string name)
		{
			var type = new Dictionary<string, Guid>()
			{
				{"CGI show", PerformanceTypeConst.CGIShow},
				{"Song", PerformanceTypeConst.Song},
				{"Speech", PerformanceTypeConst.Speech},
				{"Talent show", PerformanceTypeConst.TalentShow}
			};
				
			if(type.ContainsKey(name))
			{
				return type[name];
			}

			return Guid.Empty;
		}

		private Dictionary<string, string> RandomPerformances()
		{
			return new Dictionary<string, string>()
			{
				{"Echoes of Infinity", "CGI show"},
				{"Soul Resonance", "Song"},
				{"Voices of the Dawn", "Speech"},
				{"Illusion Weavers", "Talent show"},
				{"Celestial Mirage", "CGI show"},
				{"Melody of the Stars", "Song"},
				{"The Art of Persuasion", "Speech"},
				{"Phantom Symphony", "Talent show"},
				{"Ethereal Visions", "CGI show"},
				{"Harmony Unleashed", "Song"},
				{"Whispers of Change", "Speech"},
				{"Beyond the Spotlight", "Talent show"},
				{"Digital Dreams", "CGI show"},
				{"Serenade of the Skies", "Song"},
				{"The Power of Words", "Speech"},
				{"Limitless Talent", "Talent show"},
				{"Neon Realities", "CGI show"},
				{"Ballad of the Brave", "Song"},
				{"Echo Chamber", "Speech"},
				{"Master of Illusions", "Talent show"}
			};
		}
	}

	public class Concert
	{
		public string Code { get; set; }
		public string Title { get; set; }
		public string Type { get; set; }
		public string Owner { get; set; }
		public bool Active { get; set; }
		public int TotalDuration { get; set; }
		public List<Performance> Performances { get; set; }
	}

	public class Performance
	{
		public int Number { get; set; }
		public string Name { get; set; }
		public string Type { get; set; }
		public int Duration { get; set; }
	}

	public class ResultStatus
	{
		public bool Success { get; set; }
		public string Message { get; set; }
	}

	public static class PerformanceTypeConst
    {
        public static readonly Guid CGIShow = new Guid("1fe55c1d-77b6-41b7-97d5-b37ea26cf509");
        public static readonly Guid Song = new Guid("841b6ed1-f4e5-4b9a-9115-179dfb05053c");
        public static readonly Guid Speech = new Guid("62661014-37b7-43ee-8b5c-e3b58bba1eb6");
        public static readonly Guid TalentShow = new Guid("d1f73e1f-df81-4eed-9370-3336ed4944f9");
    }
}