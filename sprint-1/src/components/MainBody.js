import React, { Component } from 'react';
import NextVideo from '../components/NextVideo';
import About from '../components/About';
import CommentsInput from '../components/CommentsInput';

import Video from '../assets/Video/SampleVideo.mp4';
import Avatar from '../assets/Images/Mohan-muruge.jpg';

import ThumbOne from '../assets/Images/video-list-1.jpg';
import ThumbTwo from '../assets/Images/video-list-2.jpg';
import ThumbThree from '../assets/Images/video-list-3.jpg';
import ThumbFour from '../assets/Images/video-list-4.jpg';
import ThumbFive from '../assets/Images/video-list-5.jpg';
import ThumbSix from '../assets/Images/video-list-6.jpg';
import ThumbSeven from '../assets/Images/video-list-7.jpg';
import ThumbEight from '../assets/Images/video-list-8.jpg';

export default class MainBody extends Component {
	state = {
		id: 'bmx',
		title: 'BMX Rampage: 2018 Highlights',
		description:
			'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
		channel: 'red cow',
		image: 'type of <string>',
		views: '1,001,023',
		likes: '110,985',
		duration: '0:42',
		video: Video,
		timestamp: '12/18/2018',
		comments: [
			{
				avatar: Avatar,
				name: 'Micheal Lyons',
				date: '12/18/2018',
				comment:
					'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
			},
			{
				avatar: Avatar,
				name: 'Gary Wong',
				date: '12/12/2018',
				comment:
					'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
			},
			{
				avatar: Avatar,
				name: 'Theodore Duncan',
				date: '11/15/2018',
				comment:
					'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
			}
		],
		sideVideo: [
			{
				title: 'Become A Travel Pro In One Easy Lesson…',
				bigTitle: 'Become A Travel Pro In One Easy Lesson',
				author: 'Scotty Cranmer',
				photo: ThumbOne
			},
			{
				title: 'Les Houches The Hidden Gem Of The…',
				bigTitle: 'Les Houches The Hidden Gem Of The Chamonix',
				author: 'Scotty Cranmer',
				photo: ThumbTwo
			},
			{
				title: 'Travel Health Useful Medical Information…',
				bigTitle: 'Travel Health Useful Medical Information For',
				author: 'Scotty Cranmer',
				photo: ThumbThree
			},
			{
				title: 'Cheap Airline Tickets Great Ways To Save',
				bigTitle: 'Cheap Airline Tickets Great Ways To Save',
				author: 'Emily Harper',
				photo: ThumbFour
			},
			{
				title: 'Take A Romantic Break In A Boutique Hotel',
				bigTitle: 'Take A Romantic Break In A Boutique Hotel',
				author: 'Ethan Owen',
				photo: ThumbFive
			},
			{
				title: 'Choose The Perfect Accommodations',
				bigTitle: 'Choose The Perfect Accommodations',
				author: 'Lydia Perez',
				photo: ThumbSix
			},
			{
				title: 'Cruising Destination Ideas',
				bigTitle: 'Cruising Destination Ideas',
				author: 'Timothy Austin',
				photo: ThumbSeven
			},
			{
				title: 'Train Travel On Track For Safety',
				bigTitle: 'Train Travel On Track For Safety',
				author: 'Scotty Cranmer',
				photo: ThumbEight
			}
		]
	};

	render() {
		return (
			<div className="desktop-info">
				<div className="desktop__box">
					<About data={this.state} />
					<CommentsInput data={this.state.comments} />
				</div>
				<NextVideo data={this.state.sideVideo} />
			</div>
		);
	}
}
