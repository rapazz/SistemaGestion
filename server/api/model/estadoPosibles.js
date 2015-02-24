"use strict";

module.exports = function(sequelize, DataTypes) {
  var estadoPosibles = sequelize.define("estadoPosibles", {
    idEstadoPosible: {type: DataTypes.INTEGER, primaryKey: true },
 idEstado:  DataTypes.INTEGER,
 idEstadoPermitido:DataTypes.INTEGER
  }, 
   
   {
    classMethods: {
      associate: function(models) {
      estadoPosibles.belongsTo(models.estado,{foreignKey:'idEstadoPermitido'})
      }
                 }
     
   },
  {
  tableName: 'estadoPosibles', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return estadoPosibles;
};