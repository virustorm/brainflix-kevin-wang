import React from 'react';
import Sample from '../assets/Video/SampleVideo.mp4';
import Play from '../assets/Icons/SVG/Icon-play.svg';
import FullScreen from '../assets/Icons/SVG/Icon-fullscreen.svg';
import Volume from '../assets/Icons/SVG/Icon-volume.svg';

export default function Video() {
	return (
		<div className="vid">
			<div>
				<img id="play-button" src={Play} alt="play" />
				<div>
					<img src={FullScreen} />
					<img src={Volume} />
				</div>
			</div>

			<video className="vid-video">
				<source src={Sample} type="video/mp4" />
			</video>
		</div>
	);
}
