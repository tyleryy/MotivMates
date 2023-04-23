

// import growtree from './assets/growtree.gif'
import './Startpage.css';
import React from 'react';
import { useNavigate } from "react-router-dom";




// import React, { useState } from "react";
import Button from '@mui/material/Button';








function Startpage() {

  const navigate = useNavigate();

  const goToLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  const goToSignUp = (e) => {
    e.preventDefault();
    navigate('/sign-up');
  }

  const goToMenu = (e) => {
    e.preventDefault();
    navigate('/menu');
  }


 return (
   <div>
     <div className='auth-buttons'>
       <Button className='sign-in' onClick={goToSignUp} variant="contained" 
       sx={{
        backgroundColor: 'black',
        marginRight: 2,
      }} href="https://pokemongohub.net/post/guide/rayquaza-raid-guide/">
         Sign In
       </Button>
       <Button className='log-in' onClick={goToSignUp} variant="contained" sx={{backgroundColor: 'black' }} href="https://pokemongohub.net/post/guide/rayquaza-raid-guide/">
         Log In
       </Button>

       <Button className='log-in' onClick={goToMenu} variant="contained" sx={{backgroundColor: 'black' }}>
          DELETE LATER: Menu
       </Button>
     </div>
     <div className='spacing'>
       <h1 className="title">MotiveMates</h1>
     </div>
     <div className='spacing'>
       <img src={require('../../assets/tree3.webp')} alt="tree grows" className='image'/>
     </div>
  
   </div>
    
 );
}


export default Startpage;





