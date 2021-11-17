import "./Login.css";
import AdobeStock_1902388161 from "./Images/AdobeStock_1902388161.png";
import {Link} from 'react-router-dom';
import { Typography } from "@material-ui/core";
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

const Login = () => {
  return (
    <div className="container2">
      <div className="selecter"></div>
      <div className="backgroundImage"></div>
      <div className="leftMostBoyImage"></div>
      <div className="rectangle616">
        <p className="typoLogin">LOGIN</p>
        <form>
          <label className="labe11">EMAIL</label>
          <input
            className="input1"
            type="text"
            placeholder="Enter your email address"
          />
          <label className="label2">PASSWORD</label>
          <input
            className="input2"
            type="text"
            placeholder="Enter your password"
          />
        </form>
      </div>
      <div className="rectangleSignin">
        <p className="signin">SIGN IN</p>
      </div>
      <div className="rectangleGoogle">
          <p className='signinGoogle'>Sign in with Google</p>
      </div>
      <div className="rectangleFacebook">
      <p className='signinFacebook'>Sign in with Facebook</p>
      </div>
      <div className="rectangleTwitter">
      <p className='signinTwitter'>Sign in with Twitter</p>
      </div>
      <div className="rightMostBackgroundImage"></div>
      <p className="forgetPassword">Forgot password?</p>
      <img
        src={AdobeStock_1902388161}
        alt="AdobeStock_1902388161"
        className="AdobeStock_1902388161"
      />
      <div className='rectangle6932nd'></div>
      <FormGroup>
               <FormControlLabel className="rectangle514" control={<Checkbox />} label="Remember me" />
          </FormGroup>
        <p className='registered'>Not registered?</p>
        <Link to='/registration1' >
           <Typography className='createRegister'>Create an Account</Typography>
        </Link>
    </div>
  );
};
export default Login;
