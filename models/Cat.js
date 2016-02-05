"use strict";

module.exports = function(sequelize, DataTypes) {
  var Cat = sequelize.define("Cat", {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  })
  return Cat;
}
