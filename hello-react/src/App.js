import React, { useCallback, useRef, useState } from 'react';
import FirstGame from './firstGame/FirstGame';
import SecondGame from './secondGame/SecondGame';
import {BrowserRouter, Link, Route, Router, Routes} from 'react-router-dom';
import axios from 'axios';
import Login from './member/Login';
import Register from './member/Register';

const App = () => {
  
  axios.get('/api/test')
  .then(response => console.log(response.data))
  .catch(error => console.log(error))

  return (
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
          <Route path='/login' Component={Login}></Route>
          <Route path='/register' Component={Register}></Route>
        </Routes>
      </div>
  );
};

export default App;