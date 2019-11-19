const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
	res.send('hi');
});
app.use(cors());
app.use(bodyParser.json());

app.use('/videos', require('./routes/api/videos'));

app.listen(5000, function() {
	console.log('boop');
});
