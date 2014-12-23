module.exports = function(sequelize, DataTypes) {
  var departamento = sequelize.define("departamento", {
         idDepartamento: {type: DataTypes.INTEGER, primaryKey: true },
     idEmpresa:DataTypes.INTEGER,
  nombre: DataTypes.STRING
  }, 
  
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'departamento', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return departamento;
};
