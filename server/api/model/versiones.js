
"use strict";


module.exports = function(sequelize, DataTypes) {
  var versiones = sequelize.define("versiones", {
    idVersion: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  idProyecto:DataTypes.INTEGER,
  documento: DataTypes.STRING,
    idEtapaProyecto:DataTypes.INTEGER,
   fechaCreacion:DataTypes.DATE
  
  
  }, 
   {
    classMethods: {
      associate: function(models) {
          versiones.belongsTo(models.etapaProyecto,{foreignKey:'idEtapaProyecto', as:'etapaProyecto'})
       
        
        
        
        
        
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'versiones', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return versiones;
};


