import React from 'react';
import Avatar from '../assets/Images/Mohan-muruge.jpg';
import Comment from './Comments';

export default function CommentsInput(props) {
	return (
		<div className="commentsInput">
			<h3 className="commentsInput__title">3 Comments</h3>
			<div className="commentsInput__box">
				<img className="commentsInput-avatar" src={Avatar} alt="avatar" />
				<div className="commentsInput__form">
					<h3 className="commentsInput__form-title">join the conversation</h3>
					<form className="commentsInput__form-form">
						<input className="commentsInput__form-input" type="text" />
						<input className="commentsInput__form-submit" type="submit" value="COMMENT" />
					</form>
				</div>
			</div>
			<Comment data={props} />
		</div>
	);
}
