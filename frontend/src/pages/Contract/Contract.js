import './Contract.css';

import {useState, useEffect, useContext} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { getDatabase, ref, set } from "firebase/database";
import { Context } from '../../providers/provider';
import { useNavigate } from "react-router-dom";


//   function valuetext(value: number) {
//     return `${value}°C`;
//   }
  
  function DurationSlider() {

    const [sliderVal, changeSliderVal] = useState(1);
    


    // useEffect( () => {
    //   console.log(sliderVal)
    // })

    return (
      <Box sx={{ width: 400 }}>
        <Slider
          value={sliderVal}
          aria-label="Volume"
          defaultValue={1}
          onChange={(e)=>changeSliderVal(e.target.value)}
          valueLabelDisplay="on"
          max={30}
        />
        
      </Box>
    );
  }



function TextFields() {

  const [textEdit, textEditChange] = useState("")

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
            value={textEdit}
            onChange={(e) => {textEditChange(e.target.value)}}
          />
        </div>
        
      </Box>
    );
  }


  function Displaytext() {
    const [textView, textViewChange] = useState("")

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
            {textView}
          </Box>
          
        </div>
      );
  }


function Contract() {


  const navigate = useNavigate();

  const goToMenu = (e) => {
    e.preventDefault();
    navigate('/menu');
  }

  
    const global_vars = useContext(Context);
    const app = global_vars.app;
    const RTdatabase = getDatabase(app)

    // useEffect(() => {


    //   const contract_listener = ref(RTdatabase, 'users/' + )
    // }, [])

    // set(ref(RTdatabase, 'users/', localStorage.getItem("email")), {
    //   username: name
    // } )


    return(
        <div>
            <div>
                <Button variant="contained" onClick={goToMenu} sx={{backgroundColor: 'black', marginLeft: 2, display: 'flex', justifyContent: 'left'}} >
                    Back
                </Button>
              </div>
            <div className='spacing'>
                <h1 className='title'>Mini Goal</h1>
            </div>
            <div className='row'>
            <div className='contract-column'>
                <div>
                {/* Duration */}
                    <h2 className='spacing'>Duration of goal</h2>
                    <p className='spacing'>Slide the slider to the number of days that you would like</p>
                </div>
                <div className='spacing'>
                    <DurationSlider></DurationSlider>
                    
                </div>
            </div>
            <div className='contract-column'>
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
                    
                </div>
                </div>
                
                </div>
                <div className='buttonrow'>
                        <div className='buttoncenter'>
                        <Button variant="contained" onClick={() => {
                          alert("Approved Mini Goal")
                          navigate('/goal')
                          
                        }
                        } sx={{backgroundColor: 'green'}}>
                            Approve
                        </Button>
                        </div>
                        <div className='buttoncenter'>
                        <Button variant="contained" onClick={() => {
                        alert("Denied Mini Goal") 
                        navigate('/menu') 
                        }
                        }sx={{
                          backgroundColor: 'red'}}>
                            Deny
                        </Button>
                        </div>
                    </div>


            
              
        </div>
    );
}

export default Contract;