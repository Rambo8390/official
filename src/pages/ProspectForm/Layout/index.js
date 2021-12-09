import Drawer from '../../../components/Drawer';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import GreenButton from '../../../components/UI/GreenButton';
import bronzeGirl from '../../../Images/bronzeGirl.png';
import './style.css';

const ProspectFormLayout = (props) => {
  const {children} = props;
  return (
    <div className="prospectform">
    <img className="bronze-girl" src={bronzeGirl} alt="bronzeGirl"/>
      <Drawer/>
      <div className="main-form-side">
        <div className="top-bar">
          <div className="profile-icon"><PersonRoundedIcon/></div>
          <GreenButton>FINISH</GreenButton>
        </div>
        <h3>Prospect Application</h3>
        <div className="main-form">
            {children}
        </div>
      </div>
    </div>
  );
}

export default ProspectFormLayout;