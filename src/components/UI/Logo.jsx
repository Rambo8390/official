import "./css/Logo.css";
import logo from "../../Images/selecter.png";

const Logo = (props) => {
  return (
    <div className="selecter-logo"><img src={logo} alt="logo" style={props.style}/></div>
  );
}

export default Logo;