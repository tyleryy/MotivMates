import logo from './logo.svg';
import './App.css';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Contract from './pages/Contract/Contract.js'
import Login from './pages/Login/Login.js'
import Menu from './pages/Menu/Menu.js'
import StartPage from './pages/Startpage/Startpage.js'


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


  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
      <Router>
      <Routes>
        <Route exact path="/" element={<StartPage/>}/>
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/contract" element={<Contract/>}/> */}
        <Route path="/menu" element={<Menu/>}/>
      </Routes>
    </Router>
    {/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
    </div>
    </ThemeProvider>
  );
}

export default App;
