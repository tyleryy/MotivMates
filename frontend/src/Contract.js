import './Contract.css';

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const marks = [
    {
      value: 25,
      label: '1',
    },
    {
      value: 50,
      label: '2',
    },
    {
      value: 75,
      label: '3',
    },
    {
      value: 100,
      label: '4',
    },
  ];
  
//   function valuetext(value: number) {
//     return `${value}°C`;
//   }
  
  function DurationSlider() {
    return (
      <Box sx={{ width: 400 }}>
        <Slider
          aria-label="Custom marks"
          defaultValue={1}
          step={25}
          valueLabelDisplay="auto"
          marks={marks}
        />
        <Button variant="contained" onClick={console.log("Change this to show confirmed status")} sx={{backgroundColor: 'grey'}} style={{float: 'right'}}>
            Done
        </Button>
      </Box>
    );
  }



function TextFields() {
    return (
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 4, width: '60ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='center'>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            defaultValue=""
          />
        </div>
        <div className='center'>
        <Button variant="contained" onClick={console.log("Change this to show confirmed status")} sx={{backgroundColor: 'grey'}}>
            Done
        </Button>
        </div>
        
      </Box>
    );
  }


  function Displaytext() {
    return (
        <div className='text'>
          <Box
            component="span"
            sx={{
              visibility: 'visible',
              my: 2,
              p: 1,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
            }}
          style={{width: '100%'}}>
            The other person's goal, pull from database 
          </Box>
          
        </div>
      );
  }


function Contract() {
    return(
        <div>
            <div className='spacing'>
                <h1 className='title'>Mini Goal</h1>
            </div>
            <div className='row'>
            <div className='column'>
                <div>
                {/* Duration */}
                    <h2 className='spacing'>Duration of goal</h2>
                </div>
                <div className='spacing'>
                    <DurationSlider></DurationSlider>
                    
                </div>
            </div>
            <div className='column'>
                <div>
                    {/* Goal */}
                    <h2 className='spacing'>Goal specification</h2>
                </div>
                <div>
                    <div className='spacing'>
                    <p>
                        Insert your personal goal
                    </p>
                    </div>
                    <TextFields></TextFields>
                    
                    <div className='center'>
                        <Displaytext></Displaytext> 
                    </div>
                    <div className='buttonrow'>
                        <div className='buttoncenter'>
                        <Button variant="contained" onClick={console.log("Change this to show confirmed status")} sx={{backgroundColor: 'grey'}}>
                            Approve
                        </Button>
                        </div>
                        <div className='buttoncenter'>
                        <Button variant="contained" onClick={console.log("Change this to show confirmed status")} sx={{backgroundColor: 'grey'}}>
                            Deny
                        </Button>
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
              
        </div>
    );
}

export default Contract;