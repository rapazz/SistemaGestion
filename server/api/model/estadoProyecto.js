
"use strict";


module.exports = function(sequelize, DataTypes) {
  var estadoProyecto = sequelize.define("estadoProyecto", {
    idEstadoProyecto: {type: DataTypes.INTEGER, primaryKey: true },
  nombre: DataTypes.STRING,
  idEtapaProyecto:DataTypes.INTEGER
  }, 
     {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'estadoProyecto', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return estadoProyecto;
};


