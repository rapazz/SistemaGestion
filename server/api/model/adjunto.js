'use strict';

module.exports = function(sequelize,  DataTypes) {

  var adjunto = sequelize.define('adjunto', {
    AdjuntoId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    IncidenteId: DataTypes.INTEGER,
    HistorialId: DataTypes.INTEGER,
    UrlArchivo: DataTypes.STRING,
    Nombre: DataTypes.STRING,
    Guid: DataTypes.STRING,
    FechaCreacion: DataTypes.DATE,
    UsuarioCreacion: DataTypes.STRING,
    EsActivo: DataTypes.INTEGER
    //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  }, {
    createdAt: false,
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: false,
    tableName: 'adjunto', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });

  return adjunto;
};









