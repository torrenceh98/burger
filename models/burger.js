var orm = require("../config/orm.js");


var burger = {
  selectAll: function(callback) {
    orm.selectAll(function(res) {
      callback(res);
    });
  },
  insertOne: function(cols, vals, callback) {
    orm.insertOne(cols, vals, function(res) {
      callback(res);
    });
  },
  updateOne: function(burgerId, callback) {
    orm.updateOne(burgerId, function(res) {
      callback(res);
    });
  }
};

module.exports = burger;
