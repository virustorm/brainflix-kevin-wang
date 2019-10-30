import React from 'react';
import CommentsInput from './CommentsInput';
import Grey from '../assets/Images/grey.jpg';

export default function Comments() {
	return (
		<div>
			<div className="comments">
				<img src={Grey} alt="" className="comments-avatar" />
				<div className="comments__box">
					<div className="comments__box-namedate">
						<h4 className="comments__name">Micheal Lyons</h4>
						<h4 className="comments__date">12/18/2018</h4>
					</div>
					<h4 className="comments__textbox">
						They BLEW the ROOF off at their last show, once everyone started figuring out they were going.
						This is still simply the greatest opening of a concert I have EVER witnessed.
					</h4>
				</div>
			</div>{' '}
			<div className="comments">
				<img src={Grey} alt="" className="comments-avatar" />
				<div className="comments__box">
					<div className="comments__box-namedate">
						<h4 className="comments__name">Micheal Lyons</h4>
						<h4 className="comments__date">12/18/2018</h4>
					</div>
					<h4 className="comments__textbox">
						They BLEW the ROOF off at their last show, once everyone started figuring out they were going.
						This is still simply the greatest opening of a concert I have EVER witnessed.
					</h4>
				</div>
			</div>{' '}
			<div className="comments">
				<img src={Grey} alt="" className="comments-avatar" />
				<div className="comments__box">
					<div className="comments__box-namedate">
						<h4 className="comments__name">Micheal Lyons</h4>
						<h4 className="comments__date">12/18/2018</h4>
					</div>
					<h4 className="comments__textbox">
						They BLEW the ROOF off at their last show, once everyone started figuring out they were going.
						This is still simply the greatest opening of a concert I have EVER witnessed.
					</h4>
				</div>
			</div>
			<p className="next-title">next video</p>
		</div>
	);
}
