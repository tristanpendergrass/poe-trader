const express  = require('express');
const app      = express();                               // create our app w/ express
const morgan = require('morgan');             // log requests to the console (express4)
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

const getTrades = require(__dirname + '/server/functions/getTrades.js');

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.get('/trades', (req, res) => {
  try {
    const want = parseInt(req.query.want);
    const have = parseInt(req.query.have);

    if (Number.isInteger(want) && Number.isInteger(have)) {
      getTrades(want, have)
        .then((info) => {
          res.json(info);
        }, (err) => {
          throw err;
        });
    } else {
      throw new Error('Need to pass integer as want and have to this route');
    }
  }
  catch (e) {
    res.sendStatus(422);
  }
});

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(200);
});

app.get('*', function(req, res) {
  res.sendFile('./public/index.html');
});

var listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;
