'use strict'

const express = require('express')
const controller = require('./company.controller')
const api = express.Router()

api.post('/company', controller.create)

api.get('/company', controller.getAll)

api.get('/company/:id', controller.getOne)

/*

api.put('/company/:id', controller)

api.delete('/company/:id', controller)
*/
module.exports = api