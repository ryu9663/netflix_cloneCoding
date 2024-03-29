import React, { useState } from "react";
import "./css/login.css";
import SignUp from "./SignUp";
function Login() {
  const [signIn, setSignIn] = useState(false);
  console.log(signIn);
  const handleLogin = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="login">
      <div className="login__header">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          className="login__logo"
          alt="logo"
        />

        <button className="login__button">로그인</button>
      </div>

      <div
        className={
          signIn ? "login__modalOut login__gradient" : "login__gradient"
        }
        onClick={(e) => {
          setSignIn(false);
          //   console.log(e.target);
        }}
      >
        {signIn ? (
          <SignUp />
        ) : (
          <div className="login__body">
            <h1>영화, TV 프로그램을 무제한으로.</h1>
            <h2>
              다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </h2>
            <h3>
              시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하시려면 이메일
              주소를 입력하세요.
            </h3>

            <form className="login__form" onSubmit={handleLogin}>
              <input type="text" placeholder="Email Address" />
              <button>시작하기</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
