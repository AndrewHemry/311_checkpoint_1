let mySQL = require("mysql")

let connection = mySQL.createConnection({
    "host": "database-2.czufxvaaknri.us-east-2.rds.amazonaws.com",
    "user": "admin",
    "password": "uhp!YGU5pxg_mwz6dmq",
    "database": "AHDatabase1",
    "port": 3306
})


// This is to test the connection and return any errors - if successful, it will return the current time the call was made and received
connection.query("select now()", function(err, results){
    if(err){
        console.log("Connection to database failed", err)
    } else {
        console.log("Connection to databse successful", results)
    }
})

module.exports = connection