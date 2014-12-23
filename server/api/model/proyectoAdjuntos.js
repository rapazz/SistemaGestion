
"use strict";


module.exports = function(sequelize, DataTypes) {
  var proyectoAdjunto = sequelize.define("proyectoAdjunto", {
    idAdjunto: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  idProyecto: DataTypes.INTEGER,
  descripcion: DataTypes.STRING,
  fechaCreacion:DataTypes.DATE,
  guid:DataTypes.STRING,
  urlArchivo:DataTypes.STRING,
  idTipoAdjunto:DataTypes.INTEGER
  
  }, 
   {
    classMethods: {
      associate: function(models) {

        proyectoAdjunto.belongsTo(models.parametros,{foreignKey:'idTipoAdjunto', as:'tipoAdjunto'})

        
        
        
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'proyectoAdjuntos', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return proyectoAdjunto;
};


