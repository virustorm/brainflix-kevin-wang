import React from 'react';
import Header from './components/Header';
import './styles/main.css';
import Video from './components/Video';
import About from './components/About';
import CommentsInput from './components/CommentsInput';
import NextVideo from './components/NextVideo';

function App() {
	const nextMobile = [
		{
			title: 'Become A Travel Pro In One Easy Lesson…',
			author: 'Scotty Cranmer',
			photo: '/static/media/video-list-1.53904a06.jpg'
		},
		{
			title: 'Les Houches The Hidden Gem Of The…',
			author: 'Scotty Cranmer',
			photo: '/static/media/video-list-2.6a84feb9.jpg'
		},
		{
			title: 'Travel Health Useful Medical Information…',
			author: 'Scotty Cranmer',
			photo: '/static/media/video-list-3.fc3a2fff.jpg'
		},
		{
			title: 'Cheap Airline Tickets Great Ways To Save',
			author: 'Emily Harper',
			photo: '/static/media/video-list-4.d3461ce5.jpg'
		},
		{
			title: 'Take A Romantic Break In A Boutique Hotel',
			author: 'Ethan Owen',
			photo: '/static/media/video-list-5.1a58294a.jpg'
		},
		{
			title: 'Choose The Perfect Accommodations',
			author: 'Lydia Perez',
			photo: '/static/media/video-list-6.fd48a715.jpg'
		},
		{
			title: 'Cruising Destination Ideas',
			author: 'Timothy Austin',
			photo: '/static/media/video-list-7.eaea8bef.jpg'
		},
		{
			title: 'Train Travel On Track For Safety',
			author: 'Scotty Cranmer',
			photo: '/static/media/video-list-8.20e2e4a6.jpg'
		}
	];

	const vidAbout = [
		{
			name: 'BMX Rampage: 2018 Highlights',
			author: 'By Red Cow',
			date: '12/18/2018',
			view: '1,001,023',
			like: '110,985',
			description:
				'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time'
		}
	];

	return (
		<div>
			<Header />
			<Video />
			<About vidAbout={vidAbout} />
			<CommentsInput />
			<NextVideo nextMobile={nextMobile} />
		</div>
	);
}

export default App;
