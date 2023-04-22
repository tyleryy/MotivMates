import React from 'react';
import './App.css';
import { useEffect } from 'react';
import axios from 'axios'
import Login from './pages/Login.js';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2c387e"
    }
  },
  typography: {
    fontFamily: "Quicksand",
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  }
});


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
      
    <ThemeProvider theme={theme}>
      <Login />
    {/* <div className="App">
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
    </div> */}
    </ThemeProvider>
  );
}


export default App;


