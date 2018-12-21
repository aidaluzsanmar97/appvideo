'use strict'

const express = require('express')

const vision = require('./vision.controller')

const router = express.Router()


//router.get('/vision', vision.getAll)

router.get('/vision/:id', vision.getOne)

router.post('/vision', vision.insert)

router.put('/vision/:id', vision.update)

module.exports = router

