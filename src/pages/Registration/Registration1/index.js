import './style.css';
import {Link} from 'react-router-dom';
import Logo from '../../../components/UI/Logo';
import boy from "../../../Images/AdobeStock_214746128 3.png";
import girl from "../../../Images/AdobeStock_253980681 2 1.png";


const Registration1 = () => {
    return (
        <div className='registration-page'>
            <Logo/>
            <div className="register-box">
                <div className='register-box-header'>REGISTER</div>
                <input className="input-box" placeholder="Enter your first name"/>
                <input className="input-box" placeholder="Enter your last name"/>
                <input className="input-box" placeholder="Enter your email address"/>
                <input className="input-box" placeholder="Enter your phone number"/>
                <input className="input-box" placeholder="dd/mm/yy"/>
                <div className="gender-box">
                    <div className="input-box">
                        <input type="radio" id="male" name="gender"/>
                        <label for="male">Male</label>
                    </div>
                    <div className="input-box">
                        <input type="radio" id="female" name="gender"/>
                        <label for="female">Female</label>
                    </div>
                    <div className="input-box other">
                        <input type="radio" id="other" name="gender"/>
                        <label for="other">Other</label>
                    </div>
                    <input className="input-box" placeholder="Enter gender"/>
                </div>
                <input className="input-box" placeholder="Enter your city"/>
                <input className="input-box" placeholder="Enter your state"/>
                <input className="input-box" placeholder="Enter your country"/>
                <input className="input-box" placeholder="Enter a strong password"/>
                <input className="input-box" placeholder="Repeat your password"/>
                <div className="input-box main-sign-up-btn">SIGN UP</div>
                <div className="input-box sign-up-btn">Sign up with Google</div>
                <div className="input-box sign-up-btn">Sign up with Facebook</div>
                <div className="input-box sign-up-btn">Sign up with Twitter</div>
                <div className="already"> Alreay a member? <Link to="/login">Sign in Here</Link> </div>
            </div>
            <div className="boy-image-r"><img src={boy} alt="boy"/></div>
            <div className="girl-image-r"><img src={girl} alt="girl"/></div>
        </div>
    )
}
export default Registration1;