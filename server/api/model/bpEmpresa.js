module.exports = function(sequelize, DataTypes) {
  var bpEmpresa = sequelize.define("bpEmpresa", {
         idBpEmpresa: {type: DataTypes.INTEGER, primaryKey: true },
     idEmpresa:DataTypes.INTEGER,
     idDepartamento:DataTypes.INTEGER,
     usuarioId:DataTypes.INTEGER
  
  }, 
 
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'bpEmpresa', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return bpEmpresa;
};
