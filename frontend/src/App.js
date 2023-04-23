import logo from './logo.svg';
import * as React from 'react';
import './App.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contract from './pages/Contract/Contract.js'
import Goalpage from './pages/Activepage/Activepage.js';
import Menu from './pages/Menu/Menu.js'
import StartPage from './pages/Startpage/Startpage.js'
import Signup from './pages/Signup/Signup';
import firebase from 'firebase/compat/app';
import { getFirestore } from 'firebase/firestore';
import { Provider } from './providers/provider';

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

// Configure Firebase.
const config = {
  apiKey: "AIzaSyA3TwYE8yiEm7e7s80kHPFfnXLDvuBF1Sg",
  authDomain: "motivmates.firebaseapp.com",
  databaseURL: "https://motivmates-default-rtdb.firebaseio.com",
  projectId: "motivmates",
  storageBucket: "motivmates.appspot.com",
  messagingSenderId: "693369238340",
  appId: "1:693369238340:web:7a3cc222a0754e6b805d11",
  measurementId: "G-XRLEV03ZNK"
};
const app = firebase.initializeApp(config);
const db = getFirestore(app);

const global_vars = {
  "app": app,
  "config": config,
  "db": db
}


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider contexts={global_vars}>

      <div className='App'>
      <Router>
      <Routes>
        <Route exact path="/" element={<StartPage/>}/>
        <Route path="/contract" element={<Contract/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/goal" element={<Goalpage/>}/>
      </Routes>
    </Router>
    </div>
    </Provider>
    </ThemeProvider>
  );
}

export default App;
