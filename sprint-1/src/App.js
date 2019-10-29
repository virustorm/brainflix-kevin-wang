import React from 'react';
import Header from './components/Header';
import './styles/main.css';
import Video from './components/Video';
import About from './components/About';
import Comments from './components/Comments';

function App() {
	return (
		<div>
			<Header />
			<Video />
			<About />
			<Comments />
		</div>
	);
}

export default App;
