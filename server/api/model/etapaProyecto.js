
"use strict";


module.exports = function(sequelize, DataTypes) {
  var etapaProyecto = sequelize.define("etapaProyecto", {
   idEtapaProyecto : {type: DataTypes.INTEGER, primaryKey: true },
  nombre: DataTypes.STRING,
    }, 
  
  
     {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'etapaProyectos', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return etapaProyecto;
};

