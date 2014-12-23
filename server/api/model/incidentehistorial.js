'use strict';


module.exports = function(sequelize, DataTypes) {

  var incidentehistorial = sequelize.define('incidentehistorial', {
    IncidenteHistorialId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    IncidenteId: DataTypes.INTEGER,
    FechaEvento: DataTypes.DATE,
    Estado: DataTypes.INTEGER,
    UsuarioId: DataTypes.STRING,
    Asunto: DataTypes.STRING,
    Observacion: DataTypes.STRING,
    CodigoTerminoId: DataTypes.INTEGER,
    OrigenProblemaId: DataTypes.INTEGER,
    SubTipoIncidenteId: DataTypes.INTEGER,
    TipoIncidenteId: DataTypes.INTEGER,
    EstadoGeneral: DataTypes.INTEGER,
    //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  }, {
    tableName: 'incidentehistorial', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });
  return incidentehistorial;

};
