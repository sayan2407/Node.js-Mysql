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
  con.query("SELECT * FROM customers ORDER BY name DESC",function(e,r){
   if(e) throw e;
   console.log(r);
});
});