dojo.declare("Main", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "desktop",
    
    /**
     *  Inserta idClienteTipoEnvase y cantidad en variable 1 y 2
     */
    insertMovimientotipoenvaseLiveForm1: function(inSender, inData) {
        console.log("insertMovimientotipoenvaseLiveForm1 operation:" + inSender.operation);
        
        console.log("insertMovimientotipoenvaseLiveForm1 count: " + this.clienteTipoEnvaseLookup1.dataSet.getCount());
        
        if (inSender.operation == 'insert') {
            var idClienteTipoEnvase = "" + this.idClienteTipoEnvaseEditor1.getDataValue();
            var cantidad = this.cantidadEditor2.getDataValue();
            
            console.log('insertMovimientotipoenvaseLiveForm1 idClienteTipoEnvase: ' + idClienteTipoEnvase);
            console.log('insertMovimientotipoenvaseLiveForm1 cantidad: ' + cantidad);
            
            this.variable1.setValue("dataValue", idClienteTipoEnvase);
            this.variable2.setValue("dataValue", cantidad);
            
            console.log("insertMovimientotipoenvaseLiveForm1 Hemos seteado las v1 y v2.");
            
            //Actualizamos liveVariable para que se ejecute llamado a clientetipoenvaseLiveVariable2Success
            this.clientetipoenvaseLiveVariable2.update();
            
            console.log("insertMovimientotipoenvaseLiveForm1 Hemos llamado a clientetipoenvaseLiveVariable2 update");
        }
        
    },
    
    /**
     *  Lee v1 y v2 y genera nuevo movimientoTipoEnvase.
     */
    clientetipoenvaseLiveVariable2Success: function(inSender, inDeprecated) {
        
        var idClienteTipoEnvase = this.variable1.getValue("dataValue");
        var cantidad = this.variable2.getValue("dataValue");
        
        if (typeof idClienteTipoEnvase != "undefined") {
            console.log('insertMovimientotipoenvaseLiveForm2 idClienteTipoEnvase: ' + idClienteTipoEnvase);
            console.log('insertMovimientotipoenvaseLiveForm2 cantidad: ' + cantidad);
            
            console.log("insertMovimientotipoenvaseLiveForm2 count: " + this.clienteTipoEnvaseLookup1.dataSet.getCount());
            
            var fecha = new Date();
            
            this.cantidadEditor1.setDataValue(cantidad);
            
            this.fechaEditor1.setDataValue(fecha);
            this.glosaEditor1.setDataValue("Insert inicial: " + cantidad + " en el: " + fecha);
            this.operacionMovimientoLookup1.setDataValue("+");
            
            this.clienteTipoEnvaseLookup1.setDataValue(idClienteTipoEnvase);
            
            console.log('insertMovimientotipoenvaseLiveForm2 json:' + JSON.stringify(this.clienteTipoEnvaseLookup1.selectedItem.getData()));
            
            this.totalEditor1.setDataValue(cantidad);
            
            console.log('insertMovimientotipoenvaseLiveForm2 total setted.');
            
            //Insertamos la data en el form :D
            this.movimientotipoenvaseLiveForm1.insertData();
            
            console.log('insertMovimientotipoenvaseLiveForm2 Data inserted.');
            
            
            //TODO: hacer funcion que limpie data
            this.variable1.clearData();
            this.variable2.clearData();
            
            console.log('insertMovimientotipoenvaseLiveForm2 Variables cleared.');
            
            //TODO: hay que setear flag para evitar que se actualice cte por mte
            
            this.variable5.setValue("dataValue", "Inicial.");
            
        }
        
    },
    
    /**
     *  En caso de existir la tupa idCliente - idTipoEnvase despliega mensaje 
     *  de error correspondiente.
     */
    clientetipoenvaseLiveForm1Error: function(inSender, inError) {
		var errorMsg = inError.toString();
        
        console.log("errorMsg:" + errorMsg);
        
        if (~errorMsg.indexOf("Error: Duplicate entry '1-1' for key 'unique_index'")) {
            app.alert("El cliente ya tiene envases de ese tipo. \n Por favor seleccione de otro tipo.");
        }
	},
    
    /**
     *  Guarda total en variable para ser usado para actualizar clienteTipoEnvase.
     * */
	movimientotipoenvaseLiveForm1InsertData: function(inSender) {
        console.log("movimientotipoenvaseLiveForm1InsertData operation:" + inSender.operation);
            
        var idClienteTipoEnvase = "" + this.clienteTipoEnvaseLookup1.getDisplayValue();
        var total = "" + this.totalEditor1.getDataValue();
        var operacion = "" + this.operacionMovimientoLookup1.getDisplayValue();
        
        var clienteTipoEnvase = this.clienteTipoEnvaseLookup1.getDataValue();
        
        console.log('movimientotipoenvaseLiveForm1InsertData idClienteTipoEnvase: ' + idClienteTipoEnvase);
        console.log('movimientotipoenvaseLiveForm1InsertData total: ' + total);
        console.log('movimientotipoenvaseLiveForm1InsertData operacion: ' + operacion);
        console.log('movimientotipoenvaseLiveForm1InsertData clienteTipoEnvase: ' + clienteTipoEnvase);
        
        this.variable1.setValue("dataValue", idClienteTipoEnvase);
        this.variable2.setValue("dataValue", total);
        this.variable3.setValue("dataValue", operacion);
        this.variable4.setValue("dataValue", clienteTipoEnvase);
        
        console.log("movimientotipoenvaseLiveForm1InsertData Hemos seteado las v3.");
        
         //Actualizamos liveVariable para que se ejecute llamado a js:insertMovimientotipoenvaseLiveForm2
        this.clientetipoenvaseLiveVariable3.update();
        
        console.log("movimientotipoenvaseLiveForm1InsertData actualizamos clientetipoenvaseLiveVariable3.");
        
	},
    
    /**
     *  Actualiza el total en ClienteTipoEnvase.
     * */
	clientetipoenvaseLiveVariable3Success: function(inSender, inDeprecated) {
        
        var idClienteTipoEnvase = this.variable1.getValue("dataValue");
        var total = this.variable2.getValue("dataValue");
        var operacion = this.variable3.getValue("dataValue");
        var clienteTipoEnvase = this.variable4.getValue("dataValue");
        var inicial = this.variable5.getValue("dataValue");
        
        //TODO: Hacer evaluacion inicial en movimientotipoenvaseLiveForm1InsertData
        console.log('clientetipoenvaseLiveVariable3Success inicial: ' + inicial);
        
        if (typeof operacion != "undefined" && typeof inicial == "undefined") {
            console.log('clientetipoenvaseLiveVariable3Success idClienteTipoEnvase: ' + idClienteTipoEnvase);
            console.log('clientetipoenvaseLiveVariable3Success total: ' + total);
            console.log('clientetipoenvaseLiveVariable3Success operacion: ' + operacion);
            console.log('clientetipoenvaseLiveVariable3Success clienteTipoEnvase: ' + clienteTipoEnvase);
            
            this.idClienteTipoEnvaseEditor1.setDataValue(clienteTipoEnvase.idClienteTipoEnvase);
            this.cantidadEditor2.setDataValue(total);
            this.clienteLookup1.setDataValue(clienteTipoEnvase.cliente);
            this.tipoEnvaseLookup1.setDataValue(clienteTipoEnvase.tipoEnvase);
            
            this.clientetipoenvaseLiveForm1.updateData();
            
            //TODO: hacer funcion que limpie data
            this.variable1.clearData();
            this.variable2.clearData();
            this.variable3.clearData();
            this.variable4.clearData();
            
            console.log('clientetipoenvaseLiveVariable3Success limpiamos 4 var.');
            
        } else {
            console.log('clientetipoenvaseLiveVariable3Success limpiamos inicial: ' + inicial);
            
            this.variable5.clearData();
        }
		
	},
    
	
	
	_end: 0
});