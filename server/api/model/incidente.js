'use strict';



module.exports = function(sequelize, DataTypes) {


  var incidente = sequelize.define('incidente', {
    IncidenteId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Numero: DataTypes.STRING,
    FechaCreacion: DataTypes.DATE,
    FechaActualizacion: DataTypes.DATE,
    UsuarioIdCreacion: DataTypes.STRING,
    UsuarioIdConsultor: DataTypes.STRING,
  UsuarioIdUltimoAsignado: DataTypes.STRING,
    IncidenteIdAnterior: DataTypes.INTEGER,
    IncidenteNumero: DataTypes.STRING,
    Asunto: DataTypes.STRING,
    TextoOriginal: DataTypes.STRING,
    TipoIncidenteId: DataTypes.INTEGER,
    SubTipoIncidenteId: DataTypes.INTEGER,
    Estado: DataTypes.INTEGER,
    OrigenProblemaId: DataTypes.INTEGER,
    CodigoTerminoId: DataTypes.INTEGER,
    EstadoGeneral: DataTypes.INTEGER,
    EmailProveedor: DataTypes.STRING,
    UsuarioIdKeyUser: DataTypes.STRING,
    RespuestaKU: DataTypes.STRING,

    //userid:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
  },
  
  
  {
    tableName: 'incidente', // this will define the table's name
    timestamps: false           // this will deactivate the timestamp columns
  });
  return incidente;

};


