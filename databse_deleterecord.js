var mysql = require('mysql');

var con = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"sayan_db"
});

con.connect(function(e){
  if(e) throw e;
  console.log("connected!!");
  con.query("DELETE FROM customers WHERE name = 'Ben'",function(e,r){
   if(e) throw e;
   console.log("Deleted Records :"+r.affectedRows);
});
});