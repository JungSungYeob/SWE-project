import React, { useState } from 'react';
import className from "classnames/bind"
import styles from "./Login.module.css"
import InputBox from '../../../modules/inputBox/InputBox';
import { useNavigate } from 'react-router-dom';

const cx = className.bind(styles)

const Login = () => {
  const movePage = useNavigate();
  const handleJoin = () => {
    movePage('/join');
  }

  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');

  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(userID + userPW);
    movePage('/mainpage')
  }


  return (
    <div>
      <div className={cx("container")}>
        <h1>회원 로그인</h1>
        <form className={cx("login-form")} onSubmit={submitLogin}>
          <InputBox boxName="ID" boxType="text" boxPlaceHolder="ID를 입력하세요" value={userID} onChange={(e) => setUserID(e.target.value)} required />
          <InputBox boxName="Password" boxType="password" boxPlaceHolder="패스워드를 입력하세요" value={userPW} onChange={(e) => setUserPW(e.target.value)} required/>
          <div>
            <button type='submit'>Login</button>
            <button onClick={handleJoin}>Join</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;