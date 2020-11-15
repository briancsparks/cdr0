
const { mkCONFIG }            = require('../../../..');
const CONFIG                  = mkCONFIG();
const test                    = require('ava');

test('works', t => {
  t.pass();
});

// ====================================================================================================================
//

// --------------------------------------------------------------------------------------------------------------------
//

// test('sg._extend basic use case', t => {
//   const result = sg._extend({}, {key:'value'});
//
//   t.deepEqual(result, {key: 'value'});
// });

