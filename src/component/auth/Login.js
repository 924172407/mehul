import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link, useNavigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { UserAuth } from './AuthContext';
import { FcGoogle } from 'react-icons/fc'
import { IconContext } from 'react-icons/lib/esm/iconContext';
import { FaFacebookSquare } from "react-icons/fa";

//Authentication Using Api 
// async function loginUser(data) {
//     await fetch('http://localhost:7000/api/auth/log', {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json, text/plain, */*',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => response.json())
//         .then(data => {
//             console.log(data.authtoken)
//         })
// }

export default function Login(setToken) {

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const handleSubmit = async e => {
    //     e.preventDefault();
    //     const token = await loginUser({ email, password });
    //     setToken(token);
    //     sessionStorage.setItem('auth',token)
    //     console.log(token);
    // }


    // Authentication Using Firebase

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { signIn } = UserAuth();
    const { googleSignIn } = UserAuth();

    // Signin using Google
    const handleGooglesignin = async () => {
        try {
          const res= await googleSignIn();
          console.log(res)
            localStorage.setItem('login',true)

        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
            await signIn(email, password)
            // localStorage.setItem('login',true)
            navigate('/cart')

        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            name="email"
                            type="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link to="/passreset" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
                <IconContext.Provider value={{ size: '2.5em', margin: '10px' }}  >
                    <FcGoogle onClick={handleGooglesignin} style={{
                        margin: '1em', boxShadow: '1px'
                    }} />
                    {/* <FaFacebookSquare onClick={handleFacebooksignin} /> */}
                </IconContext.Provider>
            </Box>
        </Container>

    );
}