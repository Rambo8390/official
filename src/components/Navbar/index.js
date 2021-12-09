import "./style.css";
import logo from "../../Images/selecter.png";
import {Link} from 'react-router-dom';
import BlueButton from "../UI/BlueButton";

const Navbar = () => {
  return(
    <div className="navbar">
        <Link to="/"><img src={logo} alt="logo"/></Link>
        <Link to="/about"><p>ABOUT</p></Link>
        <Link to="/team"><p>OUR TEAM</p></Link>
        <Link to="/faq"><p>FAQS</p></Link>
        <Link to="/app"><p>THE APP</p></Link>
        <Link to="/contact"><p>CONTACT</p></Link>
        <Link to="/login"><BlueButton text="LOGIN"/></Link>
    </div>
  )
}

export default Navbar;