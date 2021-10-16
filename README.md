

https://user-images.githubusercontent.com/66232436/137519267-28e84332-e228-4c56-9ffd-ab4d97986062.mov



# 1. 모달 기능
발생하는 문제
로그인 창 바깥 화면을 클릭하였을 때, 로그인 창이 꺼지도록 하기 위해

로그인 창 바깥 화면에 해당하는 상위 div에 onClick이벤트로 로그인 창을 켜고 끄는  signIn 상태를 false로 변경한다.

그것이 아래 코드인데, 여기서 문제가 발생한다.
```react
{/* onClick으로 signin 상태 변화 */}
            <div className = 'login__body' onClick = {()=>{setSignIn(false)}}>
                {
                    signIn ? (<SignUp />) : (
```


로그인창을 클릭하였을 때, 부모 div의 클릭이벤트가 위임되어 창이 꺼지게 된다.

 

부모 div의 이벤트가 자식에게 위임되지 않도록 이벤트를 끊어주는 장치가 필요하다.

 

그럴 때 필요한 것이 바로 Event.stopPropagation()이다.
```
 {/* onClick으로 signin 상태 변화 */}
            <div className = 'login__body' onClick = {()=>{setSignIn(false)}}>
                {
                    signIn ? (<SignUp onClick = {(e)=>e.stopPropagation()}/>) : (
```
 

아래와 같이 로그인창(모달)역할을 하는 자식 컴퍼넌트에 props로 Event.stopPropagation()을 걸어주었다.


<SignUp /> 컴퍼넌트에 props로 Event.stopPropagation() 메소드를 전달하였다.

Event.stopPropagation()
이벤트 이후의 전파를 막는다.
