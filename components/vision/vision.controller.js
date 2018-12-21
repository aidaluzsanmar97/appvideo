'use strict'

const connection = require('../../connection')

let insert = (req, res) => {
  console.log('.............')
}

let update = (req, res) => {
  let elementUpdate = [req.body.peso, req.body.clasificacion, req.params.id]
  console.log(req.body)

  connection.query('UPDATE scorevision SET peso = ?, clasificacion = ? WHERE id = ?', elementUpdate, (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })

}

let getOne = (req, res) => {
  let ruc = req.params.id
  connection.query('SELECT * FROM scorevision WHERE empresa_ruc = ?', [ruc], (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
}


module.exports = {
  insert,
  update,
  getOne
}