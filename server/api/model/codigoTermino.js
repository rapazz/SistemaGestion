
"use strict";


module.exports = function(sequelize, DataTypes) {
  var codigotermino = sequelize.define("codigotermino", {
    CodigoTerminoId: {type: DataTypes.INTEGER, primaryKey: true , autoIncrement: true},
   Nombre: DataTypes.STRING,
    FechaCreacion: DataTypes.DATE,
    EsActivo: DataTypes.INTEGER
  },
 {
   createdAt: false,
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'codigotermino', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return codigotermino;
};
