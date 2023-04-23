import './Friendlist.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, IconButton, ListItemText, Card, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

function Friendlist({ friends }) {

  const navigate = useNavigate();

  const FriendCard = styled(Card)(({ theme }) => ({
    height: 100,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 5,
    marginBottom: 5
    }));

 return (
    <div className='layout'>
        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', borderRadius: 1, margin : 5, background: "#6789ce" }}>
      {friends.map((value) => {
            return (
            <FriendCard raised="true">
                <CardActionArea sx={{ width: "100%", height: "100%" }}>
                    <ListItem>
                        {value} User
                    </ListItem>
                </CardActionArea>
            </FriendCard>
            );
        })}
        </List>
    </div>
    
 );
}


export default Friendlist;