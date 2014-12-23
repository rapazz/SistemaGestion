"use strict";


module.exports = function(sequelize, DataTypes) {
  var jefeProyecto = sequelize.define("jefeProyecto", {
    idJefe: {type: DataTypes.INTEGER, primaryKey: true },
    idBp:DataTypes.INTEGER,
  idJefeProyecto: DataTypes.INTEGER
  }, 
   {
    classMethods: {
      associate: function(models) {
        jefeProyecto.belongsTo(models.usuario,{foreignKey:'idJefeProyecto',as:'usuario'})
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'jefeProyecto', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return jefeProyecto;
};


