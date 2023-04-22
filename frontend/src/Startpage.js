

// import growtree from './assets/growtree.gif'
import './Startpage.css';
import React from 'react';




// import React, { useState } from "react";
import Button from '@mui/material/Button';








function Startpage() {
 return (
   <div>
     <div>
       <Button variant="contained" sx={{backgroundColor: 'grey'}} href="https://pokemongohub.net/post/guide/rayquaza-raid-guide/" style={{float: 'right'}}>
         Sign In
       </Button>
       <Button variant="contained" sx={{backgroundColor: 'grey'}} href="https://pokemongohub.net/post/guide/rayquaza-raid-guide/" style={{float: 'right'}}>
         Log In
       </Button>
     </div>
     <div className='spacing'>
       <h1 className="title">MotiveMates</h1>
     </div>
     <div className='spacing'>
       <img src={require('./assets/tree3.webp')} alt="tree grows" className='image'/>
     </div>
  
   </div>
    
 );
}


export default Startpage;





