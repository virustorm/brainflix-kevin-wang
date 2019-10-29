import React from 'react';
import Sample from '../assets/Video/SampleVideo.mp4';
import Play from '../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../assets/Icons/SVG/Icon-volume.svg';

export default function Video() {
	return (
		<div className="vid">
			<video className="vid-video">
				<source src={Sample} type="video/mp4" />
			</video>

			<div className="vid-button">
				<div className="video__play-box">
					<img className="video-button" id="play-button" src={Play} alt="play" />
				</div>
				<input type="range" className="video-range" id="range-button" />
				<div className="vid-right">
					<img className="video-button" id="fullScreen-button" src={FullScreen} />
					<img className="video-button" id="volume-button" src={Volume} />
				</div>
			</div>
		</div>
	);
}
