
const path          = require('path');
const morgan        = require('morgan');
const cors          = require('cors');
const cookieParser  = require('cookie-parser');
// const bodyParser    = require('body-parser');      // npm i body-parser is popular, too

// -------------------------------------------------------------------------------------------------------------------
// ENV
const clientPort    = process.env.CLIENT_PORT   || 3003;

module.exports = function(app, express) {

  // -------------------------------------------------------------------------------------------------------------------
  // Middlewares

  app.use(morgan('dev'));
  app.use(express.json());
  // app.use(bodyParser.json());
  app.use(express.urlencoded({ extended: false }));
  // app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  // app.use(cors()); // allows all origins
  if ((process.env.NODE_ENV = 'development')) {
    // TODO: dont full path
    app.use(cors({ origin: `http://localhost:${clientPort}` }));
  }

};
