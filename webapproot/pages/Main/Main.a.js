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

Main.widgets = {
varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
}],
clienteLiveVariable3: ["wm.LiveVariable", {"type":"com.mi_envasedb.data.Cliente"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mi_envasedb.data.Cliente","view":[
{"caption":"IdCliente","sortable":true,"dataIndex":"idCliente","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Nombre","sortable":true,"dataIndex":"nombre","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Password","sortable":true,"dataIndex":"password","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
tipoenvaseLiveVariable1: ["wm.LiveVariable", {"type":"com.mi_envasedb.data.TipoEnvase"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mi_envasedb.data.TipoEnvase","view":[
{"caption":"IdTipoEnvase","sortable":true,"dataIndex":"idTipoEnvase","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}
]}, {}]
}],
operacionmovimientoLiveVariable1: ["wm.LiveVariable", {"type":"com.mi_envasedb.data.OperacionMovimiento"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mi_envasedb.data.OperacionMovimiento","view":[
{"caption":"IdOperacionMovimiento","sortable":true,"dataIndex":"idOperacionMovimiento","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},
{"caption":"Operador","sortable":true,"dataIndex":"operador","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},
{"caption":"Descripcion","sortable":true,"dataIndex":"descripcion","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}
]}, {}]
}],
movimientotipoenvaseLiveVariable1: ["wm.LiveVariable", {"type":"com.mi_envasedb.data.MovimientoTipoEnvase"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mi_envasedb.data.MovimientoTipoEnvase","related":["operacionMovimiento","clienteTipoEnvase","clienteTipoEnvase.tipoEnvase","clienteTipoEnvase.cliente"],"view":[
{"caption":"IdMovimientoTipoEnvase","sortable":true,"dataIndex":"idMovimientoTipoEnvase","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":4000,"subType":null,"widthUnits":"px"},
{"caption":"Cantidad","sortable":true,"dataIndex":"cantidad","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4001,"subType":null,"widthUnits":"px"},
{"caption":"Total","sortable":true,"dataIndex":"total","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4002,"subType":null,"widthUnits":"px"},
{"caption":"Operador","sortable":true,"dataIndex":"operacionMovimiento.operador","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":5001},
{"caption":"IdClienteTipoEnvase","sortable":true,"dataIndex":"clienteTipoEnvase.idClienteTipoEnvase","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6000},
{"caption":"Cantidad","sortable":true,"dataIndex":"clienteTipoEnvase.cantidad","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":6001},
{"caption":"Descripcion","sortable":true,"dataIndex":"clienteTipoEnvase.tipoEnvase.descripcion","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":7001},
{"caption":"Nombre","sortable":true,"dataIndex":"clienteTipoEnvase.cliente.nombre","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":8001}
]}, {}]
}],
clientetipoenvaseLiveVariable1: ["wm.LiveVariable", {"type":"com.mi_envasedb.data.ClienteTipoEnvase"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.mi_envasedb.data.ClienteTipoEnvase","related":["tipoEnvase","cliente"],"view":[
{"caption":"IdClienteTipoEnvase","sortable":true,"dataIndex":"idClienteTipoEnvase","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"Cantidad","sortable":true,"dataIndex":"cantidad","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},
{"caption":"Descripcion","sortable":true,"dataIndex":"tipoEnvase.descripcion","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2001},
{"caption":"Nombre","sortable":true,"dataIndex":"cliente.nombre","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3001}
]}, {}]
}],
InsertarMovimientoServiceVariable: ["wm.ServiceVariable", {"inFlightBehavior":"executeLast","operation":"InsertarMovimientoDB","service":"InsertarMovimiento"}, {}, {
input: ["wm.ServiceInput", {"type":"InsertarMovimientoDBInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseLiveForm1.dataOutput.cantidad","targetProperty":"cantidad"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseLiveForm1.dataOutput.cantidad","targetProperty":"total"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseLiveForm1.dataOutput.idClienteTipoEnvase","targetProperty":"clienteTipoEnvaseId"}, {}],
wire3: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseLiveForm1.dataOutput.idClienteTipoEnvase","targetProperty":"id_cliente_tipo_envase"}, {}]
}]
}]
}],
variable1: ["wm.Variable", {"type":"StringData"}, {}],
variable2: ["wm.Variable", {"type":"StringData"}, {}],
clientetipoenvaseLiveVariable2: ["wm.LiveVariable", {"inFlightBehavior":"executeAll","type":"com.mi_envasedb.data.ClienteTipoEnvase"}, {"onSuccess":"insertMovimientotipoenvaseLiveForm2"}, {
liveView: ["wm.LiveView", {"dataType":"com.mi_envasedb.data.ClienteTipoEnvase","related":["tipoEnvase","cliente"],"view":[
{"caption":"IdClienteTipoEnvase","sortable":true,"dataIndex":"idClienteTipoEnvase","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},
{"caption":"Cantidad","sortable":true,"dataIndex":"cantidad","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},
{"caption":"Descripcion","sortable":true,"dataIndex":"tipoEnvase.descripcion","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2001},
{"caption":"Nombre","sortable":true,"dataIndex":"cliente.nombre","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":3001}
]}, {}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","preferredDevice":"desktop","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minDesktopHeight":600,"minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","borderColor":"#333333","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"Mi Envase Admin","height":"35px","padding":"4","width":"100%"}, {}],
panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
dojoMenu1: ["wm.DojoMenu", {"fullStructure":[
{"label":"Help"},
{"label":"About"},
{"label":"Logout","onClick":"varTemplateLogout"}
],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
}]
}],
panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
tabLayers1: ["wm.TabLayers", {}, {}, {
layer1: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Clientes","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
mi_envaseDBLivePanel: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Cliente_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Cliente","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"clienteLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"clienteDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"clienteSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
clienteLayers: ["wm.BreadcrumbLayers", {}, {}, {
Cliente_List: ["wm.Layer", {"borderColor":"","caption":"Cliente List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"clienteDojoGrid.deselectAll"}, {
clienteDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idCliente","title":"IdCliente","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"nombre","title":"Nombre","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"password","title":"Password","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Nombre: \" + ${nombre} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Password: \" + ${password}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mi_envasedb.data.Cliente","height":"100%","localizationStructure":{},"margin":"4","minDesktopHeight":60}, {"onSelect":"mi_envaseDBLivePanel.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"clienteLiveVariable3","targetProperty":"dataSet"}, {}]
}]
}],
clienteGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
clienteNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"mi_envaseDBLivePanel.popupLivePanelInsert"}]
}]
}],
Edit_Cliente: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Cliente","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
clienteLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"88px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"mi_envaseDBLivePanel.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"clienteDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idClienteEditor1: ["wm.Number", {"caption":"IdCliente","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idCliente","height":"26px","required":true,"width":"100%"}, {}],
nombreEditor1: ["wm.Text", {"caption":"Nombre","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"nombre","height":"26px","maxChars":45,"required":true,"width":"100%"}, {}],
passwordEditor1: ["wm.Text", {"caption":"Password","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"password","height":"26px","maxChars":45,"required":true,"width":"100%"}, {}]
}],
clienteFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
clienteSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"clienteLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${clienteLiveForm1.invalid} || !${clienteLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
clienteCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"Cliente_List"}],
clienteDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"clienteLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"clienteDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
layer2: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Envases Clientes","horizontalAlign":"left","verticalAlign":"top"}, {}, {
mi_envaseDBLivePanel4: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Clientetipoenvase_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Clientetipoenvase","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"clientetipoenvaseLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"clientetipoenvaseDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"clientetipoenvaseSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
clientetipoenvaseLayers: ["wm.BreadcrumbLayers", {}, {}, {
Clientetipoenvase_List: ["wm.Layer", {"borderColor":"","caption":"Clientetipoenvase List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"clientetipoenvaseDojoGrid.deselectAll"}, {
clientetipoenvaseDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idClienteTipoEnvase","title":"IdClienteTipoEnvase","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"cliente.nombre","title":"Cliente.nombre","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"cantidad","title":"Cantidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cliente.nombre: \" + ${cliente.nombre} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cantidad: \" + ${cantidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"TipoEnvase.descripcion: \" + ${tipoEnvase.descripcion}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":true,"field":"tipoEnvase.descripcion","title":"TipoEnvase.descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.mi_envasedb.data.ClienteTipoEnvase","height":"100%","margin":"4","minDesktopHeight":60}, {"onSelect":"mi_envaseDBLivePanel4.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
clientetipoenvaseGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
clientetipoenvaseNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"mi_envaseDBLivePanel4.popupLivePanelInsert"}]
}]
}],
Edit_Clientetipoenvase: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Clientetipoenvase","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
clientetipoenvaseLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"displayErrors":false,"height":"100%","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onError":"clientetipoenvaseLiveForm1Error","onInsertData":"insertMovimientotipoenvaseLiveForm1","onSuccess":"mi_envaseDBLivePanel4.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseDojoGrid.selectedItem","targetProperty":"dataSet"}, {}],
wire1: ["wm.Wire", {"expression":undefined,"source":"movimientotipoenvaseLiveForm1.dataOutput.idMovimientoTipoEnvase","targetProperty":"dataOutput.idClienteTipoEnvase"}, {}]
}],
idClienteTipoEnvaseEditor1: ["wm.Number", {"borderColor":"#FBFBFB","caption":"IdClienteTipoEnvase","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idClienteTipoEnvase","height":"26px","required":true,"width":"100%"}, {}],
cantidadEditor2: ["wm.Text", {"caption":"Cantidad","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"cantidad","height":"26px","maxChars":45,"required":true,"width":"100%"}, {}],
clienteLookup1: ["wm.Lookup", {"caption":"Cliente","captionSize":"140px","dataType":"com.mi_envasedb.data.Cliente","displayField":"nombre","formField":"cliente","required":true,"width":"100%"}, {}],
tipoEnvaseLookup1: ["wm.Lookup", {"caption":"TipoEnvase","captionSize":"140px","dataType":"com.mi_envasedb.data.TipoEnvase","displayField":"descripcion","formField":"tipoEnvase","required":true,"width":"100%"}, {}]
}],
clientetipoenvaseFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
clientetipoenvaseSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"clientetipoenvaseLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${clientetipoenvaseLiveForm1.invalid} || !${clientetipoenvaseLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
clientetipoenvaseCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"Clientetipoenvase_List"}],
clientetipoenvaseDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"clientetipoenvaseLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"clientetipoenvaseDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
layer3: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Movimientos","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
mi_envaseDBLivePanel3: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Movimientotipoenvase_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Movimientotipoenvase","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"movimientotipoenvaseLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"movimientotipoenvaseDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"movimientotipoenvaseSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
movimientotipoenvaseLayers: ["wm.BreadcrumbLayers", {}, {}, {
Movimientotipoenvase_List: ["wm.Layer", {"borderColor":"","caption":"Movimientotipoenvase List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"movimientotipoenvaseDojoGrid.deselectAll"}, {
movimientotipoenvaseDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idMovimientoTipoEnvase","title":"IdMovimientoTipoEnvase","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"clienteTipoEnvase.cliente.nombre","title":"Cliente","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"cantidad","title":"Cantidad","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"operacionMovimiento.operador","title":"Operacion","width":"100%","align":"left","formatFunc":"","editorProps":null,"mobileColumn":false},
{"show":true,"field":"total","title":"Total","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Cliente: \" + ${clienteTipoEnvase.cliente.nombre} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Cantidad: \" + ${cantidad}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Operacion: \" + ${operacionMovimiento.operador}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Total: \" + ${total}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"ClienteTipoEnvase.tipoEnvase.descripcion: \" + ${clienteTipoEnvase.tipoEnvase.descripcion}\n + \"</div>\"\n\n","mobileColumn":true},
{"show":false,"field":"clienteTipoEnvase.idClienteTipoEnvase","title":"ClienteTipoEnvase.idClienteTipoEnvase","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":false,"field":"clienteTipoEnvase.cantidad","title":"ClienteTipoEnvase.cantidad","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":true,"field":"clienteTipoEnvase.tipoEnvase.descripcion","title":"ClienteTipoEnvase.tipoEnvase.descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false}
],"dsType":"com.mi_envasedb.data.MovimientoTipoEnvase","height":"100%","margin":"4","minDesktopHeight":60}, {"onSelect":"mi_envaseDBLivePanel3.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"movimientotipoenvaseLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
movimientotipoenvaseGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
movimientotipoenvaseNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"mi_envaseDBLivePanel3.popupLivePanelInsert"}]
}]
}],
Edit_Movimientotipoenvase: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Movimientotipoenvase","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
movimientotipoenvaseLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"166px","horizontalAlign":"left","liveEditing":false,"margin":"4","readonly":true,"verticalAlign":"top"}, {"onSuccess":"mi_envaseDBLivePanel3.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"movimientotipoenvaseDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idMovimientoTipoEnvaseEditor1: ["wm.Number", {"borderColor":"#FBFBFB","caption":"IdMovimientoTipoEnvase","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idMovimientoTipoEnvase","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
cantidadEditor1: ["wm.Number", {"borderColor":"#FBFBFB","caption":"Cantidad","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"cantidad","height":"26px","readonly":true,"required":true,"width":"100%"}, {}],
totalEditor1: ["wm.Text", {"caption":"Total","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","disabled":true,"emptyValue":"emptyString","formField":"total","height":"26px","maxChars":45,"readonly":true,"required":true,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"function operacion(valor1, valor2, operador) {\n    var resultado = 0;\n\n\tconsole.log(\"valor1: \" + valor1); //Total\n\tconsole.log(\"valor2: \" + valor2); //Valor operacion\n\tconsole.log(\"operador: \" + operador); //Suma o Resta\n    \n    var v1 = parseInt(valor1, 10);\n    var v2 = parseInt(valor2, 10);\n\n\tif (operador === '+') {\n\t\tresultado = v1 + v2; \n\t}\n\n\tif (operador === '-') {\n\t\tresultado = v1 - v2; \n\t}\n\n\treturn resultado;\n}\n\na = operacion(${clienteTipoEnvaseLookup1.selectedItem.cantidad}, \n            ${cantidadEditor1.dataValue}, \n            ${operacionMovimientoLookup1.displayValue});\na;","targetProperty":"dataValue"}, {}]
}]
}],
operacionMovimientoLookup1: ["wm.Lookup", {"caption":"OperacionMovimiento","captionSize":"140px","dataType":"com.mi_envasedb.data.OperacionMovimiento","displayField":"operador","formField":"operacionMovimiento","readonly":true,"required":true,"width":"100%"}, {}],
clienteTipoEnvaseLookup1: ["wm.Lookup", {"autoDataSet":false,"caption":"ClienteTipoEnvase","captionSize":"140px","dataType":"com.mi_envasedb.data.ClienteTipoEnvase","defaultInsert":"","displayExpression":undefined,"displayField":"idClienteTipoEnvase","formField":"clienteTipoEnvase","required":true,"restrictValues":false,"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
dataFieldWire: ["wm.Wire", {"source":"clienteTipoEnvaseLookup1.liveVariable","targetProperty":"dataSet"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"clientetipoenvaseLiveVariable2","targetProperty":"dataSet"}, {}]
}]
}],
movimientotipoenvaseLiveForm1EditPanel: ["wm.EditPanel", {"desktopHeight":"32px","height":"32px","isCustomized":true,"liveForm":"movimientotipoenvaseLiveForm1","operationPanel":"operationPanel1","savePanel":"savePanel1","styles":{}}, {}, {
savePanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
saveButton1: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Guardar","height":"100%","margin":"4"}, {"onclick":"movimientotipoenvaseLiveForm1EditPanel.saveData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"movimientotipoenvaseLiveForm1EditPanel.formInvalid","targetProperty":"disabled"}, {}]
}]
}],
cancelButton1: ["wm.Button", {"caption":"Cancelar","height":"100%","margin":"4"}, {"onclick":"movimientotipoenvaseLiveForm1EditPanel.cancelEdit"}]
}],
operationPanel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
newButton1: ["wm.Button", {"caption":"Nuevo","height":"100%","margin":"4"}, {"onclick":"movimientotipoenvaseLiveForm1EditPanel.beginDataInsert"}],
updateButton1: ["wm.Button", {"caption":"Modificar","height":"100%","margin":"4"}, {"onclick":"movimientotipoenvaseLiveForm1EditPanel.beginDataUpdate"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"movimientotipoenvaseLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}],
deleteButton1: ["wm.Button", {"caption":"Eliminar","height":"100%","margin":"4"}, {"onclick":"movimientotipoenvaseLiveForm1EditPanel.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"movimientotipoenvaseLiveForm1EditPanel.formUneditable","targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}],
layer4: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Tipos de envase","horizontalAlign":"left","verticalAlign":"top"}, {}, {
mi_envaseDBLivePanel1: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Tipoenvase_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Tipoenvase","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"tipoenvaseLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"tipoenvaseDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"tipoenvaseSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
tipoenvaseLayers: ["wm.BreadcrumbLayers", {}, {}, {
Tipoenvase_List: ["wm.Layer", {"borderColor":"","caption":"Tipoenvase List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"tipoenvaseDojoGrid.deselectAll"}, {
tipoenvaseDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":false,"field":"idTipoEnvase","title":"IdTipoEnvase","width":"80px","align":"right","formatFunc":"","mobileColumn":false},
{"show":true,"field":"descripcion","title":"Descripcion","width":"100%","align":"left","formatFunc":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Descripcion: \" + ${descripcion} +\n\"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mi_envasedb.data.TipoEnvase","height":"100%","margin":"4","minDesktopHeight":60}, {"onSelect":"mi_envaseDBLivePanel1.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tipoenvaseLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
tipoenvaseGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
tipoenvaseNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"mi_envaseDBLivePanel1.popupLivePanelInsert"}]
}]
}],
Edit_Tipoenvase: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Tipoenvase","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
tipoenvaseLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"mi_envaseDBLivePanel1.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"tipoenvaseDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idTipoEnvaseEditor1: ["wm.Number", {"borderColor":"#FBFBFB","caption":"IdTipoEnvase","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idTipoEnvase","height":"26px","required":true,"width":"100%"}, {}],
descripcionEditor1: ["wm.Text", {"caption":"Descripcion","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"descripcion","height":"26px","maxChars":45,"required":true,"width":"100%"}, {}]
}],
tipoenvaseFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
tipoenvaseSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"tipoenvaseLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${tipoenvaseLiveForm1.invalid} || !${tipoenvaseLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
tipoenvaseCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"Tipoenvase_List"}],
tipoenvaseDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"tipoenvaseLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"tipoenvaseDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}],
layer5: ["wm.Layer", {"border":"1","borderColor":"#999999","caption":"Operaciones","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
mi_envaseDBLivePanel2: ["wm.LivePanel", {"autoScroll":false,"borderColor":"#FBFBFB","horizontalAlign":"left","verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"Operacionmovimiento_List","targetId":null,"targetProperty":"gridLayer"}, {}],
wire1: ["wm.Wire", {"source":"Edit_Operacionmovimiento","targetId":null,"targetProperty":"detailsLayer"}, {}],
wire2: ["wm.Wire", {"source":"operacionmovimientoLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
wire3: ["wm.Wire", {"source":"operacionmovimientoDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
wire4: ["wm.Wire", {"source":"operacionmovimientoSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
}],
operacionmovimientoLayers: ["wm.BreadcrumbLayers", {}, {}, {
Operacionmovimiento_List: ["wm.Layer", {"borderColor":"","caption":"Operacionmovimiento List","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {"onShow":"operacionmovimientoDojoGrid.deselectAll"}, {
operacionmovimientoDojoGrid: ["wm.DojoGrid", {"columns":[
{"show":true,"field":"idOperacionMovimiento","title":"IdOperacionMovimiento","width":"80px","displayType":"Number","align":"right","formatFunc":""},
{"show":true,"field":"operador","title":"Operador","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":true,"field":"descripcion","title":"Descripcion","width":"100%","displayType":"Text","align":"left","formatFunc":""},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"IdOperacionMovimiento: \" + ${idOperacionMovimiento} +\n\"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Operador: \" + ${operador}\n + \"</div>\"\n\n+ \"<div class='MobileRow'>\" +\n\"Descripcion: \" + ${descripcion}\n + \"</div>\"\n\n","mobileColumn":true}
],"dsType":"com.mi_envasedb.data.OperacionMovimiento","height":"100%","margin":"4","minDesktopHeight":60}, {"onSelect":"mi_envaseDBLivePanel2.popupLivePanelEdit"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"operacionmovimientoLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
operacionmovimientoGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
operacionmovimientoNewButton: ["wm.Button", {"caption":"Nuevo","margin":"4"}, {"onclick":"mi_envaseDBLivePanel2.popupLivePanelInsert"}]
}]
}],
Edit_Operacionmovimiento: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"Edit Operacionmovimiento","horizontalAlign":"left","themeStyleType":"ContentPanel","verticalAlign":"top"}, {}, {
operacionmovimientoLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"mi_envaseDBLivePanel2.popupLiveFormSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"operacionmovimientoDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
}],
idOperacionMovimientoEditor1: ["wm.Number", {"borderColor":"#FBFBFB","caption":"IdOperacionMovimiento","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"zero","formField":"idOperacionMovimiento","height":"26px","required":true,"width":"100%"}, {}],
operadorEditor1: ["wm.Text", {"caption":"Operador","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"operador","height":"26px","maxChars":1,"required":true,"width":"100%"}, {}],
descripcionEditor2: ["wm.Text", {"caption":"Descripcion","captionSize":"140px","changeOnKey":true,"desktopHeight":"26px","emptyValue":"emptyString","formField":"descripcion","height":"26px","required":true,"width":"100%"}, {}]
}],
operacionmovimientoFormButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
operacionmovimientoSaveButton: ["wm.Button", {"caption":"Guardar","margin":"4"}, {"onclick":"operacionmovimientoLiveForm1.saveDataIfValid"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${operacionmovimientoLiveForm1.invalid} || !${operacionmovimientoLiveForm1.isDirty}","targetId":null,"targetProperty":"disabled"}, {}]
}]
}],
operacionmovimientoCancelButton: ["wm.Button", {"caption":"Cancelar","margin":"4"}, {"onclick":"Operacionmovimiento_List"}],
operacionmovimientoDeleteButton: ["wm.Button", {"caption":"Eliminar","margin":"4"}, {"onclick":"operacionmovimientoLiveForm1.deleteData"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"source":"operacionmovimientoDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
}]
}]
}]
}]
}]
}]
}]
}]
}],
panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
}]
}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';