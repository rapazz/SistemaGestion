
"use strict";


module.exports = function(sequelize, DataTypes) {
  var empresa = sequelize.define("empresa", {
    idEmpresa: {type: DataTypes.INTEGER, primaryKey: true },
  nombre: DataTypes.STRING
  }, 
   {
    classMethods: {
      associate: function(models) {
        empresa.hasMany(models.departamento,{foreignKey:'idEmpresa'})
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'empresa', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return empresa;
};


