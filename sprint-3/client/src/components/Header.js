import React from 'react';
import Logo from '../assets/Logo/Logo-brainflix.svg';
import Avatar from '../assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<nav className="header">
			<Link className="header__img-box" to="/">
				<img className="header__img" src={Logo} alt="logo" />
			</Link>

			<input className="header__search" type="search" placeholder="Search" />
			<div className="header__submit-box">
				<Link className="header__submit" to="/upload">
					<input className="header__submit-btn" type="submit" value=" + UPLOAD" />
				</Link>
				<img className="header__avatar" src={Avatar} alt="avatar" />
			</div>
		</nav>
	);
}
