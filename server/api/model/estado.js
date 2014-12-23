'use strict';

/*
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var IncidenteSchema = new Schema({
  name: String,
  info: String,
  active: Boolean
});

module.exports = mongoose.model('Incidente', IncidenteSchema);*/
module.exports = function(sequelize, DataTypes) {

  var estado = sequelize.define('estado', {
    EstadoId: DataTypes.INTEGER,

    Nombre: DataTypes.INTEGER,

    //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  }, {
    tableName: 'estado', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });
  return estado;
};
