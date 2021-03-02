var express = require('express');
var router = express.Router();


var myTable = {error:null,
    data:[
    {topping:"cherry",quantity:"2"},
    {topping:"plain",quantity:"6"},
    {topping:"chocolate",quantity:"3"}
]
};



router.get('/', function(req, res, next) {
    res.json(myTable);
});

module.exports = router;

