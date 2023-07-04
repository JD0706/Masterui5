sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'logaligroup/invoices/model/InvoicesFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
], function(Controller,JSONModel,InvoicesFormatter,Filter,FilterOperator) {
    'use strict';
    return Controller.extend("logaligroup.invoices.controller.InvoicesList",{
      formatter :InvoicesFormatter,
     onInit :  function(){
        let oViewModel = new JSONModel({
            usd:"USD",
            eur:"EUR"       
         });
        this.getView().setModel(oViewModel, "currency");     
     },

     onFilterInvoices : function(oEvent){

        const aFilter=[];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
             aFilter.push(new Filter("ProducName",FilterOperator.Contains, sQuery));
        };

        const oList=this.getView().byId("InvoiceList");
        const oBinding=oList.getBinding("items");
        oBinding.filter(aFilter);
        
     },
     navigateToDetails : function(oEvent){
      const  oItem = oEvent.getSource();
      const  oRouter = sap.ui.core.UIComponent.getRouterFor(this);
      oRouter.navTo("Details", {
          invoicePath:window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))
      });
  }
});
}); 