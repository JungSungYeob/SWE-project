import React, { useState } from 'react';
import className from "classnames/bind"
import styles from "./Join.module.css"
import InputBox from '../../../modules/inputBox/InputBox';
import { useNavigate } from 'react-router-dom';

const cx = className.bind(styles)

const Join = () => {
  const movePage = useNavigate();


  const [userID, setUserID] = useState('');
  const [userPW, setUserPW] = useState('');
  const [userRePW, setUserRePW] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userNickname, setUserNickname] = useState('');

  const submitJoin = async (e) => {
    e.preventDefault();
    console.log(`${userID} ${userPW} ${userRePW} ${userName} ${userPhone} ${userNickname}`)
    if(userPW != userRePW){
      alert('패스워드가 일치하지 않습니다??');
      return;
    }
  }

  return (
    <div>
      <div className={cx("container")}>
        <h1>회원 가입</h1>
        <form className={cx("login-form")} onSubmit={submitJoin}>
          <div className={cx("container")}>
            <InputBox boxName="ID" boxType="text" boxPlaceHolder="ID를 입력하세요" value={userID} onChange={(e) => setUserID(e.target.value)} required/>
            <InputBox boxName="Password" boxType="password" boxPlaceHolder="패스워드를 입력하세요" value={userPW} onChange={(e) => setUserPW(e.target.value)} required />
            <InputBox boxName="Re. Password" boxType="password" boxPlaceHolder="패스워드를 재입력하세요" value={userRePW} onChange={(e) => setUserRePW(e.target.value)} required/>
          </div>
          <hr style={{ width: "500px" }}></hr>
          <div className={cx("container")}>
            <h2>회원정보</h2>
            <InputBox boxName="이름" boxType="text" boxPlaceHolder="이름을 입력하세요" value={userName} onChange={(e) => setUserName(e.target.value)} required/>
            <InputBox boxName="전화번호" boxType="text" boxPlaceHolder="전화번호를 입력하세요" value={userPhone} onChange={(e) => setUserPhone(e.target.value)} required/>
            <InputBox boxName="별명" boxType="text" boxPlaceHolder="별명을 입력하세요" value={userNickname} onChange={(e) => setUserNickname(e.target.value)} required/>
          </div>
          <div className={cx("container")}>
            <button type='submit'>Join</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Join;