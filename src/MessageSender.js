import React ,{ useState } from 'react'
import { Avatar } from "@material-ui/core";
import "./styles/MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import {useStateValue} from "./StateProvider" 
import db from './firebase';
import firebase from "firebase/compat/app";
function MessageSender() {
	const [{ user }, dispatch] = useStateValue();
	const [input, setInput] = useState('');
	const [imageUrl, setImageUrl] = useState('');


	const handleSubmit = e =>{
		e.preventDefault();

		db.collection("posts").add({
			message: input,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			profilePic: user.photoURL,
			username: user.displayName,
			image: imageUrl,
		})
		
		
		
		setInput('');
		setImageUrl('');
	}
	return (
		<div className="MessageSender">
			<div className="MessageSender__top">
				<Avatar src ={ user.photoURL}/>
				<form>
					<input 
					value={input} 
					onChange={(e)=> setInput(e.target.value)} 
					className="MessageSender__input" placeholder={`What's up? ${user.displayName}`} />
					<input 
					value={imageUrl}
					onChange={(e)=> setImageUrl(e.target.value)} 
					placeholder="image URL (Optional)" />
					<button onClick={ handleSubmit } type="submit">
						hidden Submit</button>
						</form>
			</div>
			
			<div className="MessageSender__bottom">
				<div className="MessageSender__option">
				<VideocamIcon style={{color: "red"}} />
				<h3>Live</h3>
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
