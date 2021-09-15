import React ,{ useState } from 'react'
import { Avatar } from "@material-ui/core";
import "./styles/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');


	const handleSubmit = e =>{
		e.preventDefault();

		setInput('');
		setImageUrl('');
	}
	return (
		<div className="MessageSender">
			<div className="MessageSender__top">
				<Avatar src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" />
				<form>
					<input value={input} 
					onChange={(e)=> setInput(e.target.value)} 
					className="MessageSender__input" placeholder={"오늘은 어떠신가요?"} />
					<input value={imageUrl}
					onChange={(e)=> setImageUrl(e.target.value)} 
					placeholder="image URL (옵션)" />
					<button onClick={ handleSubmit } type="submit">
						hidden Submit</button>
						</form>
			</div>
			
			<div className="MessageSender__bottom">
				<div className="MessageSender__option">
				<VideocamIcon style={{color: "red"}} />
				<h3>실시간 비디오</h3>
				</div>
				<div className="MessageSender__option">
				<PhotoLibraryIcon style={{color: "green"}} />
				<h3>Photo/Video</h3>
				</div>
				<div className="MessageSender__option">
				<InsertEmoticonIcon style={{color: "orange"}} />
				<h3>Feeling/Activity</h3>
				</div>
			</div>
		</div>
	)
}
export default MessageSender
