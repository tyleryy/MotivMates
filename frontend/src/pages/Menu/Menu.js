

// import growtree from './assets/growtree.gif'
import './Menu.css';

import * as React from 'react';
import {useState, useContext} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import FriendList from './Friendlist/Friendlist.js';
import { Context } from '../../providers/provider';
import {setDoc, doc, getDoc} from 'firebase/firestore';

import { useNavigate, useNavigation } from "react-router-dom";

function Addfriend() {
  const [open, setOpen] = useState(false);
  const [text, changeText] = useState("")

  const globals = useContext(Context);
  const db = globals.db;
  const config = globals.config;

  async function friend_request (name) {

    const docSnap = await getDoc(doc(db, "relations", name))
    if (docSnap.exists()) {
        let doc_data = docSnap.data()
        const email = localStorage.getItem("email")
        if (email === name)
          throw Error();
        doc_data.incoming_req.push(email)
        await setDoc(doc(db, 'relations', name), doc_data)
    } else {
        throw Error();
    }
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {

    friend_request(text).then( () => {
      alert("Friend Request sent!")
    }

    ).catch( () => {
      if (text)
        alert("Friend Request failed")
    })
    setOpen(false);
  };

  return (
    <div>
        <div className='spacing'>
            <h1 className="title">MotiveMates</h1>
        </div>
        <div className='center'>
        <Button variant="outlined" onClick={handleClickOpen}>
            Add a new friend
        </Button>
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add Friend</DialogTitle>
            <DialogContent>
            <DialogContentText>
                Search for a friend by their unique username and send add request
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                value={text}
                onChange={(event) => {
                  changeText(event.target.value);
                }}
                label="Friend Username"
                type="email"
                fullWidth
                variant="standard"
            />
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Add</Button>
            </DialogActions>
        </Dialog>
        </div>
    </div>
  );
}


function ToggleButtons({ selectFriends }) {
  
    return (
      <ToggleButtonGroup
        exclusive
        // onChange={change display}
      >
        <ToggleButton value="left" aria-label="left aligned" onClick={ () => selectFriends(0) }>
          Active Friends
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered" onClick={ () => selectFriends(1) }>
          Inactive Friends
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned" onClick={ () => selectFriends(2) }>
          Pending Invitations
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }


// make call to database for username
let username = "placeholder_name"


function Menu() {
  const [friendListType, setFriendListType] = React.useState(3);
  const friends = React.useRef([]);

  const navigate = useNavigate();

  const goToGoal = (e) => {
    navigate('/goal');
  }

  const goToContract = (e) => {
    navigate('/contract');
  }

  // This is where the database returns friends list
  let arr = [];
  let func = () => {navigate('/menu');};
  if (friendListType === 2)
  { arr = ["pending"]; }
  else if (friendListType === 1)
  { 
    arr = ["inactive", "inactive", "inactive"];
    func = goToContract;
  }
  else 
  { 
    arr = ["accepted", "accepted"]; 
    func = goToGoal;
  }
  friends.current = [...arr];

 return (
   <div>
    <div className='right'>
        <p>{username}</p>
    </div>
    <div>
        {/* Add friends */}
        <Addfriend></Addfriend>
    </div>
    <div className='center'>
        {/* Friends */}
        <ToggleButtons selectFriends={setFriendListType}/>
    </div>
    <div>
        {/* Bottom navigation */}
        <FriendList friends={friends.current} type={friendListType} func={func}/>
        
    </div>
   </div>
    
 );
}


export default Menu;





