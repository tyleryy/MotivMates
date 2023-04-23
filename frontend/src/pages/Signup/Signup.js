// Import FirebaseAuth and firebase.
import React, { useContext, useEffect, useState } from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getDoc, setDoc, doc, getFirestore } from 'firebase/firestore';
import firebase from 'firebase/compat/app';
import { useNavigate } from "react-router-dom";
import 'firebase/compat/auth';
import { Context } from '../../providers/provider';

function Signup() {
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.

  const globals = useContext(Context);
  // Configure Firebase.
  const config = globals.config
  const app = globals.app
  const db = globals.db

  // Configure FirebaseUI.
  const uiConfig = {
    // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false,
    },
  };

  
  const navigate = useNavigate();
  const goToMenu = () => {
    navigate('/menu');
  }

  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);
  
  const writeUserIntoFirebase = async() => {
    if (firebase.auth().currentUser != null) {
        console.log(firebase.auth().currentUser.email);
        console.log(firebase.auth().currentUser.displayName);
        console.log(firebase.auth().currentUser.uid);
      
        const userDocRef = doc(db, "relations", firebase.auth().currentUser.email);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()) {
          console.log("User exists! Document data:", docSnap.data());
        } else {
          // docSnap.data() will be undefined in this case
          console.log("User doesn't exist! Create a new user for them.");
          await setDoc(doc(db, "relations", firebase.auth().currentUser.email), {
            friends: {},
            incoming_req: [],
            outgoing_req: []
          })
        }
        setTimeout(()=>{},10000);
        goToMenu();
      }};

  useEffect(() => {
    writeUserIntoFirebase();
  }, [isSignedIn]);

  if (!isSignedIn) {
    return (
      <div>
        <h1>MotiveMates</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
    );
  }
  return (
    <div>
      <h1>MotiveMates</h1>
      <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}

export default Signup;