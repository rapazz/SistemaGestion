
"use strict";


module.exports = function(sequelize, DataTypes) {
  var parametros = sequelize.define("parametros", {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: DataTypes.STRING,
   tipoParametro:DataTypes.INTEGER
 
  
  }, 
  
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'parametros', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return parametros;
};


