sap.ui.define(
  [   
      "sap/ui/core/mvc/Controller"
  ],
  function(BaseController) {
    "use strict";

    function showEmployeeDetails(category,nameEvent, path){
          var detailView = this.getView().byId("detailEmployeeView")
          detailView.bindElement("jsonEmployees>" + path);
          this.getView().getModel("jsonModelLayout").setProperty("/ActiveKey","TwoColumnsBeginExpanded")   
     
        var incidenceModel =new sap.ui.model.json.JSONModel([]);
           detailView.setModel(incidenceModel,"incidenceModel");
           detailView.byId("tableIncidence").removeAllContent();

    }
    

    return BaseController.extend("logaligroup.employees.controller.App", {

      onAfterRendering: function () {
        var oView = this.getView();
        var i18nBundle = oView.getModel("i18n").getResourceBundle();
     

     
       var oJSONModel = new sap.ui.model.json.JSONModel();
         oJSONModel.loadData("./localService/mockdata/Employees.json",false);
         oView.setModel(oJSONModel,"jsonEmployees");


         var oJSONModelCountries = new sap.ui.model.json.JSONModel();
         oJSONModelCountries.loadData("./localService/mockdata/Countries.json",false);
         oView.setModel(oJSONModelCountries,"jsonCountries");

         var oJsonModelConfig = new sap.ui.model.json.JSONModel({

           visibleID :true,
           visibleName :true,
           visibleCity :false,
           visibleBtnShowCity :true,
           visibleBtnHideCity :false
           

         })
         oView.setModel(oJsonModelConfig,"jsonModelConfig");

         var oJsonModelLayout = new sap.ui.model.json.JSONModel();
         oJsonModelLayout.loadData("./localService/mockdata/Layout.json",false);
         oView.setModel(oJsonModelLayout,"jsonModelLayout");
           

         this._bus = sap.ui.getCore().getEventBus();
         this._bus.subscribe("flexible","showEmployees",this.showEmployeeDetails,this)

     },
     showEmployeeDetails:showEmployeeDetails
    });
  }
);
