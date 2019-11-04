import React, { Component } from 'react';
import NextVideo from '../components/NextVideo';
import About from '../components/About';
import CommentsInput from '../components/CommentsInput';
import Video from '../components/Video';

import 'axios';

import Avatar from '../assets/Images/Mohan-muruge.jpg';

const axios = require('axios');
export default class MainBody extends Component {
	componentDidMount() {
		axios
			.get('https://project-2-api.herokuapp.com/videos?api_key=533cc9b0-6f01-4d1c-aabb-d1000150b585')
			.then((result) => {
				this.setState({ sideVideo: result.data });
			});
		axios
			.get('https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=533cc9b0-6f01-4d1c-aabb-d1000150b585')
			.then((result) => {
				// console.log(result.data);
				this.setState({
					id: result.data.id,
					title: result.data.title,
					description: result.data.description,
					channel: result.data.channel,
					image: result.data.image,
					views: result.data.views,
					likes: result.data.likes,
					duration: result.data.duration,
					video: result.data.video,
					comments: result.data.comments
				});
			});
	}

	state = {
		id: '',
		title: '',
		description: '',
		channel: '',
		image: '',
		views: '',
		likes: '',
		duration: '',
		video: '',
		timestamp: '',
		id: '',
		comments: [],
		sideVideo: []
	};

	render() {
		return (
			<div>
				<Video data={this.state} />
				<div className="desktop-info">
					<div className="desktop__box">
						<About data={this.state} />
						<CommentsInput data={this.state.comments} />
					</div>
					<NextVideo data={this.state} />
				</div>
			</div>
		);
	}
}
