sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/MessageToast'
 
    
], function(Controller,MessageToast) {
    'use strict';

    
       
    function onShowHello(){
        let oBundle = this.getView().getModel("i18n").getResourceBundle();
        let sRecipient=this.getView().getModel().getProperty("/recipient/name");
        var sMsg = oBundle.getText("helloMsg",[sRecipient])
        MessageToast.show(sMsg );

    }

    function onOpenDialog(){
        this.getOwnerComponent().openHelloDialog()

    }

    
    return Controller.extend("logaligroup.invoices.controller.HelloPanel",{

        onShowHello :onShowHello,
        onOpenDialog:onOpenDialog
        
       
    })
    
}); 