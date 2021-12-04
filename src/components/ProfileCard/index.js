/* eslint-disable jsx-a11y/img-redundant-alt */
import "./style.css";
import girl from "../../Images/AdobeStock_253980681 2 1.png";
import people from "../../Images/people-m.png";

const ProfileCard = () => {
 return (
   <div className="profile-card">
     <div className="pc-row1">
      <div className="pc-name">
        <p id="selectr">SELECTR</p>
        <p id="name">JENNY</p>
      </div>
      <div className="pc-phase">
        <div className="contents">
          <p>
            <i class="fas fa-th-large"></i>
            &nbsp;&nbsp;
            <span>Finalizing</span>
          </p>
          <p style={{fontSize: "7px"}}>PHASE</p>
        </div>
      </div>
     </div>
     <div className="pc-row2">
      <div className="pc-image">
        <img id="person-image" src={girl} alt="photo"/>
      </div>
      <div className="pc-data">
        <div className="pc-data1">
          <img id="icon-image" src={people} alt="icon"></img>
          <p>
            <i class="fas fa-user-friends"></i>
            &nbsp;&nbsp;
            <span>22</span>
            <span style={{fontSize: "7px"}}>LEFT</span>
          </p>
        </div>
        <div className="pc-data2">
          <i class="fas fa-quote-right"></i>
          <p style={{fontSize: "10px", colour: "rgba(19, 22, 62, 0.88)"}}>lorem ipsum dolor emit tunda selctr yo yo</p>
          <div className="age-loc">
            <p>SEATLE, USA</p>
            <p>29 YR</p>
          </div>
        </div>
      </div>
     </div>
     <div className="pc-row3">
      <p style={{fontSize: "10px"}}>TOP PARTICIPANTS</p>
      <div className="pc-part-name">
        <p>#1 Jane C.</p>
        <p>#2 Wade W.</p>
        <p>#3 Robert F.</p>
        <p>#4 Jenny W.</p>
      </div>
     </div>
   </div>
 )
} 

export default ProfileCard;