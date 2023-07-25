import React, { useCallback, useContext, useRef, useState } from 'react';
import FirstGame from './firstGame/FirstGame';
import SecondGame from './secondGame/SecondGame';
import {BrowserRouter, Link, Navigate, Route, Router, Routes} from 'react-router-dom';
import axios from 'axios';
import Login from './member/Login';
import Register from './member/Register';
import AuthContext from 'auth/auth-context';
import Layout from 'components/layout/Layout';
import HomePage from 'pages/HomePage';
import CreateAccountPage from 'pages/CreateAccountPage';
import AuthPage from 'pages/AuthPage';
import ProfilePage from 'pages/ProfilePage';


const App = () => {
  const authCtx = useContext(AuthContext);
  axios.get('/api/test')
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

  return (
    <div>
      <div>
        <div>1인용 게임</div>
        <Link to="/firstGame">노노그램</Link><div style={{display : 'inline-block', width : '10px', height : '10px'}}></div>
        <Link to="/secondGame">스도쿠</Link><div style={{display : 'inline-block', width : '10px', height : '10px'}}></div>
        <Link to="/login">로그인</Link><div style={{display : 'inline-block', width : '10px', height : '10px'}}></div>
        <Link to="/register">회원가입</Link>
        <br/><br/>
        <Routes>
          <Route path='/firstGame' Component={FirstGame}></Route>
          <Route path='/secondGame' Component={SecondGame}></Route>
          <Route path='/login42' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
        </Routes>
      </div>
      <div>ddd</div>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup/" element={authCtx.isLoggedIn ? <Navigate to='/' /> : <CreateAccountPage />} />
          <Route path="/login/*" 
            element={authCtx.isLoggedIn ? <Navigate to='/' /> : <AuthPage />}
          />
          <Route path="/profile/" element={!authCtx.isLoggedIn ? <Navigate to='/' /> : <ProfilePage />} />
        </Routes>
      </Layout>
    </div>
      
  );
};

export default App;