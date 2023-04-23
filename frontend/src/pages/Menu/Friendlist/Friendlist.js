import './Friendlist.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { Button, List, ListItem, IconButton, ListItemText, Card, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

function Friendlist() {

  const navigate = useNavigate();

  const FriendCard = styled(Card)(({ theme }) => ({
    height: 100,
    margin: 5
    }));

 return (
    <div className='layout'>
        <List sx={{ width: '100%', maxWidth: 800, bgcolor: 'background.paper', borderRadius: 1, margin : 5 }}>
      {[0, 1, 2].map((value) => {
            return (
            <FriendCard raised="true">
                <CardActionArea sx={{ width: "100%", height: "100%" }}>
                    <ListItem>
                        Hello {value}
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