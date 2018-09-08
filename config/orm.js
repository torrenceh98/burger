var connection = require("./connection.js");

var orm = {
  selectAll: function(callback) {
    var queryString = "SELECT * FROM burgers";

    connection.query(queryString, function(err, data) {
      if (err) {
          throw err
        };
     callback(data);
    });
  },
  insertOne: function(cols, vals, callback) {
    var queryString = "INSERT INTO burgers ("+ cols +") VALUES ('"+ vals +"')"
    console.log(queryString);

    connection.query(queryString, vals, function(err, data) {
      if (err) throw err;
      callback(data);
    });
  },
  updateOne: function(burgerID, callback) {
    var queryString =
      "UPDATE burgers SET ? WHERE ?";

      connection.query(queryString,
        [{devoured: true}, {id: burgerID}],
          function (err, data) {
            if (err) throw err;
                callback(data);
      });
  }
};

module.exports = orm;
