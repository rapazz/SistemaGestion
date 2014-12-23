
"use strict";


module.exports = function(sequelize, DataTypes) {
  var emailTemplate = sequelize.define("emailTemplate", {
    idTemplate: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  asunto: DataTypes.STRING,
  cuerpo: DataTypes.STRING,
   fechaCreacion:DataTypes.DATE
  
  }, 
   
  {
   createdAt: false,
 
  // I want updatedAt to actually be called updateTimestamp
  updatedAt: false,
  tableName: 'emailTemplate', // this will define the table's name
  timestamps: false           // this will deactivate the timestamp columns
}
  );

  return emailTemplate;
};


