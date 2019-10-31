import React from 'react';
import View from '../assets/Icons/SVG/Icon-views.svg';
import Like from '../assets/Icons/SVG/Icon-likes.svg';

export default function About(props) {
	const info = props.vidAbout.map((data, index) => {
		return (
			<div key={index + 2} className="about">
				<h2 className="about__title">{data.name}</h2>
				<div className="about__dateview-box">
					<div className="about__date-box">
						<h4 className="about__author">{data.author}</h4>
						<h4 className="about__date">{data.date}</h4>
					</div>
					<div className="about__view">
						<img className="about__view__img" src={View} alt="view" />
						<h4 className="about__view__num">{data.view}</h4>
						<img className="about__like__img" src={Like} alt="like" />
						<h4 className="about__view__num">{data.like}</h4>
					</div>
				</div>

				<div className="about__para">
					<h4 className="about__para-text">{data.description}</h4>
				</div>
			</div>
		);
	});

	return <div>{info}</div>;
}
