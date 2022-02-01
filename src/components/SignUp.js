import React, { useRef } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { signup, login } from '../Firebase';

const SignUp = ({updateCurrentUser}) => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const firstNameRef = useRef();

    /**
     * Sign up the user wih the requested detailes
     */
    const handleSignUp = async () => {
        try {
            await signup(
                emailRef.current.value,
                passwordRef.current.value,
                firstNameRef.current.value);
            const userCredential =
                await login(emailRef.current.value, passwordRef.current.value);
            updateCurrentUser(userCredential.user)
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div>
            <TextField
                inputRef={firstNameRef}
                required
                variant="outlined"
                label="First Name"
            />
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
            <Button variant="contained" onClick={handleSignUp}>Sign Up</Button>
        </div>
    )
};

export default SignUp;
