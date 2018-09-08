var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {burgers: data};
    
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name"], [req.body.burger_name], function(){
        res.redirect('/')
  });
});

router.post("/:id", function (req, res) {
    burger.updateOne(req.params.id, function() {
      res.redirect('/');
    });
  });

// Export routes for server.js to use.
module.exports = router;
