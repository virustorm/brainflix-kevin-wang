import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FrontPage from './components/FrontPage';
import Header from './components/Header';
import './styles/main.css';
// import Video from './components/Video';

// import MainBody from './components/MainBody';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact component={FrontPage} />
			</Switch>
		</div>
	);
}

export default App;
