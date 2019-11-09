import React, { Component } from 'react';
import NextVideo from '../components/NextVideo';
import About from '../components/About';
import CommentsInput from '../components/CommentsInput';
import Video from '../components/Video';

import 'axios';

// import Avatar from '../assets/Images/Mohan-muruge.jpg';

const axios = require('axios');
export default class MainBody extends Component {
	componentDidMount() {
		let firstVideo = '';
		axios
			.get('https://project-2-api.herokuapp.com/videos?api_key=533cc9b0-6f01-4d1c-aabb-d1000150b585')
			.then((result) => {
				this.setState({
					// currentId: result.data[0].id,
					sideVideo: result.data
				});
				this.props.match.params.videoId !== undefined
					? (firstVideo = this.props.match.params.videoId)
					: (firstVideo = '1af0jruup5gu');
				axios
					.get(
						`https://project-2-api.herokuapp.com/videos/${firstVideo}?api_key=533cc9b0-6f01-4d1c-aabb-d1000150b585`
					)
					.then((result) => {
						this.setState({
							mainVideo: result.data
						});
					});
			});
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
			axios
				.get(
					`https://project-2-api.herokuapp.com/videos/${this.props.match.params
						.videoId}?api_key=533cc9b0-6f01-4d1c-aabb-d1000150b585`
				)
				.then((result) => {
					this.setState({ mainVideo: result.data });
				});
		}
	}

	state = {
		mainVideo: {},
		sideVideo: []
	};

	render() {
		return (
			<div>
				<Video data={this.state} />
				<div className="desktop-info">
					<div className="desktop__box">
						<About data={this.state} />
						<CommentsInput data={this.state.mainVideo} />
					</div>
					<NextVideo data={this.state} />
				</div>
			</div>
		);
	}
}
