import React from 'react';
import Sample from '../assets/Video/SampleVideo.mp4';
import Play from '../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../assets/Icons/SVG/Icon-volume.svg';
import PlaceHolder from '../assets/Images/video-list-0.jpg';

export default function Video() {
	return (
		<div className="vid">
			<video className="vid-video" poster={PlaceHolder}>
				<source src={Sample} type="video/mp4" />
			</video>

			<div className="vid-button">
				<div className="video__play-box">
					<img className="video-button" id="play-button" src={Play} alt="play" />
				</div>
				<div className="video__range">
					<input type="range" className="video-range" id="range-button" />
					<h5 className="video__time">0:00/0:42</h5>
				</div>
				<div className="vid-right">
					<img className="video-button" id="fullScreen-button" src={FullScreen} alt="fullscreen" />
					<img className="video-button" id="volume-button" src={Volume} alt="volume" />
				</div>
			</div>
		</div>
	);
}
