import React, { useState } from 'react';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Message from './Message';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
  //  run once when thw app component loads
  db.collection('messages').orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
    setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
  })
  }, [])

  useEffect(() =>{
   setUsername(prompt('Please enter your name'));
  }, [] )

  console.log(input);
  console.log(messages);

  const sendMessage = (event) =>{
    // all the logic to send a message is going here
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=80&h=80" alt="" />
      <h1>Hello Guys🔥</h1>
      <h2>Welcome 🤝 <span>{username}</span> </h2>

      <form className="app_form">
       <FormControl className="app_formControl">
        <InputLabel>Enter a message</InputLabel>
        <Input className="app_input" placeholder="Enter message.." value={input} onChange={event => setInput(event.target.value)} />
        <IconButton className="app_iconButton" disabled={!input} type='submit' variant="contained" color="primary" onClick={sendMessage}>
          <SendIcon/>
        </IconButton>
       </FormControl>
      </form>

      <FlipMove>
         {/* messages themselves */}
          {
            messages.map(({id, message}) =>{
              return(
                <Message key={id} username={username} message={message} />
              )
            })
          }
      </FlipMove>
    </div>
  );
}

export default App;
