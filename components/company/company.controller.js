'use strict'

const Company = require('./company.model')
const connection = require('../../connection')

let create = function(req, res){
  //let company = new Company()
  let company = {}
  company.ruc = req.body.ruc
  company.descripcion = req.body.descripcion
  company.representante = req.body.representante
  company.mision = req.body.mision
  company.vision = req.body.vision
  
  let mision = [
    [company.ruc, 'CONCISA'],
    [company.ruc, 'SIMPLE, CLARA Y DIRECTA'],
    [company.ruc, 'EXPRESADA PREFERIBLEMENTE EN FRASES ENCABEZADAS POR VERBOS ATRACTIVOS'],
    [company.ruc, 'ATENDER REQUERIMIENTOS DE LOS PRINCIPALES GRUPOS CONSTRUCTIVOS'],
    [company.ruc, 'ORIENTADO AL INTERIOR DE LA ORGANIZACIÓN PERO RECONOCIENDO AL EXTERNO']
  ]

  let vision = [
    [company.ruc, 'DESCRIPTIVA DEL FUTURO DE LA ORGANIZACIÓN'],
    [company.ruc, 'COMUNICADA'],
    [company.ruc, 'MEMORABLE'],
    [company.ruc, 'INSPIRABLE'],
    [company.ruc, 'RETADORA'],
    [company.ruc, 'ATRACTIVA PARA LOS INVOLUCRADOS']
  ]

  let perspectives = [
    [company.ruc, 'Finanzas'],
    [company.ruc, 'Clientes'],
    [company.ruc, 'Procesos'],
    [company.ruc, 'Aprendizaje']
  ]

  console.log( company )

  

  connection.beginTransaction( (err) =>{
    if(err) throw err
    connection.query('INSERT INTO empresa SET ?', company, function (error, results, fields) {
      
      if (error){
          connection.rollback( () => {
          throw error;
        })
      }
      
      connection.query( 'INSERT INTO scoremision(empresa_ruc, descripcion) VALUES ?', [mision], function(error, results){
          if(error){
            connection.rollback( () => {
              throw error;
            } )
          }
          
        } )     
      connection.query( 'INSERT INTO scorevision(empresa_ruc, descripcion) VALUES ?', [vision], function(error, results){
        if(error){
            connection.rollback( () => {
              throw error;
            } )
          }
          connection.commit( (err) => {
            if(err){
              connection.rollback( () => {
                throw err;
              })
            }
            console.log('Transaction Completed')
          })
          
        } )    

        res.send(company)
      } )    
    })
}

let getAll = ( req, res ) => {
  connection.query('SELECT * FROM `empresa`', (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
}

let getOne = (req, res) => {
  let ruc = req.params.id
  
  connection.query('SELECT * FROM `empresa` WHERE `ruc` = ?', [ruc], (err, results, fields) => {
    if(err) throw err
    res.send(results)
  })
  
}

module.exports = {
  create,
  getAll,
  getOne
}

