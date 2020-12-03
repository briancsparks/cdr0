const express       = require('express');
const path          = require('path');

const app           = express();

// Reads `.env` file and adds sets on process.env
require('dotenv').config();

require('./server1-config')(app, express);
require('./server2-global-middleware')(app, express);

// -------------------------------------------------------------------------------------------------------------------
// ENV
const port          = process.env.PORT          || 8000;

// -------------------------------------------------------------------------------------------------------------------
// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// -------------------------------------------------------------------------------------------------------------------
// API Routes
const routes = require('./server3-route-loader');
app.use('/api',         routes.api.apiAuthRoutes);
app.use('/api',         routes.api.apiUserRoutes);

// Routes
app.use("/login",       routes.loginRoutes);
app.use("/register",    routes.registrationRoutes);
app.use('/',            routes.indexRoutes);

// -------------------------------------------------------------------------------------------------------------------
// Error handling
require('./server4-error-handling')(app, express);

// -------------------------------------------------------------------------------------------------------------------
// Start

app.listen(port, () => {
  console.log(`Running on port ${port}: / and /api`);
});


