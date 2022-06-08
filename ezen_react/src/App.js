import "./css/style.min.css"
import LoginImage from "./img/LoginImage.png"


function App() {
  return (
    <div className="container">
      <p>로그인</p>

      <div className="flex-container">
        <img className="loginicon" src={LoginImage} alt="loginIcon" />
        <input name="id" placeholder="아이디" />
        <input name="pw" type="password" placeholder="비밀번호" />
        <div className="btn-group">
          <button>로그인</button>
          <button>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default App;
