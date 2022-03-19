
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./element-border.cjs.production.min.js')
} else {
  module.exports = require('./element-border.cjs.development.js')
}
