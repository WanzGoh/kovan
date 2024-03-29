import React from 'react'
import { Avatar } from "@material-ui/core";
import "./styles/Story.css";

function Story({image, profileSrc, title}) {
	return (
		<div style={{ backgroundImage: `url(${image})` }} className="story">
			<Avatar className="story_avatar" src={profileSrc} />
			<h4>{title}</h4>
		</div>
	)
}

export default Story
