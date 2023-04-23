import './Activepage.css';
import Button from '@mui/material/Button';

import * as React from 'react';
import { useNavigate } from "react-router-dom";


// Fetch numdays from database: time end - current time
let numDays = 5

function Goalpage() {

  const navigate = useNavigate();

  const goToMenu = (e) => {
    e.preventDefault();
    navigate('/menu');
  }


    return(
        <div>
        <div>
            <Button variant="contained" onClick={goToMenu} sx={{backgroundColor: 'black', marginLeft: 2, display: 'flex', justifyContent: 'left'}} >
                Back
            </Button>
            </div>
        <div className='row'>
        <div className='column'>
        <div className='center'>
            <h1 className='title'>Days to goal</h1>
        </div>
        <div className='day'>
            <h1>{numDays}</h1>
        </div>

        <div className='buttonrow'>
            <div className='buttoncenter'>
                <Button variant="contained" onClick={console.log("Change this to show confirmed status")} sx={{backgroundColor: 'grey'}}>
                    Completed
                </Button>
                </div>
                <div className='buttoncenter'>
                <Button variant="contained" onClick={console.log("Change this to show confirmed status")} sx={{backgroundColor: 'grey'}}>
                    Incomplete
                </Button>
                </div>
            </div>

        </div>

        <div className='column1'>
            <img src={require('../../assets/Firedog.png')} className='image'></img>
        </div>

        </div>
        </div>
        

    );
}

export default Goalpage;