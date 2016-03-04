'use strict'

module.exports = function(sequelize, DataTypes){

  var Blog = sequelize.define('Blog',{
      title: DataTypes.STRING,
      category: DataTypes.STRING,
      author: DataTypes.STRING,
      authorUrl: DataTypes.STRING,
      publishedOn: DataTypes.DATE,
      body: DataTypes.TEXT
      });

  return Blog;

};
