const dbConfig = require("../database.json");
const mysql = require("mysql2/promise");
var dbconnection = mysql.createPool(
    dbConfig.dev
);
  
  // Attempt to catch disconnects 
  dbconnection.on('connection', function (connection) {
    console.log('DB Connection established');
  
    connection.on('error', function (err) {
      console.error(new Date(), 'MySQL error', err.code);
    });
    connection.on('close', function (err) {
      console.error(new Date(), 'MySQL close', err);
    });
  
  });
  
  
  module.exports = dbconnection;