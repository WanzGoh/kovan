import React from 'react'
import "./styles/Post.css"
import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";

function Post({profilePic, image, username, timestamp, message}) {
	return (
		<div className="Post">
			<div className="Post__top">
				<Avatar src={ profilePic } className="Post__avatar" />
				<div className="Post_topinfo">
					<h3>{username}</h3>
					<p> {timestamp}</p>
				</div>
			</div>
			<div className="Post__bottom">
				<p>{message}</p>
			</div>
			<div className="Post__image">
					<img src={image} alt="" />
			</div>
			<div className="Post__options">
				<div className="Post__option">
					<ThumbUpIcon/>
					<p>like</p>
				</div>
				<div className="Post__option">
          				<ChatBubbleOutlineIcon />
          				<p>Comment</p>
        			</div>
        			<div className="Post__option">
          			<NearMeIcon />
          			<p>Share</p>
        			</div>
        			<div className="Post__option">
          			<AccountCircleIcon />
          			<ExpandMoreOutlined />
        			</div>
			</div>
		</div>
	)
}

export default Post
