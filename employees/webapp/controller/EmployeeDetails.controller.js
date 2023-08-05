sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "logaligroup/employees/model/formatter"
    
], function(Controller,formatter) {
    'use strict';
   
    function onInit(){

    }
    
    function onCreateIncidence(){

       
        var tableIncidence = this.getView().byId("tableIncidence");
        //Crear el objeto visual
         var newIncidence = sap.ui.xmlfragment("logaligroup.employees.fragment.NewIncidence", this);
        // Crear el objeto en el modelo
    
         var incidenceModel = this.getView().getModel("incidenceModel");
         var odata = incidenceModel.getData();
         var index = odata.length;
         odata.push({index : index  + 1});
         incidenceModel.refresh();
        
        //La relacion entre estos
        newIncidence.bindElement("incidenceModel>/" + index);
        //Agregar objecto visual a la vista
        tableIncidence.addContent(newIncidence);

    }

    function onDeleteIncidence(oEvent){
     var tableIncidence=this.byId("tableIncidence")
     var rowIncidence =oEvent.getSource().getParent().getParent(); 
     var incidenceModel =this.getView().getModel("incidenceModel") 
    
     //Eliminar Datos
      var odata =incidenceModel.getData();
      var contexObj = rowIndice.getBindingContext("incidenceModel").getObject();
      odata.splice(contextObj.index-1,1);
       for( var i in odata){
          odata[i].index = parseInt(i)+1;

       }
       incidenceModel.refresh();

     //Eliminar Objeto Visual

     tableIncidence.removeContent(rowIndice);
     for( var j in tableIncidence.getContent()){
        tableIncidence.getContent()[j].bindElement("incidenceModel>/" + j) ;      
     }   

    }

    return Controller.extend("logaligroup.employees.controller.EmployeeDetails",{
      
        onInit: onInit,
        
        onCreateIncidence : onCreateIncidence,
        onDeleteIncidence : onDeleteIncidence,
        Formatter  : formatter
    })
    
}); 