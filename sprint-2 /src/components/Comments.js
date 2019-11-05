import React from 'react';
import Grey from '../assets/Images/grey.jpg';

export default function Comments(props) {
	const comments =
		props.data.comments &&
		props.data.comments.map((data, index) => {
			return (
				<div key={index} className="comments">
					<img src={Grey} alt="" className="comments-avatar" />
					<div className="comments__box">
						<div className="comments__box-namedate">
							<h4 className="comments__name">{data.name}</h4>
							<h4 className="comments__date">{data.date}</h4>
						</div>
						<h4 className="comments__textbox">{data.comment}</h4>
					</div>
				</div>
			);
		});
	return <div>{comments}</div>;
}
