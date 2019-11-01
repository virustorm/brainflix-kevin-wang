import React from 'react';
import Header from './components/Header';
import './styles/main.css';
import Video from './components/Video';

import MainBody from './components/MainBody';

function App() {
	return (
		<div>
			<Header />
			<Video />
			<MainBody />
		</div>
	);
}

export default App;
