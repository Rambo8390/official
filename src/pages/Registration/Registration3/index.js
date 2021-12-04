import './style.css';
import {Link} from 'react-router-dom';
import Logo from '../../../components/UI/Logo';
import boy from '../../../Images/AdobeStock_235814474 2.png';
import girl from '../../../Images/AdobeStock_294073029 1.png';

const Registration3 = () => {
  return (
    <div className="container1">
      <Logo />
      <div className="main-container-r3">
        <div className="boy-girl-r3">
          <div className="girl-r3">
            <img className="girl-image-r3" src={girl} alt="girl" />
          </div>
          <div className="boy-r3">
            <img className="boy-image-r3" src={boy} alt="boy" />
          </div>
        </div>

        <div className="info-box">
          <p className="info-header">BASIC INFORMATION</p>
          <div className="bio">
            <p className="label">BIO (MIN 150 WORDS)</p>
            <input
              className="input-box text-r3"
              placeholder="Enter brief information about you"
            ></input>
          </div>
          <div className="likes-dislikes">
            <p className="label">LIKES/DISLIKES</p>
            <input
              className="input-box ld-r3"
              placeholder="Start typing"
            ></input>
          </div>
          <div className="gender-box">
            <div className="input-box">
              <input type="radio" id="male" name="gender" />
              <label for="male">Male</label>
            </div>
            <div className="input-box">
              <input type="radio" id="female" name="gender" />
              <label for="female">Female</label>
            </div>
            <div className="input-box other">
              <input type="radio" id="other" name="gender" />
              <label for="other">Other</label>
            </div>
            <input className="input-box" placeholder="Enter gender" />
          </div>
          <div className="submit-btns">
            <div className="back-btn">
              <p>BACK</p>
            </div>
            <div className="upload-btn">
              <p>FINISH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration3;
