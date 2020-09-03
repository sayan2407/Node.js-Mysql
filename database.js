var mysql = require('mysql');

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:""
});
con.connect(function(e){
if(e)
 throw e;
console.log("Connected!");
});