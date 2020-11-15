
const { mkCONFIG }            = require('../../../..');
const path                    = require('path');
const test                    = require('ava');

test('works', t => {
  t.pass();
});

// ====================================================================================================================
//

// --------------------------------------------------------------------------------------------------------------------
//


test('CONFIG(scripts)', t => {
  // const CONFIG = mkCONFIG({cwd: path.dirname(__dirname)});
  const CONFIG = mkCONFIG({cwd: __dirname});
  const result = CONFIG('scripts');

  t.deepEqual(result,  {"test": "ava"});
});

