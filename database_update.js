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
  con.query("UPDATE customers SET address='Durgapur' WHERE name='Archita'",function(e,r){
   if(e) throw e;
   console.log("Update Records :"+r.affectedRows);
  });
});