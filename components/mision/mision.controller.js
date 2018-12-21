'use strict'

const mision = require('./mision.model')
const connection = require('../../connection')

let create = function(req, res){
  mision.empresa_ruc = req.query.id

  let query = connection.query('INSERT INTO scoremision SET ?', mision, function (error, results, fields) {
    if (error) throw error;
    res.send(results)
    // Neat!
  }) 
}

let getAll = ( req, res ) => {
  connection.query('SELECT * FROM `scoremision`', (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
}

let getOne = (req, res) => {
  let ruc = req.params.id    
  connection.query('SELECT * FROM scoremision WHERE empresa_ruc= ?', [ruc], (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
  
}

let update = (req, res) => {
  let elementUpdate = [req.body.weight, req.body.clasification, req.params.id]

  connection.query('UPDATE scoremision SET peso = ?, clasificacion = ? WHERE id = ?', elementUpdate, (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
}


module.exports = {
  create,
  getAll,
  getOne,
  update
}

