
"use strict";


module.exports = function(sequelize, DataTypes) {
  var historialProyecto = sequelize.define("historialProyecto", {
    idHistorial: {type: DataTypes.INTEGER, primaryKey: true ,autoIncrement:true},
  descripcion: DataTypes.STRING,
  fechaCreacion:DataTypes.DATE,
  idUsuario:DataTypes.INTEGER,
  idEstadoProyecto:DataTypes.INTEGER,
  idProyecto:DataTypes.INTEGER,
  idEtapaProyecto:DataTypes.INTEGER
  }, 
   {
    classMethods: {
      associate: function(models) {
        historialProyecto.belongsTo(models.usuario,{foreignKey:'idUsuario', as:'usuario'})
          historialProyecto.belongsTo(models.estadoProyecto,{foreignKey:'idEstadoProyecto', as:'estadoProyecto'})
          historialProyecto.belongsTo(models.etapaProyecto,{foreignKey:'idEtapaProyecto', as:'etapa'})
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'historialProyecto', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return historialProyecto;
};


