import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import MainBody from './components/MainBody';
import './styles/main.css';
import Upload from './components/Upload';
// import Video from './components/Video';

// import MainBody from './components/MainBody';

function App() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path="/" exact render={(props) => <MainBody {...props} />} />

				<Route
					path="/video/:videoId"
					render={(props) => (
						<div>
							<MainBody {...props} />
						</div>
					)}
				/>
				<Route path="/upload" component={Upload} />
			</Switch>
		</div>
	);
}

export default App;
