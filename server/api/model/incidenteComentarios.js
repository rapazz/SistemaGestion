
"use strict";


module.exports = function(sequelize, DataTypes) {
  var incidenteComentarios = sequelize.define("incidenteComentarios", {
    idIncidenteComentario: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    idIncidente: DataTypes.INTEGER,
   fechaCreacion:DataTypes.DATE,
   idUsuario:DataTypes.INTEGER,
   comentario:DataTypes.STRING
   
  
  
  }, 
   {
    classMethods: {
      associate: function(models) {

        incidenteComentarios.belongsTo(models.usuario,{foreignKey:'usuarioId', as:'usuario'})
        

            }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'incidenteComentarios', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return incidenteComentarios;
};


