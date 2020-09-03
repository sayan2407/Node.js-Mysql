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
 var sql= "INSERT INTO customers(name,address)VALUES('Archita','Dugapur')";
 con.query(sql,function(e,result){
    if(e)
       throw e;
   console.log("1 Record Insert");

  });
});