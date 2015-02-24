
"use strict";


module.exports = function(sequelize, DataTypes) {

    var tipoincidente = sequelize.define('tipoincidente', {
  TipoIncidenteId:  { type:DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  Nombre: DataTypes.STRING,
  sla: DataTypes.INTEGER,
  FechaCreacion: DataTypes.DATE,
  EsActivo: DataTypes.INTEGER
  //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
}, {
  tableName: 'tipoincidente', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
});

  return tipoincidente;
};


