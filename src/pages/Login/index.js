import "./style.css";
import {Link} from 'react-router-dom';
import Logo from "../../components/UI/Logo";
import boy from "../../Images/AdobeStock_3963150651.png";
import girl from "../../Images/AdobeStock_1902388161.png";
import circlepic1 from "../../Images/circlepic1.png";
import circlepic2 from "../../Images/circlepic2.png";
import circlepic3 from "../../Images/circlepic3.png";
import circlepic4 from "../../Images/circlepic4.png";

const Login = () => {
  return (
    <div className="container1">
      <Logo/>
      <div className="main-container">
        <div className="boy-girl">
          <div className="boy">
            <img className="boy-image" src={boy} alt="boy"/>
            <div className="circular-images">
              <img className="circle-pic c1" src={circlepic1} alt="circlepic1"/>
              <img className="circle-pic c2" src={circlepic2} alt="circlepic2"/>
              <img className="circle-pic c3" src={circlepic3} alt="circlepic3"/>
              <img className="circle-pic c4" src={circlepic4} alt="circlepic4"/>
            </div>
          </div>
          <div className="girl">
            <img className="girl-image" src={girl} alt="girl"/>
            <div className="girl-card"></div>
          </div>
        </div>

        <div className="login-box">
          <p className="login-header">LOGIN</p>
          <input className="input-box" placeholder="Enter your email address"/>
          <input className="input-box" placeholder="Enter your password"/>
          <div className="password-processes">
            <div className="remember-me">
              <input type="checkbox" id="remember"/>
              <label for="remember"> Remember me</label>
            </div>
            <Link to="/forgot-password" className="forgot-password">Forgot password?</Link>
          </div>
          <div className="input-box main-sign-in-btn">SIGN IN</div>
          <div className="input-box sign-in-btn"><i class="fab fa-google"></i>&nbsp;&nbsp;Sign in with Google</div>
          <div className="input-box sign-in-btn"><i class="fab fa-facebook"></i>&nbsp;&nbsp;Sign in with Facebook</div>
          <div className="input-box sign-in-btn">Sign in with Twitter</div>
          <div className="already"> Not registered? <Link to="/registration1">Create an Account</Link> </div>
        </div>
      </div>

    </div>
  )
}

export default Login;