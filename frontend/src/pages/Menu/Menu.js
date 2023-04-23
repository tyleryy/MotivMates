

// import growtree from './assets/growtree.gif'
import './Menu.css';


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


function ToggleButtons() {
  
    return (
      <ToggleButtonGroup
        exclusive
        // onChange={change display}
      >
        <ToggleButton value="left" aria-label="left aligned">
          Active Friends
        </ToggleButton>
        <ToggleButton value="center" aria-label="centered">
          Inactive Friends
        </ToggleButton>
        <ToggleButton value="right" aria-label="right aligned">
          Pending Invitations
        </ToggleButton>
      </ToggleButtonGroup>
    );
  }


// make call to database for username

let email = localStorage.getItem('email');

function Menu() {
 return (
   <div>
    <div className='right'>
        <p>{ email ? email : "" }</p>
    </div>
    <div>
        {/* Add friends */}
        <Addfriend></Addfriend>
    </div>
    <div className='center'>
        {/* Friends */}
        <ToggleButtons></ToggleButtons>
    </div>
    <div>
        {/* Bottom navigation */}
        <FriendList/>
        
    </div>
   </div>
    
 );
}


export default Menu;





