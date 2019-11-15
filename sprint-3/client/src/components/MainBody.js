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
		axios.get('http://localhost:5000/videos').then((result) => {
			this.setState({
				// currentId: result.data[0].id,
				sideVideo: result.data
			});
			this.props.match.params.videoId !== undefined
				? (firstVideo = this.props.match.params.videoId)
				: (firstVideo = '1af0jruup5gu');
			axios.get(`http://localhost:5000/videos/${firstVideo}`).then((result) => {
				this.setState({
					mainVideo: result.data[0]
				});
			});
		});
	}

	componentDidUpdate(prevProps) {
		if (this.props.match.params.videoId !== prevProps.match.params.videoId) {
			axios.get(`http://localhost:5000/${this.props.match.params.videoId}`).then((result) => {
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
