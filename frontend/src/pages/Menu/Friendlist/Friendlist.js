import './Friendlist.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, Grid, Card, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Context } from '../../../providers/provider';
import {setDoc, doc, updateDoc} from 'firebase/firestore';
import { getDatabase, ref, set} from "firebase/database"



function PendingCell({ value }) {
    const PendingCard = styled(Card)(({ theme }) => ({
        height: 100,
        margin: 10
        }));

    const globals = React.useContext(Context);
    const db = globals.db;
    const config = globals.config;
    const RT = globals.RT
    const email = localStorage.getItem("email")
    
    const generateLobbyCode = () => {
        let result;
    
            result = '';
            let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for ( let i = 0; i < 5; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * characters.length));
            }
    
        return result;
    }

    const fetchData = async () => {
        let contract_id = generateLobbyCode()
        await updateDoc(doc(db, 'relations', email), {
            "contract_id": contract_id
          })
        await updateDoc(doc(db, 'relations', value), {
        "contract_id": contract_id
        })
        
    }

    const handleClick = () => {
        fetchData()
        alert("Accepted Friend")
    }

    return (
        <PendingCard raised="true">
            <ListItem sx={{ height: "100%", width: "100%", alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}> {value} </Grid>
                    <Grid item xs={2}> <Button onClick={handleClick} variant="contained" color="secondary">Accept</Button> </Grid>
                    <Grid item xs={2}> <Button variant="contained">Reject</Button> </Grid>
                </Grid>
            </ListItem>
        </PendingCard>
    )
}

function FriendCell({value, func}) {

    const FriendCard = styled(Card)(({ theme }) => ({
        height: 100,
        margin: 10
        }));

    return (
        <FriendCard raised="true">
            <CardActionArea sx={{ width: "100%", height: "100%" }} onClick={() => {func(value)}}>
                <ListItem>
                    {value}
                </ListItem>
            </CardActionArea>
        </FriendCard>
    )
}

function Friendlist({ friends, type, func }) {

 return (
    <div className='layout'>
        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', borderRadius: 1, margin : 5, background: "#6789ce" }}>
      {friends.map((value, idx) => {
            return (
             (type != 2) ? <FriendCell value={value} key={idx} func={func}/> : <PendingCell value={value} key={idx}/>
            );
        })}
        </List>
    </div>
    
 );
}


export default Friendlist;