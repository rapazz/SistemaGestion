"use strict";


module.exports = function(sequelize, DataTypes) {
  var rolMenu = sequelize.define("rolMenus", {
    idrolMenu : {type: DataTypes.INTEGER, primaryKey: true },
  rolId :DataTypes.INTEGER,
  menuId:DataTypes.INTEGER
  }, 
 
  {
  tableName: 'rolMenus' // this will define the table's name
         // this will deactivate the timestamp columns
}
  );

  return rolMenu;
};