
exports.api = {};

// import API routes
const apiAuthRoutes       = exports.api.apiAuthRoutes = require('./routes/api/apiAuthRoutes');
const apiUserRoutes       = exports.api.apiUserRoutes = require('./routes/api/apiUserRoutes');

// import routes
const indexRoutes         = exports.indexRoutes         = require('./routes/indexRoutes');      // Left over from generate-express
const loginRoutes         = exports.loginRoutes         = require('./routes/loginRoutes');
const registrationRoutes  = exports.registrationRoutes  = require('./routes/registrationRoutes');


