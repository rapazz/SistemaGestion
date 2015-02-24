

"use strict";

module.exports = function(sequelize, DataTypes) {
  var Menu = sequelize.define("Menu", {
    menuId: {type: DataTypes.INTEGER, primaryKey: true },
  Nombre: DataTypes.STRING,
  url:DataTypes.STRING,
  estilo:DataTypes.STRING,
  idPadre:DataTypes.INTEGER
  }, 
   {
    classMethods: {
      associate: function(models) {
        Menu.hasMany(models.rolMenus,{foreignKey:'menuId'})
      }
                 }
     
   },
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'menus', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return Menu;
};


