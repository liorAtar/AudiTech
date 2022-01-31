import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { signup } from '../Firebase';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();

    /**
     * Sign up the user wih the requested detailes
     */
    const handleSignUp = async () => {
        try {
            await signup(emailRef.current.value, passwordRef.current.value, firstNameRef.current.value);
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <TextField
                inputRef={firstNameRef}
                required
                id="outlined-required"
                label="First Name"
            />
            <TextField
                inputRef={emailRef}
                required
                id="outlined-required"
                label="Email"
            />
            <TextField
                inputRef={passwordRef}
                required
                id="outlined-required"
                label="Password"
            />
            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
        </div>
    )
};

export default SignUp;
