"use strict";

module.exports = function(sequelize, DataTypes) {
  var rol = sequelize.define("rol", {
    rolId: {type: DataTypes.INTEGER, primaryKey: true },
  nombre: DataTypes.STRING
  }, 
  {
  tableName: 'rol', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return rol;
};