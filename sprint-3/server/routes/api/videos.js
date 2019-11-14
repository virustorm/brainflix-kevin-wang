const express = require('express');
const router = express.Router();
const fileName = __dirname + '/../../model/video.json';
let videos = require(fileName);
const detailName = __dirname + '/../../model/videoDetail.json';
let detailVideos = require(detailName);
// const helper = require('../../helper/helper');

//  Get all videos
router.get('/', (req, res) => {
	res.json(videos);
});

//  Get video with :id
router.get('/:id', (req, res) => {
	const found = detailVideos.some((detailVideos) => detailVideos.id === req.params.id);
	if (found) {
		res.json(detailVideos.filter((detailVideos) => detailVideos.id === req.params.id));
	} else {
		res.status(400).json({ errorMessage: `Video with ID:${req.params.id} not found` });
	}
});

//  Create new Video
router.post('/', (req, res) => {
	const newVideo = {
		id: helper.getNewId(videos),
		title: req.body.title,
		channel: req.body.channel,
		// image: req.body.image,
		description: req.body.description,
		views: 0,
		likes: 0,
		duration: 0,
		video: '',
		timestamp: 0,
		comments: []
	};
	if (!newVide.title || !newVideo.channel || !newVideo.description) {
		return res.status(400).json({
			errorMessage: 'Please provide name, email and course for new student'
		});
	}
	students.push(newStudent);
	// console.log(JSON.stringify(students));
	helper.writeJSONFile(fileName, students);
	res.json(students);
});

module.exports = router;
