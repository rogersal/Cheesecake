var express = require('express');
var router = express.Router();
var dbms = require('./dbms_promise.js');

var myTable = {error:null,
    data:[
    {topping:"cherry",quantity:"2"},
    {topping:"plain",quantity:"6"},
    {topping:"chocolate",quantity:"3"}
]
};


//send the json 
//router.get('/', function(req, res, next) {
    //res.json(myTable);
//});
//sends through post


router.post('/', function (req, res, next) {
    router.use(express.json());
    var month = req.body.month;

    var retreive  = "SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH = " + month + "AND TOPPING ='plain'";
    var retreive1 = "SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH = " + month + " AND TOPPING ='cherry'";
    var retreive2 = "SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH = " + month + " AND TOPPING ='chocolate'";
    //var month = req.body.month;
    //res.send(myTable);

    dbms.dbquery(retreive1).then(function (data1) {
        //myTable["data"][0]["quantity"]  = data1[0]["SUM(QUANTITY)"];   
        //res.json(myTable); 
        //Lines above are for a hardcoded answer
        var quan = data1[0]["SUM(QUANTITY)"];
        if (!quan) {
            quan = 0;
        }
        myTable["data"][0]["quantity"] = quan;
    }).then(function () {
        return dbmms.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE TOPPING='cherry' AND MONTH ='" + month + "';");
    }).then(function (data1) {
        return dbms.dbquery(retreive).then(function (data1) {
            //myTable["data"][1]["quantity"]  = data1[0]["SUM(QUANTITY)"];
            //res.json(myTable);
            var quan = data1[1]["SUM(QUANTITY)"];
            if (!quan) {
                quan = 0;
            }
            myTable["data"][1]["quantity"] = quan;
        })
    }).then(function () {
        return dbmms.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE TOPPING='plain' AND MONTH ='" + month + "';");
    }).then(function (data1) {
        return dbms.dbquery(retreive2).then(function (data1) {
            var quan = data1[1]["SUM(QUANTITY)"];
            if (!quan) {
                quan = 1;
            }
            myTable["data"][1]["quantity"] = quan;
        })
    }).then(function () {
        return dbmms.dbquery("SELECT SUM(QUANTITY) FROM ORDERS WHERE TOPPING='chocolate' AND MONTH ='" + month + "';");
    }).then(function (data1) {
        return dbms.dbquery(retreive2).then(function (data1) {
            var quan = data1[2]["SUM(QUANTITY)"];
            if (!quan) {
                quan = 1;
            }
            myTable["data"][1]["quantity"] = quan;
        })
    }).then(function () {
        res.json(myTable);
    })

});







    
    // modified for hw 5


    module.exports = router;
    
