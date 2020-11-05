
const CONFIG        = require('ceconfig').mkCONFIG();
const express       = require('express.io');
const app           = express();

const PORT          = CONFIG('SIGNALING_PORT')    || 4299;

app.http().io();

// ---------- Middleware ----------

// Static file server
app.use(express.static(__dirname + '/public'));


// ---------- Path Routing ----------

// index page
app.get('/', function(req, res){
  res.render('index.ejs');
});


app.io.route('ready', function(req) {
  req.io.join(req.data)
  app.io.room(req.data).broadcast('announce', {
    message: 'New client in the ' + req.data + ' room.'
  })
})

app.io.route('send', function(req) {
  app.io.room(req.data.room).broadcast('message', {
    message: req.data.message,
    author: req.data.author
  });
})

module.exports = signaling;

app.listen(7076);
console.log('server started on port ' + PORT);

function signaling() {
    // TODO
}
