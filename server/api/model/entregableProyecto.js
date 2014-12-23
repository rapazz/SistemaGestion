
"use strict";


module.exports = function(sequelize, DataTypes) {
  var entregableProyecto = sequelize.define("entregableProyecto", {
    idEntregable: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  idTipoEntregable: DataTypes.INTEGER,
  semanaEntrega: DataTypes.INTEGER,
  fechaEstimada:DataTypes.DATE,
  idProyecto:DataTypes.INTEGER,
  estado:DataTypes.INTEGER,
  fechaActualizacion:DataTypes.DATE
  
  }, 
   {
    classMethods: {
      associate: function(models) {
        entregableProyecto.belongsTo(models.parametros,{foreignKey:'idTipoEntregable', as:'tipoEntregable'})

        
        
        
        
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'entregableProyecto', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return entregableProyecto;
};


