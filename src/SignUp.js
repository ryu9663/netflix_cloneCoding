import React from 'react'
import "./css/login.css"

function SignUp( {onClick} ) {
    return (
        <div className = "signUpScreen" onClick = {onClick}>
            <form>
                <h1>로그인</h1>
                <input type = "email" placeholder = "Email" />
                <input type = "password" placeholder = "password" />
                <button>로그인</button>

                <h4>멤버십을 등록하려면 <span>이메일 주소를 입력하세요.</span></h4>
            </form>
        </div>
    )
}

export default SignUp;
