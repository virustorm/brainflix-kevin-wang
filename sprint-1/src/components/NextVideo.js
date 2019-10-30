import React from 'react';
import Photo from '../assets/Images/video-list-8.jpg';

export default function NextVideo(props) {
	const table = props.nextMobile.map((data, index) => {
		return (
			<div key={index} className="next">
				<div className="next__video">
					<img className="next__video-thumbnail" src={data.photo} />
					<div className="next__video-box">
						<h3 className="next__video-title">{data.title}</h3>
						<h4 className="next__video-author">{data.author}</h4>
					</div>
				</div>
			</div>
		);
	});

	return <div>{table}</div>;
}