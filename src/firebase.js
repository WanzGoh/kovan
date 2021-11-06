import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyA5R_JMZ-tuHcWY5NfFFh9Eh0sAc0cIuks",
	authDomain: "kovan-8047c.firebaseapp.com",
	databaseURL: "https://kovan-8047c-default-rtdb.firebaseio.com",
	projectId: "kovan-8047c",
	storageBucket: "kovan-8047c.appspot.com",
	messagingSenderId: "1043818858542",
	appId: "1:1043818858542:web:2b90353c6213cdbaf777bf",
	measurementId: "G-DJ6B3YWL50"
      };

      	const firebaseApp = firebase.initializeApp(firebaseConfig);
	const db = firebaseApp.firestore();
	const auth = firebase.auth();
	const provider = new firebase.auth.GoogleAuthProvider();

      export{auth, provider};
      export default db;