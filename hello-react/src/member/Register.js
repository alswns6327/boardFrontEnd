import axios from 'axios';
import React, { useState } from 'react';

const Register = () => {

    const [registerValues, setRegisterValues] = useState({
        username : "",
        password : "",
        rePassword : "",
        getPassword : "",
        getPassword : "",
    });

    const handleChange = e => {
        setRegisterValues({
            ...registerValues,
            [e.target.name] : e.target.value,
        });
    }

    const handleRegister = e =>{
        e.preventDefault();
        console.log(registerValues);
        axios.post('/api/member/save', registerValues)
        .then(response => console.log(response.data))
        .catch(error => console.log(error))
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                이메일 : <input placeholder='email' style={{width : '100px'}} name='username' onChange={handleChange} value={registerValues.email}></input> 인증번호 발송 : <button></button>
                <input placeholder='인증번호' style={{width : '50px'}}></input> 확인 : <button></button>
                비번 : <input placeholder='password' style={{width : '100px'}} name='password' value={registerValues.password} onChange={handleChange}></input>
                비번 한 번 더 : <input placeholder='password' style={{width : '100px'}} name='rePassword' value={registerValues.rePassword} onChange={handleChange}></input>
                <button type='submit'>회원가입</button>
            </form>
        </div>
    );
};

export default Register;