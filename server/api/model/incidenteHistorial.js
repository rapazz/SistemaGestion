
"use strict";


module.exports = function(sequelize, DataTypes) {
  var incidenteHistorial = sequelize.define("incidenteHistorial", {
    idIncidenteHistorial: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idIncidente: DataTypes.INTEGER,
   fechaCreacion:DataTypes.DATE,
   idAccion:DataTypes.INTEGER,
   idEstado:DataTypes.INTEGER,
  idCodigoTermino:DataTypes.INTEGER,
  comentarios: DataTypes.STRING,
  usuarioId:DataTypes.INTEGER
  
  
  }, 
   {
    classMethods: {
      associate: function(models) {

        incidenteHistorial.belongsTo(models.usuario,{foreignKey:'usuarioId', as:'usuario'})
        incidenteHistorial.belongsTo(models.codigotermino,{foreignKey:'idCodigoTermino', as:'codigotermino'})
        incidenteHistorial.belongsTo(models.estado,{foreignKey:'idEstado', as:'estado'})
      //  proyecto.hasMany(models.proyectoAdjunto,{foreignKey:'idProyecto', as:'adjunto'})
            }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'incidenteHistorials', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return incidenteHistorial;
};


