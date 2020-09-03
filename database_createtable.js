var mysql = require('mysql');

var con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"",
  database:"sayan_db"
});
con.connect(function(e){
 if(e)
   throw e;
 console.log("Connected...");
 var sql= "CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))";
 con.query(sql,function(e,result){
    if(e)
       throw e;
   console.log("Table Created");

  });
});