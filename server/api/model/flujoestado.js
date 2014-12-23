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

  var flujoestado = sequelize.define('flujoestado', {
    FlujoEstadoId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Rol: DataTypes.INTEGER,
    EstadoActual: DataTypes.INTEGER,
    EstadoSiguiente: DataTypes.INTEGER,
    Tipo: DataTypes.INTEGER,
    TiempoInicio: DataTypes.INTEGER,
    TiempoFin: DataTypes.INTEGER,
    //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  }, {
    tableName: 'flujoestado', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });
  return flujoestado;

}
