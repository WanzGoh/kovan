import React from 'react'
import './styles/Login.css';
import { Button } from "@material-ui/core";
import ImageLogo from "./image/kovan.png";
import image from './image/kovanLogo.png'

import { auth, provider } from './firebase';
import { useStateValue }  from './StateProvider';
import { actionTypes } from './Reducer';

function Login() {
	
	const [state, dispatch] = useStateValue();

	const signIn =() =>{
		//sign in
		auth
		.signInWithPopup(provider)
		.then(result => {
			dispatch({
				type : actionTypes.SET_USER,
				user : result.user,
			});
		})
		.catch((error) => alert(error.message));
	}
	return (
		<div className="Login">
			<div className="Login__logo">
			<img src={ImageLogo} alt="logo" />
				<img src={image} alt="" />
			</div>
			<Button type="submit" onClick={signIn}>
				sign In
			</Button>
		</div>
	)
}

export default Login
