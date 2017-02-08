const test = require('ava')
const meaningOfLife = require('../lib/app.js')

test('Real meaning of life', (t) => {
  t.is(meaningOfLife(), 42)
})
