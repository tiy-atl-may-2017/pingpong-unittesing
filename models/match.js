'use strict';
module.exports = function(sequelize, DataTypes) {
  var match = sequelize.define('match', {
    winner: DataTypes.STRING,
    loser: DataTypes.STRING
  }, {});
  return match;
};
