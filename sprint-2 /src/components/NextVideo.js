import React from 'react';
import { Link } from 'react-router-dom';
// import Photo from '../assets/Images/video-list-5.jpg';

export default function NextVideo(props) {
	const table = props.data.sideVideo.map((data, index) => {
		if (data.id !== props.data.id) {
			return (
				<Link className="next__video-a" to={`video/${data.id}`}>
					<div key={index} className="next">
						<div className="next__video">
							<img className="next__video-thumbnail" src={data.image} alt="thumbnail" />
							<div className="next__video-box">
								<h3 className="next__video-title">{data.title}</h3>
								<h4 className="next__video-author">{data.channel}</h4>
							</div>
						</div>
					</div>
				</Link>
			);
		}
		return null;
	});

	return (
		<div className="next">
			<p className="next-title">next video</p>
			{table}
		</div>
	);
}
