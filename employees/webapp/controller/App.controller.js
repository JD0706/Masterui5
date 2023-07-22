sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(BaseController) {
      "use strict";
  
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

            //Modelo para configurar la aplicacion 
             var oJsonModelConfig = new sap.ui.model.json.JSONModel({

                 visibleID :true,
                 visibleName :true,
                 visibleCity :false,
                 visibleBtnShowCity :true,
                 visibleBtnHideCity :false
                       
               })
               oView.setModel(oJsonModelConfig,"jsonModelConfig");
         }
      });
    }
  );
  