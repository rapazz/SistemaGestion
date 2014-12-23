
"use strict";


module.exports = function(sequelize, DataTypes) {

    var origenproblema = sequelize.define('origenproblema', {
  OrigenProblemaId:  { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nombre: DataTypes.STRING,
  FechaCreacion: DataTypes.DATE,
  EsActivo: DataTypes.INTEGER
  //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  tableName: 'origenproblema', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
});

  return origenproblema;
};

