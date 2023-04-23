import './Friendlist.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, Grid, Card, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

function PendingCell({ value, idx }) {
    const PendingCard = styled(Card)(({ theme }) => ({
        height: 100,
        margin: 10
        }));

    return (
        <PendingCard raised="true" key={idx}>
            <ListItem sx={{ height: "100%", width: "100%", alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}> {value} User </Grid>
                    <Grid item xs={2}> <Button variant="contained" color="secondary">Accept</Button> </Grid>
                    <Grid item xs={2}> <Button variant="contained">Reject</Button> </Grid>
                </Grid>
            </ListItem>
        </PendingCard>
    )
}

function FriendCell({value, idx}) {

    const FriendCard = styled(Card)(({ theme }) => ({
        height: 100,
        margin: 10
        }));

    return (
        <FriendCard raised="true" key={idx}>
            <CardActionArea sx={{ width: "100%", height: "100%" }}>
                <ListItem>
                    {value} User
                </ListItem>
            </CardActionArea>
        </FriendCard>
    )
}

function Friendlist({ friends, type }) {

  const navigate = useNavigate();

 return (
    <div className='layout'>
        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', borderRadius: 1, margin : 5, background: "#6789ce" }}>
      {friends.map((value, idx) => {
            return (
             (type != 2) ? <FriendCell value={value} idx={idx}/> : <PendingCell value={value} idx={idx}/>
            );
        })}
        </List>
    </div>
    
 );
}


export default Friendlist;