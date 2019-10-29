import React from 'react';
import Header from './components/Header';
import './styles/main.css';
import Video from './components/Video';
import About from './components/About';

function App() {
	return (
		<div>
			<Header />
			<Video />
			<About />
		</div>
	);
}

export default App;
