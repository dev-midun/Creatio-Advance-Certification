define("UsrConcerts_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common", "UsrConcertModule"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk, concertModule)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "remove",
				"name": "GeneralInfoTabContainer"
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "remove",
				"name": "FeedTabContainer"
			},
			{
				"operation": "remove",
				"name": "Feed"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderContainer"
			},
			{
				"operation": "remove",
				"name": "FeedTabContainerHeaderLabel"
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "5e68a184-bf6e-4c0d-9cb9-e9caa8e9545c",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrCode",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrCode",
					"labelPosition": "auto",
					"control": "$UsrCode",
					"multiline": false,
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Title",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"multiline": false,
					"label": "$Resources.Strings.UsrTitle",
					"labelPosition": "auto",
					"control": "$UsrTitle"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrType",
					"labelPosition": "auto",
					"control": "$UsrType",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "UsrOwner",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrOwner",
					"labelPosition": "auto",
					"control": "$UsrOwner",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrActive",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 5,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Checkbox",
					"label": "$Resources.Strings.UsrActive",
					"labelPosition": "right",
					"control": "$UsrActive",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "GridContainer_wjywf4l",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrNotes",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrNotes",
					"labelPosition": "above",
					"control": "$UsrNotes",
					"multiline": true,
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GridContainer_wjywf4l",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_i9epve3",
				"values": {
					"type": "crt.GridContainer",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"rows": "minmax(max-content, 32px)",
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"items": [],
					"fitContent": true,
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_Performances",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_Performances_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true,
					"visible": true,
					"alignItems": "stretch"
				},
				"parentName": "GridContainer_i9epve3",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_xwuq2o0",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				},
				"parentName": "ExpansionPanel_Performances",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_p0hav6y",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "small",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"justifyContent": "start",
					"wrap": "wrap"
				},
				"parentName": "GridContainer_xwuq2o0",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_56h9paj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_56h9paj_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrPerformances",
							"defaultValues": [
								{
									"attributeName": "UsrConcert",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_p0hav6y",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Button_AutoPerformance",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_AutoPerformance_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "usr.onAutoPerformanceClick",
						"params": {}
					}
				},
				"parentName": "FlexContainer_p0hav6y",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_o2dzvnu",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_o2dzvnu_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_PerformancesDS"
						}
					}
				},
				"parentName": "FlexContainer_p0hav6y",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_yego3fd",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_yego3fd_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_p0hav6y",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_111128m",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_111128m_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_Performances"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yego3fd",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_kkailv2",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_kkailv2_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrPerformances"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_yego3fd",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_51ec2rf",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_51ec2rf_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_51ec2rf_GridDetail_Performances",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_Performances"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_51ec2rf_SearchValue",
							"GridDetailSearchFilter_51ec2rf_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_p0hav6y",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Summaries_Performance",
				"values": {
					"type": "crt.Summaries",
					"items": [],
					"visible": true,
					"_designOptions": {
						"modelName": "GridDetail_PerformancesDS"
					}
				},
				"parentName": "ExpansionPanel_Performances",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridContainer_l3uk25s",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_Performances",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetail_Performances",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 13
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							},
							"numeration": true
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_spwg2ch",
					"activeRow": "$GridDetail_spwg2ch_ActiveRow",
					"selectionState": "$GridDetail_spwg2ch_SelectionState",
					"primaryColumnName": "GridDetail_PerformancesDS_Id",
					"columns": [
						{
							"id": "49294694-ed0b-7415-385c-da7a19cee391",
							"code": "GridDetail_PerformancesDS_UsrNumber",
							"caption": "#ResourceString(GridDetail_PerformancesDS_UsrNumber)#",
							"dataValueType": 4
						},
						{
							"id": "666a7677-5c71-f4a4-a448-1eb06a26d607",
							"code": "GridDetail_PerformancesDS_UsrName",
							"caption": "#ResourceString(GridDetail_PerformancesDS_UsrName)#",
							"dataValueType": 28
						},
						{
							"id": "a9c0cbec-5e78-bea4-b092-d52130920923",
							"code": "GridDetail_PerformancesDS_UsrType",
							"caption": "#ResourceString(GridDetail_PerformancesDS_UsrType)#",
							"dataValueType": 10
						},
						{
							"id": "0bdb62b0-4c39-f6be-f5c3-8b1040218d32",
							"code": "GridDetail_PerformancesDS_UsrDurationMinutes",
							"caption": "#ResourceString(GridDetail_PerformancesDS_UsrDurationMinutes)#",
							"dataValueType": 4,
							"width": 179
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_l3uk25s",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrTitle": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"UsrCode": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"UsrType": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"UsrOwner": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"UsrActive": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"UsrNotes": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"GridDetail_spwg2ch": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_PerformancesDS",
							"filterAttributes": [
								{
									"loadOnChange": true,
									"name": "GridDetail_spwg2ch_PredefinedFilter"
								}
							]
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_PerformancesDS_UsrNumber": {
									"modelConfig": {
										"path": "GridDetail_PerformancesDS.UsrNumber"
									}
								},
								"GridDetail_PerformancesDS_UsrName": {
									"modelConfig": {
										"path": "GridDetail_PerformancesDS.UsrName"
									}
								},
								"GridDetail_PerformancesDS_UsrType": {
									"modelConfig": {
										"path": "GridDetail_PerformancesDS.UsrType"
									}
								},
								"GridDetail_PerformancesDS_UsrDurationMinutes": {
									"modelConfig": {
										"path": "GridDetail_PerformancesDS.UsrDurationMinutes"
									}
								},
								"GridDetail_PerformancesDS_Id": {
									"modelConfig": {
										"path": "GridDetail_PerformancesDS.Id"
									}
								}
							}
						}
					},
					"GridDetail_spwg2ch_PredefinedFilter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"CardState"
				],
				"values": {
					"modelConfig": {}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_PerformancesDS": [
							{
								"attributePath": "UsrConcert",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrConcerts"
						},
						"scope": "page"
					},
					"GridDetail_PerformancesDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrPerformances",
							"attributes": {
								"UsrNumber": {
									"path": "UsrNumber"
								},
								"UsrName": {
									"path": "UsrName"
								},
								"UsrType": {
									"path": "UsrType"
								},
								"UsrDurationMinutes": {
									"path": "UsrDurationMinutes"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.onAutoPerformanceClick",
				handler: async (request, next) => {
					const cardState = await request.$context.CardState;
					if (cardState != "edit") {
						return await concertModule.alert(request, "Perfoming this action, can only be done in edit mode");
					}

					const mask = new sdk.MaskService();
					try {						
						if(!await concertModule.confirm(request, "Are you sure?")) {
							return;
						}

						mask.showBodyMask();

						const id = await request.$context.Id;
						const totalRecord = 10;
						const auto = await concertModule.autoPerformance(id, totalRecord);
						if(!auto.Success) {
							throw auto.Message;
						}

						const handlerChain = sdk.HandlerChainService.instance;
						await handlerChain.process({
							type: "crt.LoadDataRequest",
							$context: request.$context,
							config: {
								loadType: "reload"
							},
							dataSourceName: "GridDetail_PerformancesDS"
						});
					} catch (error) {
						await concertModule.toast(request, error);
					} finally {
						mask.hideBodyMask();
					}
					
			        return next?.handle(request);
			    }
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});