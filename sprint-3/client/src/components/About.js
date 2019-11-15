import React from 'react';
import View from '../assets/Icons/SVG/Icon-views.svg';
import Like from '../assets/Icons/SVG/Icon-likes.svg';

export default function About(props) {
	return (
		<div key={props.data.mainVideo.id} className="about">
			<h2 className="about__title">{props.data.mainVideo.title}</h2>
			<div className="about__dateview-box">
				<div className="about__date-box">
					<h4 className="about__author">{props.data.mainVideo.channel}</h4>
					<h4 className="about__date">{props.data.mainVideo.timestamp}</h4>
				</div>
				<div className="about__view">
					<img className="about__view__img" src={View} alt="view" />
					<h4 className="about__view__num">{props.data.mainVideo.views}</h4>
					<img className="about__like__img" src={Like} alt="like" />
					<h4 className="about__view__num">{props.data.mainVideo.likes}</h4>
				</div>
			</div>

			<div className="about__para">
				<h4 className="about__para-text">{props.data.mainVideo.description}</h4>
			</div>
		</div>
	);
}
