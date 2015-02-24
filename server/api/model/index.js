"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
var config = require('../../config/environment');
var env       = process.env.NODE_ENV || "development"


var sequelize = new Sequelize(config.mysql.database, config.mysql.user, config.mysql.password, {
      dialect: config.mysql.dialect, // or 'sqlite', 'postgres', 'mariadb'
      port:    config.mysql.port, // or 5432 (for postgres)
    host: config.mysql.host,
  define: {
   freezeTableName:true,
        timestamps: false,
    }

}
    )


var db        = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
