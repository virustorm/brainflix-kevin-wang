import React from 'react';
import Photo from '../assets/Images/Upload-video-preview.jpg';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Upload extends React.Component {
	upload = () => {
		console.log(this.title.value);
		axios.post('http://localhost:5000/videos', {
			title: this.title.value,
			description: this.desc.value,
			image: Photo
		});
	};
	render() {
		return (
			<div className="upload">
				<form>
					<h2 className="upload-title">upload video</h2>
					<div className="upload-deskBox">
						<div className="upload__thumbnail">
							<h4 className="upload__thumbnail-title title">video thumbnail</h4>
							<img className="upload__thumbnail-video" src={Photo} alt="upload" />
						</div>

						<div className="upload__input">
							<div className="upload__input__title">
								<h4 className="upload__input__title-text title">title your video</h4>
								<input
									className="upload__input__title-input"
									type="text"
									placeholder="Add a title to your video"
									ref={(ref) => (this.title = ref)}
								/>
							</div>
							<div className="upload__des">
								<h4 className="upload__des-title title">add a video description</h4>
								<input
									className="upload__des-input"
									type="text"
									placeholder="Add a description of your video"
									ref={(ref) => (this.desc = ref)}
								/>
							</div>
						</div>
					</div>
					<div className="upload__btn">
						<button className="upload__btn-pub" type="button" onClick={this.upload}>
							Publish
						</button>
						<Link className="upload__btn-canc" to="/">
							<button className="upload__btn-can" type="button">
								Cancel
							</button>
						</Link>
					</div>
				</form>
			</div>
		);
	}
}
