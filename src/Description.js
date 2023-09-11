import React from "react";

const Description = ({ handleLogin }) => {
  return (
    <>
      <h1>영화, TV 프로그램을 무제한으로.</h1>
      <h2>다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.</h2>
      <h3>
        시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하시려면 이메일 주소를
        입력하세요.
      </h3>

      <form className="login__form" onSubmit={handleLogin}>
        <input type="text" placeholder="Email Address" />
        <button
        // onClick={()=>setSignIn(true)}
        >
          시작하기
        </button>
      </form>
    </>
  );
};

export default Description;
