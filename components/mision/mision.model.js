'use strict'

let obj = Object.create(null)

Object.defineProperties(obj, {
  'id': {
    value: null,
    writable: false
  },
  'descripcion': {
    value: [
      'Concisa',
      'Simple, clara y directa', 
      'Expresada preferiblemente en frases encabezadas por verbos atractivos', 
      'Atender requirimientos de los principales grupos constructivos', 
      'Orientado al interior de la organización pero reconociendo al externo'
    ],
    writable: false
  },
  'peso': {
    value: 0,
    writable: true
  },
  'clasificacion': {
    value: 0,
    writable: true
  },
  'Empresa_ruc': {
    value: null,
    writable: true
  }
})

module.exports = obj

