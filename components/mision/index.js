'use strict'

const express = require('express')

const mision = require('./mision.controller')

const router = express.Router()


//router.get('/mision', mision.getAll)

router.get('/mision/:id', mision.getOne)

router.post('/mision/:id', mision.create)

router.put('/mision/:id', mision.update)

module.exports = router

