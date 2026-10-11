// Controllo rapido delle soglie: node scripts/meteo-check.ts
import assert from 'node:assert/strict'
import { classifica } from '../src/data/meteo.ts'

const calmo = { onda: 0.3, vento: 6, raffiche: 9, pioggia: 5 }
assert.equal(classifica(calmo), 'perfetto')
assert.equal(classifica({ ...calmo, onda: 0.5 }), 'buono') // soglia esclusa
assert.equal(classifica({ ...calmo, raffiche: 19.9 }), 'buono')
assert.equal(classifica({ ...calmo, vento: 15 }), 'sconsigliato')
assert.equal(classifica({ ...calmo, pioggia: 40 }), 'sconsigliato')
assert.equal(classifica({ ...calmo, pioggia: null }), 'perfetto')
assert.equal(classifica({ ...calmo, onda: null }), 'sconsigliato')
console.log('meteo ok')
