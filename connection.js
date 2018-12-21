const mysql      = require('mysql');
const config = require('./config')
const connection = mysql.createConnection({
  host     : config.HOSTNAME,
  user     : 'root',
  password : '',
  database : config.DATABASE
});
 
connection.connect( (err) => {
  if(err) console.log(err.message)
  console.log('Connected Successfully')
} )

/**
 * select
 */
/*
connection.query('SELECT * FROM `empresa`', (err, results, fields) => {
  if(err) throw err;
  console.log(results);
})
*/

/**
 * insert 
 */
/*
var post  = {id: 1, title: 'Hello MySQL'};
var query = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
  if (error) throw error;
  // Neat!
});
console.log(query.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'
*/
/**
 * delete
 */
/*
connection.query('DELETE FROM posts WHERE title = "wrong"', function (error, results, fields) {
  if (error) throw error;
  console.log('deleted ' + results.affectedRows + ' rows');
})
*/
module.exports = connection