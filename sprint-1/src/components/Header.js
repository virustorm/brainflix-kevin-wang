import React from 'react';
import Logo from "../assets/Logo/Logo-brainflix.svg";
import Avatar from "../assets/Images/Mohan-muruge.jpg";

export default function Header() {
    return (
        <nav className="header">
            <a className="header__img-box" href="./App.js"><img className="header__img" src={Logo}></img></a>
            <input className="header__search" type="search" placeholder="Seach"></input>
            <div className="header__submit-box">
                <input className="header__submit" type="submit" value=" + UPLOAD"></input>
                <img className="header__avatar" src={Avatar} alt=""></img>
            </div>

        </nav>
    )
}