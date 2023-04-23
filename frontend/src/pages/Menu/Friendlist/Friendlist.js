import './Friendlist.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, Grid, Card, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

function PendingCell({ value }) {
    const PendingCard = styled(Card)(({ theme }) => ({
        height: 100,
        margin: 10
        }));

    return (
        <PendingCard raised="true">
            <ListItem sx={{ height: "100%", width: "100%", alignItems: "center" }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}> {value} </Grid>
                    <Grid item xs={2}> <Button variant="contained" color="secondary">Accept</Button> </Grid>
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
            <CardActionArea sx={{ width: "100%", height: "100%" }} onClick={() => {func()}}>
                <ListItem>
                    {value}
                </ListItem>
            </CardActionArea>
        </FriendCard>
    )
}

function Friendlist({ friends, type, func }) {

  const navigate = useNavigate();

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