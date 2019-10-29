import React from 'react';
import View from '../assets/Icons/SVG/Icon-views.svg';
import Like from '../assets/Icons/SVG/Icon-likes.svg';

export default function About() {
	return (
		<div className="about">
			<h2 className="about__title">BMX Rampage: 2018 Highlights</h2>
			<div className="about__date-box">
				<h4 className="about__author">By Red Cow</h4>
				<h4 className="about__date">12/18/2018</h4>
			</div>
			<div className="about__view">
				<img className="about__view__img" src={View} alt="view" />
				<h4 className="about__view__num">1,001,023</h4>
				<img className="about__like__img" src={Like} alt="like" />
				<h4 className="about__view__num">110,985</h4>
			</div>
			<div className="about__para">
				<h4 className="about__para-text">
					On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is
					possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother
					nature only allowed for one full run before the conditions made it impossible to ride, that was all
					that was needed for event veteran Kyle Strait, who won the event for the second time
				</h4>
			</div>
		</div>
	);
}
