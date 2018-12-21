'use strict'

const express = require('express')

const objetive = require('./objetive.controller')

const router = express.Router()


//router.get('/mision', mision.getAll)

router.get('/objetive/:id/:perspective', objetive.getByPerspectives)

router.get('/objetive/:id', objetive.getOne)

router.post('/objetive/:ruc', objetive.insert)

router.put('/objetive/:id', objetive.update)

router.delete('/objetive/:id', objetive.remove)

module.exports = router

