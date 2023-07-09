sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        function getGroupHeader(oGroup){
            var groupHeaderListItem =new sap.m.GroupHeaderListItem({
                title: oGroup.key,
                upperCase :true
            })
            return groupHeaderListItem;
        }

        function onSelectedRows(oEvent){
            var standartListItem = this.getView().byId("standardList")
            var selectedItems = standartListItem.getSelectedItems();

            var i18nModel= this.getView().getModel("i18n").getResourceBundle();

            if(selectedItems.length === 0){
                sap.m.MessageToast.show(i18nModel.getText("noSelection"))
             } else{
                var textMessage = i18nModel.getText("selection")
                for( var i in selectedItems){
                var context =    selectedItems[i].getBindingContext();
                var oContext = context.getObject();
                textMessage=textMessage + "-" + oContext.Material;
               
                }
                sap.m.MessageToast.show(textMessage)
              }
            }

        return Controller.extend("logaligroup.applists.controller.View1", {
            onInit: function () {
                var oJsonModel = new sap.ui.model.json.JSONModel();
                oJsonModel.loadData("./localService/mockdata/ListData.json");
                this.getView().setModel(oJsonModel);

            },
            getGroupHeader:getGroupHeader,
            onSelectedRows:onSelectedRows
        });
    });
