import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios'

function App() {

  const sendCall = async () => {
    const response = await axios.post("http://localhost:2000/api/update-quote", {
      "friend-name": {},
      "incoming": [],
      "outgoing": [],
      "password": "hihhihi",
      "self-points": 100,
      "username": "Tyler"
    })
    console.log(response.data)
  }

  // useEffect( () => {
  //   sendCall()
  //   console.log("call sent")
  // }, [])



  return (
    <div className="App">
      
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={sendCall}></button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
