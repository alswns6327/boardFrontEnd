import axios from 'axios';
import React, { useState } from 'react';

const Login = () => {

    const [loginValues, setLoginValues] = useState({
        username : "",
        password : "",
        key : "minjunKey"
    });

    const handleChange = e => {
        setLoginValues({
            ...loginValues,
            [e.target.name] : e.target.value,
        });
    }

    const handleLogin = e =>{
        e.preventDefault();
        e.preventDefault();
        console.log(loginValues);
        axios.post('/api/login/action', loginValues)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                이메일 : <input placeholder='email' style={{'width' : '100px'}} value={loginValues.email} name='username' onChange={handleChange}></input>
                비번 : <input placeholder='password' style={{'width' : '100px'}} value={loginValues.password} name='password' onChange={handleChange}></input>
                <button type='submit'>로그인</button>
            </form>
        </div>
    );
};

export default Login;