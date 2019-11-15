const express = require('express');
const router = express.Router();
const fileName = __dirname + '/../../model/video.json';
let videos = require(fileName);
const detailName = __dirname + '/../../model/videoDetail.json';
let detailVideos = require(detailName);
const helper = require('../../helper/helper');
const randomHelper = require('../../helper/randomHelper');
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
		channel: 'BrainStation',
		image: req.body.image,
		description: req.body.description,
		views: randomHelper.randomInt(),
		likes: randomHelper.randomInt(),
		duration: 0,
		video: '',
		timestamp: 0,
		comments: [
			{
				name: randomHelper.randomName(),
				comment: randomHelper.randomComment(),
				id: randomHelper.getNewId(),
				likes: randomHelper.randomInt(),
				timestamp: randomHelper.randomInt()
				// avatar: randomHelper.randomAvatar()
			},
			{
				name: randomHelper.randomName(),
				comment: randomHelper.randomComment(),
				id: randomHelper.getNewId(),
				likes: randomHelper.randomInt(),
				timestamp: randomHelper.randomInt()
				// avatar: randomHelper.randomAvatar()
			},
			{
				name: randomHelper.randomName(),
				comment: randomHelper.randomComment(),
				id: randomHelper.getNewId(),
				likes: randomHelper.randomInt(),
				timestamp: randomHelper.randomInt()
				// avatar: randomHelper.randomAvatar()
			}
		]
	};
	if (!newVideo.title || !newVideo.description) {
		return res.status(400).json({
			errorMessage: 'Please provide name, email and course for new student'
		});
	}
	detailVideos.push(newVideo);
	// console.log(JSON.stringify(students));
	helper.writeJSONFile(detailName, detailVideos);
	res.json(detailVideos);
	videos.push({ id: newVideo.id, title: newVideo.title, channel: newVideo.channel, image: newVideo.image });
	helper.writeJSONFile(fileName, videos);
	res.json(videos);
});

module.exports = router;
