//Author: Backend Team
var express = require('express');
const { dbquery } = require('./dbms');
var router = express.Router();

const monthRand = ["JAN","Feb","MAR","APR","MAY","JUN","JUL", "AUG","SEP","OCT", "NOV", "DEC"]; //for randomizing a month


router.use(express.json());//allow express

//POST FUNCT
router.post('/', async function(req, res, next){
  console.log("Top: "+ req.body["type"] + " Quant: " + req.body["quant"] + " Notes: "+ req.body["notes"]);//send all order components

  const month = monthRand[Math.floor(Math.random() * 13)];//randmizes a  month
  const day = Math.floor(Math.random() * 28) + 1;//max can have is 28 so no problems with february/ months not all having same # of days

//get order ID
  const sql_maxID = "SELECT MAX(ORDERid) FROM ORDERS";
  var maxID = await dbquery(sql_maxID);
//Err check
  if(maxID[0]["MAX(ORDERid)"] == null){
    maxID[0]["MAX(ORDERid)"] = 0;
  }

  var newid = 1 + maxID[0]["MAX(ORDERid)"];//Add one to max orderID as to  not have confliciting ID's
  console.log("newval: " + newid);

//Call query Insert
  const sql_newOrder = 'INSERT INTO ORDERS (ORDERid, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES ('+newid+', \''+month +'\',' +day+', '+ req.body["quant"] +', \'' + req.body["type"] +'\', \'' + req.body["notes"] + '\' );';
  await dbquery(sql_newOrder);
});



module.exports = router;
