import Button from '@mui/material/Button';
import { Container, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {TextField} from '@mui/material';
import '../index.css';
import { useState } from 'react';

function Login(theme) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Add logic to submit and query database to verify login attempt
        if (username && password) {
            console.log(username, password);
        }
    }
    

    return <Container style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography
        variant="h6"
        color="textPrimary"
        component="h2"
        sx = {{
            marginTop: 2,
            fontFamily: theme.fontFamily,
            fontWeight: "bold"
        }}
        gutterBottom>
            MotivMates
        </Typography>
        
        <form noValidate autoComplete='off' onSubmit={handleSubmit} style={{width: "50%"}}>
            <TextField
            onChange={(e) => setUsername(e.target.value)}
            sx = {{
                marginTop: 2,
                marginBottom: 2,
                display: 'block',
            }}
            fullWidth
            label="Username"
            required
            >
            </TextField>

            <TextField
            onChange={(e) => setPassword(e.target.value)}
            sx = {{
                marginTop: 2,
                marginBottom: 2,
                display: 'block',
            }}
            fullWidth
            label="Password"
            required>
            </TextField>

            <Button 
            type="submit"
            color="primary"
            variant="contained"
            sx = {{
                fontFamily: "Quicksand",
                fontWeight: "regular"
            }}
            endIcon={<KeyboardArrowRightIcon/>}
            >
                Login
            </Button>

        </form>
    </Container>
}

export default Login;