define("UsrConcertModule", ["@creatio-devkit/common"], function (sdk) {
 
    class ConcertModule {
        
        /**
         * validation duration performance is valid and not exceed maximum duration
         * @param {string} id performance id
         * @param {int} duration duration performance
         * @param {string} concertId 
         * @returns {{success: boolean, message: string}} 
         */
        static async performanceValidation(id, duration, concertId) {
            const result = {
                success: false,
                message: null
            };

            try {
                const maxDuration = await ConcertModule.getSysSetting("UsrMaxDurationConcertPerformance");
                const totalDuration = await ConcertModule.getTotalDuration(concertId, id) + duration;
                if(totalDuration > maxDuration) {
                    throw `Oops! The total duration exceeds the allowed limit of ${maxDuration} minutes. Please adjust the duration to stay within the limit.`;
                }

                result.success = true;
            } catch (error) {
                result.message = error.toString();
            }

            return result;
        }

        /**
         * get all performance by concert
         * @param {string} concertId 
         * @returns {Array} Id, UsrNumber, UsrName, UsrType, UsrDurationMinutes
         */
		static async getPerformances(concertId) {
			const performanceModel = await sdk.Model.create("UsrPerformances");
			const filters = new sdk.FilterGroup();
			await filters.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrConcert", concertId);
			
			return await performanceModel.load({
				attributes: ["Id", "UsrNumber", "UsrName", "UsrType", "UsrDurationMinutes"],
				parameters: [{
					type: sdk.ModelParameterType.Filter,
					value: filters
				}]
			});
		}

        /**
         * get total duration by concert
         * @param {string} concertId 
         * @returns {int}
         */
		static async getAllTotalDuration(concertId) {
			const performances = await ConcertModule.getPerformances(concertId);
			return performances.reduce((accumulator, val) => accumulator + val.UsrDurationMinutes, 0);
		}
		
        /**
         * get total duration by concert, not include specified performance Id
         * @param {string} concertId 
         * @param {string} performanceId 
         * @returns {int}
         */
		static async getTotalDuration(concertId, performanceId) {
			const performances = await ConcertModule.getPerformances(concertId);
			return performances
				.filter(item => item.Id != performanceId)
				.reduce((accumulator, val) => accumulator + val.UsrDurationMinutes, 0);
		}

		/**
         * auto add performance by param
         * @param {string} concertId 
         * @param {int} totalRecord 
         * @returns {{Success: boolean, Message: string}} 
         */
		static async autoPerformance(concertId, totalRecord) {
			const param = {
				Id: concertId,
				TotalRecord: totalRecord ?? 10
			};

			const httpService = new sdk.HttpClientService();
			const request = await httpService.post("rest/ConcertWebService/AutomaticConcert", param);           
			return request.body;
		}

		/**
         * get total duration by concert code
         * @param {string} code 
         * @returns {int} 
         */
		static async getTotalDurationByCode(code) {
			const param = {
				Code: code
			};

			const httpService = new sdk.HttpClientService();
			const request = await httpService.post("rest/ConcertWebService/TotalDuration", param);           
			return request.body;
		}

        static async toast(request, message) {
            return await request.$context.executeRequest({
                type: "crt.NotificationRequest",
                message: message
            });
        } 

        static async alert(request, message) {
            return await request.$context.executeRequest({
                type: "crt.ShowDialogRequest",
                $context: request.$context,
                dialogConfig: {
                    data: {
                        message: message,
                        actions: [{
                            key: "OK",
                            config: {
                                color: "primary",
                                caption: "OK"
                            }
                        }]
                    }
                }
            });
        }

        static async confirm(request, message) {
            const no = {
                key: false,
                config: {
                    color: "default",
                    caption: "No"
                }
            };
            const yes = {
                key: true,
                config: {
                    color: "primary",
                    caption: "Yes"
                }
            };

            return await request.$context.executeRequest({
                type: "crt.ShowDialogRequest",
                $context: request.$context,
                dialogConfig: {
                    data: {
                        message: message,
                        actions: [no, yes]
                    }
                }
            });
        }

        static async getSysSetting(code, onlyValue = true) {
            const service = new sdk.SysSettingsService();
            const sysSetting = await service.getByCode(code);
            
            return onlyValue ? sysSetting.value : sysSetting;
        }
    }
 
    return ConcertModule;
});