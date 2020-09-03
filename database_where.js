var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sayan_db"
});

con.connect(function(err) {
  if (err) throw err;
  var add='Dugapur';
   /*Select all customers with the address "Park Lane 38":*/
//  con.query("SELECT * FROM customers WHERE address = 'Dugapur'", function (err, result) {
     var sql = 'SELECT * FROM customers WHERE address = '+mysql.escape(add);
     con.query(sql,function(err,result){  
  if (err) throw err;
    console.log(result);
  });
});
