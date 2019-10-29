import React from 'react';
import Avatar from '../assets/Images/Mohan-muruge.jpg';

export default function Comments() {
	return (
		<div className="comments">
			<h3 className="comments__title">3 Comments</h3>
			<div className="comments__box">
				<img className="comments-avatar" src={Avatar} alt="avatar" />
				<div className="comments__form">
					<h3 className="comments__form-title">join the conversation</h3>
					<form>
						<input className="comments__form-input" type="text" />
						<input className="comments__form-submit" type="submit" value="comment" />
					</form>
				</div>
			</div>
		</div>
	);
}
