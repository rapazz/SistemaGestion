
"use strict";
var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
  var incidente2 = sequelize.define("incidente2", {
    idIncidente: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  idUsuarioKU:DataTypes.INTEGER,
  idUsuarioConsultor:DataTypes.INTEGER,
  fechaCreacion:DataTypes.DATE,
  idSubTipoIncidente:DataTypes.INTEGER,
  idTipoIncidente:DataTypes.INTEGER,
  idEstado:DataTypes.INTEGER,
  idOrigenProblema:DataTypes.INTEGER,
  idCodigoTermino:DataTypes.INTEGER,
  fechaCierre:DataTypes.DATE,
  fechaActualizacion:DataTypes.DATE,
  comentarioConsultor: DataTypes.STRING,
  sla:DataTypes.INTEGER,
   tiempoTranscurrido: {
    type     : DataTypes.VIRTUAL,
    
      get: function () {
        //falta implementar diferencias para el calculo del SLA  
        
          var now = moment(this.fechaCierre);
if (moment(this.fechaCierre)<0)
now = moment(Date.now());
console.log(Math.round(now.diff(this.fechaCreacion, 'hours', true)));

 return Math.round(now.diff(this.fechaCreacion, 'hours', true));
      
     },
    
  }
  }, 
   {
    classMethods: {
      associate: function(models) {

        incidente2.belongsTo(models.usuario,{foreignKey:'idUsuarioKU', as:'ku'})
        incidente2.belongsTo(models.usuario,{foreignKey:'idUsuarioConsultor', as:'consultor'})
        incidente2.belongsTo(models.tipoincidente,{foreignKey:'idTipoIncidente', as:'tipoIncidente'})
        incidente2.belongsTo(models.subtipoincidente,{foreignKey:'idSubTipoIncidente', as:'subtipoincidente'})
        incidente2.belongsTo(models.origenproblema,{foreignKey:'idOrigenProblema', as:'origenproblema'})
        incidente2.belongsTo(models.codigotermino,{foreignKey:'idCodigoTermino', as:'codigotermino'})
        incidente2.belongsTo(models.estado,{foreignKey:'idEstado', as:'estado'})
        incidente2.hasMany(models.incidenteHistorial,{foreignKey:'idIncidente', as:'historial'})
        incidente2.hasMany(models.adjunto,{foreignKey:'IncidenteId', as:'adjuntos'})
            }
                 }
     
   },
  
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'incidente2s', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return incidente2;
};


