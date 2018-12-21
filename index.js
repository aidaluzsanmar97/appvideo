'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config')
const conn = require('./connection')
const apiCompany = require('./components/company')
const apiMision = require('./components/mision')
const apiObjetive = require('./components/objetive')
const apiVision = require('./components/vision')
const app = express()


app.set('view engine', 'ejs')
app.use('/public', express.static(`${__dirname}/assets/`))


app.use( bodyParser.urlencoded({extended: true}) )
app.use( bodyParser.json() )
app.use( '/api', apiCompany )
app.use( '/api', apiMision )
app.use( '/api', apiVision )
app.use( '/api', apiObjetive )


app.get('/', (req, res) => {
  res.render('index')
})
app.get('/home', (req, res) => {
  res.render('home')
})
app.get('/balance', (req, res) => {
  res.render('balance')
})
app.get('/objetives', (req, res) => {
  res.render('objetives')
})
app.get('/mision', (req, res) => {
  res.render('mision')
})
app.get('/vision', (req, res) => {
  res.render('vision')
})
app.get('/aprendizaje', (req, res) => {
  res.render('aprendizaje')
})
app.get('/cliente', (req, res) => {
  res.render('cliente')
})
app.get('/finanzas', (req, res) => {
  res.render('finanzas')
})
app.get('/procesos', (req, res) => {
  res.render('procesos')
})
app.get('/:id/valores', (req, res) => {
  res.render('mision')
})
app.listen(config.PORT, config.HOSTNAME, ()=>{
  console.log('....')
})