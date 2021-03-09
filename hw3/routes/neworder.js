var express = require('express');
var router = express.Router();

var dbms = require('./dbms_promise');


var myTable = {error:null,
    data:[
    {topping:"cherry",quantity:"2"},
    {topping:"plain",quantity:"6"},
    {topping:"chocolate",quantity:"3"}
]
};

router.use(express.json());
var insertstatement = "INSERT INTO ORDERS VALUES(682,'JAN',13,2,\"cherry\",\"Yum!\");";//same insert I used in sql commands hw
//sends through post
router.post('/', function(req, res, next){
    dbms.dbQuery(insertstatement, false);
});

module.exports = router;

