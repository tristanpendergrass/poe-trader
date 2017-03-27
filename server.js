const express  = require('express');
const app      = express();                               // create our app w/ express
const morgan = require('morgan');             // log requests to the console (express4)
const bodyParser = require('body-parser');    // pull information from HTML POST (express4)
const methodOverride = require('method-override'); // simulate DELETE and PUT (express4)

const getPairInfo = require(__dirname + '/server/functions/getPairInfo.js');

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

app.get('/pair-info', (req, res) => {
  try {
    const item1 = parseInt(req.query.item1);
    const item2 = parseInt(req.query.item2);

    if (Number.isInteger(item1) && Number.isInteger(item2)) {
      res.json(getPairInfo(item1, item2));
    } else {
      throw new Error('Need to pass integer as item1 and item2 to this route');
    }
  }
  catch (e) {
    res.send(422);
  }
});

app.get('*', function(req, res) {
  res.sendFile('./public/index.html');
});

var listener = app.listen(process.env.PORT || 5000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

module.exports = app;
