const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
var cors = require('cors');

const app = express();

const videoRoutes = require('./model/video.json');

app.get('/', function(req, res) {
	res.send('get me a fking job plz');
});
app.use(cors());
// app.route('/videos').get(function(req, res) {
// 	res.send(videoRoutes);
// });

app.use('/videos', require('./routes/api/videos'));

app.listen(5000, function() {
	console.log('boop');
});
