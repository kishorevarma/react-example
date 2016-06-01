import React from 'react';

export default class Article {
	render() {
		let {image, title, id} = this.props;
		return (
			<div class="articleCont">
				<img src={image} alt={title} class="articleimage"/>
				<span className="articleTitle"> {title} </span>
			</div>
		);
	}
}