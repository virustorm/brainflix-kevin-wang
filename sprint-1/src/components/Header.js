import React from 'react';
import Logo from '../assets/Logo/Logo-brainflix.svg';
import Avatar from '../assets/Images/Mohan-muruge.jpg';

export default function Header() {
	return (
		<nav className="header">
			<a className="header__img-box" href="./App.js">
				<img className="header__img" src={Logo} alt="logo" />
			</a>
			<input className="header__search" type="search" placeholder="Search" />
			<div className="header__submit-box">
				<input className="header__submit" type="submit" value=" + UPLOAD" />
				<img className="header__avatar" src={Avatar} alt="avatar" />
			</div>
		</nav>
	);
}
