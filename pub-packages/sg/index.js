
const sg                      = require('./extend');

module.exports = sg.extend(sg,
    require('./reduce'),
    require('./kv'),
    require('./smart')
);
