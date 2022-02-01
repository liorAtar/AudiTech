import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { login } from '../Firebase';

export const Login = ({updateCurrentUser}) => {
    const emailRef = useRef();
    const passwordRef = useRef();

    /**
     * Sign up the user wih the requested detailes
     */
    const handleLogIn = async () => {
        try {
            const userCredential =
                await login(emailRef.current.value, passwordRef.current.value);
            updateCurrentUser(userCredential.user);
         } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <TextField
                inputRef={emailRef}
                required
                variant="outlined"
                label="Email"
                type="email"
            />
            <TextField
                inputRef={passwordRef}
                required
                variant="outlined"
                label="Password"
                type="password"
            />
            <Button variant="contained" onClick={handleLogIn}>Log In</Button>
        </div>
    )
};

export default Login;
