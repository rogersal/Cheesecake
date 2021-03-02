var express = require('express');
var router = express.Router();


var myTable = {error:null,
    data:[
    {topping:"cherry",quantity:"2"},
    {topping:"plain",quantity:"6"},
    {topping:"chocolate",quantity:"3"}
]
};


//send the json 
router.get('/', function(req, res, next) {
    res.json(myTable);
});
//sends through post
router.post('/', function(req, res){
    response.json(myTable);
});

module.exports = router;

