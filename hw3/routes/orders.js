// Auth: Noah LaFave, Backend Team
//Code from previous assignments used from Noah LaFave to fix errors with dropdown menu
//Orders.js and neworder.js were done in meeting with Backend team 1
var express = require('express');
const { dbquery } = require('./dbms');
var router = express.Router();

/* GET orders listing. */
router.get('/', function(req, res, next) { 
  res.json(order);
});

router.post('/', async function(req, res, next){
 

  var sql_plain = 'SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH=\''+req.body["updateMonth"] +'\' AND TOPPING=\'Plain\';';//sql for plain order
  var sql_choco = 'SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH=\''+req.body["updateMonth"] +'\' AND TOPPING=\'Chocolate\';';//sql for chocolate
  var sql_cherry = 'SELECT SUM(QUANTITY) FROM ORDERS WHERE MONTH=\''+req.body["updateMonth"] +'\' AND TOPPING=\'Cherry\';';//sql for cherry
  //Make the queries for plain CHoco and cherry
  var ret_plain = await dbquery(sql_plain);
  var ret_choco = await dbquery(sql_choco);
  var ret_cherry = await dbquery(sql_cherry);
  /**    used await at suggestion of Alex Mak to create cleaner code instead of then(function) ie:
   * dbms.dbquery(retreive).then(function (data) {
        //do something
    }).then(function () {
  
  
  */

  //check if NULL sum, make 0
  if(ret_plain[0]["SUM(QUANTITY)"] == null){ret_plain[0]["SUM(QUANTITY)"] =0;}
  if(ret_choco[0]["SUM(QUANTITY)"] == null){ret_choco[0]["SUM(QUANTITY)"] =0;}
  if(ret_cherry[0]["SUM(QUANTITY)"] == null){ret_cherry[0]["SUM(QUANTITY)"] =0;}

  //Organize our three queries into a JSON obj
  var ret_order =  {
    "o0":{"topping":"Cherry", "quantity": JSON.stringify(ret_cherry[0]["SUM(QUANTITY)"]) },
    "o1":{"topping":"Plain", "quantity": JSON.stringify(ret_plain[0]["SUM(QUANTITY)"])},
    "o2":{"topping":"Chocolate", "quantity": JSON.stringify(ret_choco[0]["SUM(QUANTITY)"])}
  }

  //Stringify order to send
  JSON_ret_order = JSON.stringify(ret_order);
  //send strigified json order
  res.json(JSON_ret_order);

  /*
  //Som test logs
  console.log("retp: "+ JSON.stringify(ret_plain[0]["SUM(QUANTITY)"]));
  console.log("retcho: "+ JSON.stringify(ret_choco[0]["SUM(QUANTITY)"]));
  console.log("retchy: "+ JSON.stringify(ret_cherry[0]["SUM(QUANTITY)"]));
  console.log("month sent thru: " + req.body["updateMonth"]);
  */
});

module.exports = router;
