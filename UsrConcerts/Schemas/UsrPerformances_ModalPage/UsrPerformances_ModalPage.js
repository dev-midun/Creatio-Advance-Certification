define("UsrPerformances_ModalPage", /**SCHEMA_DEPS*/["UsrConcertModule"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(concertModule)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "UsrConcert",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrConcert",
					"labelPosition": "above",
					"control": "$UsrConcert",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNumber",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrNumber",
					"labelPosition": "above",
					"control": "$UsrNumber",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrName",
					"labelPosition": "above",
					"control": "$UsrName"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrType",
					"labelPosition": "above",
					"control": "$UsrType",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "addRecord_z9romx2",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_z9romx2_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "UsrType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrDurationMinutes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrDurationMinutes",
					"labelPosition": "above",
					"control": "$UsrDurationMinutes",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "FlexContainer_couh3yu",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 6,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"items": [],
					"fitContent": true
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "FlexContainer_2rz2xb4",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "FlexContainer_couh3yu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_MaxDurationLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_MaxDurationLabel_caption)#)#",
					"labelType": "caption",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_2rz2xb4",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_MaxDurationValue",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_MaxDurationValue_caption)#)#",
					"labelType": "caption",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_2rz2xb4",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "FlexContainer_nl46j0j",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"items": [],
					"fitContent": true
				},
				"parentName": "FlexContainer_couh3yu",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Label_TotalDurationLabel",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_TotalDurationLabel_caption)#)#",
					"labelType": "caption",
					"labelThickness": "normal",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_nl46j0j",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Label_TotalDurationValue",
				"values": {
					"type": "crt.Label",
					"caption": "#MacrosTemplateString(#ResourceString(Label_TotalDurationValue_caption)#)#",
					"labelType": "caption",
					"labelThickness": "semibold",
					"labelEllipsis": false,
					"labelColor": "auto",
					"labelBackgroundColor": "transparent",
					"labelTextAlign": "start",
					"visible": true
				},
				"parentName": "FlexContainer_nl46j0j",
				"propertyName": "items",
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrNumber": {
						"modelConfig": {
							"path": "UsrPerformancesDS.UsrNumber"
						}
					},
					"UsrName": {
						"modelConfig": {
							"path": "UsrPerformancesDS.UsrName"
						}
					},
					"UsrType": {
						"modelConfig": {
							"path": "UsrPerformancesDS.UsrType"
						}
					},
					"UsrDurationMinutes": {
						"modelConfig": {
							"path": "UsrPerformancesDS.UsrDurationMinutes"
						}
					},
					"UsrConcert": {
						"modelConfig": {
							"path": "UsrPerformancesDS.UsrConcert"
						}
					},
					"MaxDurationValue": {},
					"TotalDurationValue": {},
					"TotalDuration": {}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrPerformancesDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrPerformances"
							}
						}
					},
					"primaryDataSourceName": "UsrPerformancesDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					await next?.handle(request);

					request.$context.events$.subscribe((async (evt) => {
						const modelMode = await request.$context.getPrimaryModelMode();
                        if(modelMode != "update" && modelMode != "create") {
                            return;
                        }
                      
                        if(evt?.type !== "finish-load-model-attributes") {
							return;
						}
						
						const payload = ["UsrConcert", "UsrDurationMinutes"];
						const allPayloadReady = payload.every(item => evt.payload.hasOwnProperty(item) && evt.payload[item] === true);
						if(!allPayloadReady) {
							return;
						}

						const id = await request.$context.Id;
						const concert = await request.$context.UsrConcert;
						const maxDuration = await concertModule.getSysSetting("UsrMaxDurationConcertPerformance");
						request.$context.MaxDurationValue = `${maxDuration} minutes`;

						const duration = await request.$context.UsrDurationMinutes ?? 0;
						const totalDuration = await concertModule.getTotalDuration(concert.value, id);
						request.$context.TotalDuration = totalDuration;
						request.$context.TotalDurationValue = `${totalDuration+duration} minutes`;
					}));
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				handler: async (request, next) => {
					if(request.attributeName == "UsrDurationMinutes" && !request.silent) {
						const totalDuration = await request.$context.TotalDuration;
						const duration = await request.$context.UsrDurationMinutes ?? 0;
						request.$context.TotalDurationValue = `${totalDuration+duration} minutes`;
					}

					return await next?.handle(request);
				}
			},
			{
				request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					const id = await request.$context.Id;
					const concert = await request.$context.UsrConcert;
					const duration = await request.$context.UsrDurationMinutes ?? 0;
					
					const validation = await concertModule.performanceValidation(id, duration, concert.value);
					if(!validation.success) {
						await concertModule.toast(request, validation.message);
						return;
					}
					
					if(!await concertModule.confirm(request, "Are you sure?")) {
						return;
					}

					return await next.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});