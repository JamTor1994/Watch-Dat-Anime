var express = require("express");

var router = express.Router();

var anime= require ("../models/anime.js")

router.get("/", function(req,res){
    anime.all(function(data){
        var hbsObject = {
            anime: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/anime", function(req, res) {
    anime.create([
      "name", "watched"
    ], [
      req.body.name, req.body.watched
    ], function(result) {
      res.json({ id: result.insertId });
    });
  });

  router.put("/api/anime/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    anime.update({
      watched: req.body.watched
    }, condition, function(result) {
      if (result.changedRows == 0) {
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/anime/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    anime.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  module.exports = router;