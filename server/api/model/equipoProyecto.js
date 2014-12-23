
"use strict";


module.exports = function(sequelize, DataTypes) {
  var equipoProyecto = sequelize.define("equipoProyecto", {
    idEquipoProyecto: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: DataTypes.STRING,
  nombre: DataTypes.STRING,
  idRol:DataTypes.INTEGER,
   fechaAutorizacion:DataTypes.DATE,
  estadoAutorizacion:DataTypes.INTEGER,
  idProyecto:DataTypes.INTEGER,
  idEtapaProyecto:DataTypes.INTEGER,
   uid:DataTypes.STRING
  
  
  }, 
   {
    classMethods: {
      associate: function(models) {
        
        equipoProyecto.belongsTo(models.etapaProyecto,{foreignKey:'idEtapaProyecto', as:'etapa'})
        equipoProyecto.belongsTo(models.parametros,{foreignKey:'idRol', as:'cargo'})
        
        
        
        
        
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'equipoProyecto', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return equipoProyecto;
};


