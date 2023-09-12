import { useState } from 'react'
import './App.css'
import React from 'react'
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';   
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyD_DIL1KaqZa28lkPAu7j4Z59TzC8TBHLo",
  authDomain: "chatbot-firebase-d7b9d.firebaseapp.com",
  projectId: "chatbot-firebase-d7b9d",
  storageBucket: "chatbot-firebase-d7b9d.appspot.com",
  messagingSenderId: "310213925549",
  appId: "1:310213925549:web:1afeb9ab04bba6919d4424",
  measurementId: "G-PMTDKRY9M5"
})

const auth=firebase.auth();
const firestore= firebase.firestore();


const [user]=useAuthState(auth);

function SignIn(){
  const signInWithGoogle = ()=>{
    const provider= new firebase.auth.GoogleAuthProvider();
    //para mo pop up ang sign in
    auth.signInWithPopup(provider)
  }
  return (
  <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
function signOut(){
  return auth.currentUser && (
    <button onClick={()=>auth.signOut()}>Sign Out</button>
  )
}
function ChatRoom(){
  const messagesRef= firestore.collection('messages');
  //limit text to 25
  const query= messagesRef.orderBy('createdAt').limit(25);
  const [messages]=useCollectionData(query,{idField:'id'})
}

function App() {
  return (
    <>
    <div className='App'>
     {messages && messages.map(msg => <ChatMessage key={msg.i}/>)}


      {/* {user? <ChatRoom/> : <SignIn/>} */}
    
    </div>
    </>
  )
}

export default App
