'use strict'

const connection = require('../../connection')
const Objetive = require('./objetive.model')

let getOne = (req, res) => {
  let id = req.params.id

  connection.query('SELECT * FROM objetivos WHERE id = ?', [id], (err, results, fields) => {
    if(err) throw err;
    res.send(results)
  })

}

let insert = (req, res) => {
  let Objetive = {}
  Objetive.descripcion = req.body.description
  Objetive.perspectiva = req.body.perspective
  Objetive.meta = req.body.goal
  Objetive.indicador = req.body.indicator
  Objetive.iniciativa = req.body.initiatives
  Objetive.valor = req.body.value
  Objetive.empresa_ruc = req.params.ruc

  connection.query('INSERT INTO objetivos SET ?', Objetive, (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })

}

let remove = (req, res) => {
  let id = req.body.id
  connection.query('DELETE FROM objetivos WHERE id = ?', [id], (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })

}

let update = (req, res) => {
  let elementUpdate = [req.body.descripcion, req.body.perspectiva, req.body.meta, req.body.indicador, req.body.iniciativa, req.body.valor, req.body.empresa_ruc, req.params.id]
  let query = 'UPDATE objetivos SET descripcion = ?, perspectiva = ?, meta = ?, indicador = ?, iniciativa = ?, valor = ?, empresa_ruc = ? WHERE id = ?'
  connection.query( query, elementUpdate, (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
}

let getByPerspectives = (req, res) => {
  let id = req.params.id
  let perspective = req.params.perspective

  connection.query('SELECT * FROM objetivos WHERE objetivos.empresa_ruc = ? AND objetivos.perspectiva = ?', [id, perspective], (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })

}

module.exports = {
  getOne,
  insert,
  remove,
  update,
  getByPerspectives
}