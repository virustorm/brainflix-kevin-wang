import React from 'react';
import View from '../assets/Icons/SVG/Icon-views.svg';
import Like from '../assets/Icons/SVG/Icon-likes.svg';

export default function About(props) {
	return (
		<div key={props.data.id} className="about">
			<h2 className="about__title">{props.data.title}</h2>
			<div className="about__dateview-box">
				<div className="about__date-box">
					<h4 className="about__author">{props.data.author}</h4>
					<h4 className="about__date">{props.data.timestamp}</h4>
				</div>
				<div className="about__view">
					<img className="about__view__img" src={View} alt="view" />
					<h4 className="about__view__num">{props.data.views}</h4>
					<img className="about__like__img" src={Like} alt="like" />
					<h4 className="about__view__num">{props.data.likes}</h4>
				</div>
			</div>

			<div className="about__para">
				<h4 className="about__para-text">{props.data.description}</h4>
			</div>
		</div>
	);
}
