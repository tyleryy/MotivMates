

// import growtree from './assets/growtree.gif'
import './Startpage.css';
import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";




// import React, { useState } from "react";
import Button from '@mui/material/Button';






function Startpage() {

  const navigate = useNavigate();

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
         Sign Up
       </Button>
       <Button className='log-in' onClick={goToSignUp} variant="contained" sx={{backgroundColor: 'black' }} href="https://pokemongohub.net/post/guide/rayquaza-raid-guide/">
         Log In
       </Button>
     </div>
     
     <div className='spacing'>
       <h1 className="title">MotiveMates</h1>
     </div>
     <div className='spacing'>
       <img src={require('../../assets/tree_on_island_1.png')} alt="tree grows" className='image floating1'/>
       <img src={require('../../assets/tree_on_island_2.png')} alt="tree grows" className='image floating2'/>
       <img src={require('../../assets/tree_on_island_3.png')} alt="tree grows" className='image floating3'/>

     </div>
  
   </div>
    
 );
}


export default Startpage;




