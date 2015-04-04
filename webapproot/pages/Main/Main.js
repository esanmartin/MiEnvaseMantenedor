dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",
    
    insertMovimientotipoenvaseLiveForm1: function(inSender, inData) {
        console.log("insertMovimientotipoenvaseLiveForm1 operation:" + inSender.operation);
        
        console.log("insertMovimientotipoenvaseLiveForm1 count: " + this.clienteTipoEnvaseLookup1.dataSet.getCount());
        
        if (inSender.operation == 'insert') {
            var idClienteTipoEnvase = "" + this.idClienteTipoEnvaseEditor1.getDataValue();
            var cantidad = this.cantidadEditor2.getDataValue();
            
            console.log('insertMovimientotipoenvaseLiveForm1 idClienteTipoEnvase: ' + idClienteTipoEnvase);
            console.log('insertMovimientotipoenvaseLiveForm1 cantidad: ' + cantidad);
            
            this.variable1.setValue("dataValue",idClienteTipoEnvase);
            this.variable2.setValue("dataValue",cantidad);
            
            console.log("Hemos seteado las v1 y v2.");
            
            this.clientetipoenvaseLiveVariable2.update();
        }
        
    },
    
    insertMovimientotipoenvaseLiveForm2: function(inSender, inData) {
        
        var idClienteTipoEnvase = this.variable1.getValue("dataValue");
        var cantidad = this.variable2.getValue("dataValue");
        
        console.log('insertMovimientotipoenvaseLiveForm2 idClienteTipoEnvase: ' + idClienteTipoEnvase);
        console.log('insertMovimientotipoenvaseLiveForm2 cantidad: ' + cantidad);
        
        console.log("insertMovimientotipoenvaseLiveForm2 count: " + this.clienteTipoEnvaseLookup1.dataSet.getCount());
        
        if (typeof idClienteTipoEnvase != "undefined") {
            
            this.cantidadEditor1.setDataValue(cantidad);
            this.totalEditor1.setDataValue(cantidad);
            this.operacionMovimientoLookup1.setDataValue("+");
            
            this.clienteTipoEnvaseLookup1.setDataValue(idClienteTipoEnvase);
            
            console.log('json:' + JSON.stringify(this.clienteTipoEnvaseLookup1.selectedItem.getData()));
            
            //Insertamos la data en el form :D
            this.movimientotipoenvaseLiveForm1.insertData();
            
            console.log('Data inserted.');
            
            this.variable1.clearData();
            this.variable2.clearData();
            
            console.log('Variables cleared.');
        }
        
    },
    
    clientetipoenvaseLiveForm1Error: function(inSender, inError) {
		var errorMsg = inError.toString();
        
        console.log("errorMsg:" + errorMsg);
        
        if (~errorMsg.indexOf("Error: Duplicate entry '1-1' for key 'unique_index'")) {
            app.alert("El cliente ya tiene envases de ese tipo. \n Por favor seleccione de otro tipo.");
        }
	},
    
	_end: 0
});