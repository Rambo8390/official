import './style.css';
import {Link} from 'react-router-dom';
import Logo from '../../../components/UI/Logo';
import boy from "../../../Images/AdobeStock_396315065 1.png";
import girl from "../../../Images/AdobeStock_415727898 2.png";

const Registration2 = () => {
  return (
    <div className="container1">
      <Logo/>
      <div className="main-container-r2">
        <div className="boy-girl-r2">
          <div className="girl-r2">
            <img className="girl-image-r2" src={girl} alt="girl"/>
          </div>
          <div className="boy-r2">
            <img className="boy-image-r2" src={boy} alt="boy"/>
          </div>
        </div>

        <div className="upload-box">
          <p className="skip">SKIP</p>
          <p className="upload-header">UPLOAD PROFILE PICTURE</p>
          <div className="uploaded-image"><img src="" alt=""/></div>
          <div className="uploaded-image-name"><p>profile_01.jpg</p></div>
          <div className="upload-btn"><p>UPLOAD</p></div>
          <div className="back-btn"><p>BACK</p></div>
        </div>
      </div>

    </div>
  )
}

export default Registration2;