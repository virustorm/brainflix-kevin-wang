import React from 'react';
// import Photo from '../assets/Images/video-list-5.jpg';

export default function NextVideo(props) {
	const table = props.data.sideVideo.map((data, index) => {
		if (data.bigTitle !== props.data.title) {
			return (
				<div key={index} className="next">
					<div className="next__video">
						<img className="next__video-thumbnail" src={data.photo} alt="thumbnail" />
						<div className="next__video-box">
							<h3 className="next__video-title">{data.title}</h3>
							<h3 className="next__video-bigTitle">{data.bigTitle}</h3>
							<h4 className="next__video-author">{data.author}</h4>
						</div>
					</div>
				</div>
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
