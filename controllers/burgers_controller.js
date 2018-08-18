var express = require("express");

var router = express.Router(); 

var burger = require("../models/burger.js");




router.get("/", function(req, res) {

    burger.allBurgers(function(result){
        console.log(result);

        var hbObject = {
            burgers : result
        };

        res.render('index', hbObject);
    });


});

router.post("/", function(req, res) {
    var burgerInput = req.body.burgerInput;
    
    burger.newBurger(burgerInput, function(result){
        res.redirect("/");

    });
});

router.get("/update/:id", function(req, res) {
    var burgerId = req.params.id;

    burger.eatBurger(burgerId, function(result){
        res.redirect("/");
    });
});

router.get("/delete/:id", function(req, res) {
    var burgerId = req.params.id;

    burger.deleteBurger(burgerId, function(result){
        res.redirect("/");

    });
});
module.exports = router;