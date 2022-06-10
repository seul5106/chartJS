import React, { useState } from 'react';
import LoginImage from "../img/LoginImage.png"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const Login = () => {

    //글로벌 전역 상태값 setUser를 받아옴
    //로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음

    const [account, setAccount] = useState({
        id: "",
        pwd: "",
    });

    //페이지 이동을 위한 히스토리 -->버전업으로 인해 useNavigate로 바뀜
    const navigate = useNavigate();

    const onChangeAccount = (e) => {
        //...을 이용하여 account의 복사본을 만들고
        //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
        //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
        setAccount({
            ...account,
            [e.target.name]: e.target.value,
        });
    };

    const onClickSubmit = () => {
        //상태값 안에 들어있는 id와 pwd를 임의로 지정해서 값비교
        console.log(account)
        if ((account.id === "tester") && (account.pwd === "1234")) {
            Swal.fire({
                title: "Good job!",
                text: "Go to MainPage!",
                icon: "success"
            }).then((result) => {
                //OK버튼을 눌렀을시 아래 페이지로 이동
                navigate("/tabMenu/tab1");
            });
        } else {
            Swal.fire({
                title: "Fail Login!",
                text: "Try right Id & pwd",
                icon: "warning"
            });
        }
    }

    return (
        <div className="container">
            <p>LOGIN</p>
            <div className="flex-container">
                <img className="loginicon" src={LoginImage} alt="loginIcon" />
                <input onChange={onChangeAccount} name="id" placeholder="아이디" />
                <input onChange={onChangeAccount} name="pwd" type="password" placeholder="비밀번호" />
                <div className="btn-group">
                    <button onClick={onClickSubmit}>LogIn</button>
                    <button>SignIn</button>
                </div>
            </div>
        </div>
    );
};

export default Login;