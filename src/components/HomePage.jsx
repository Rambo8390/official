import "./HomePage.css";
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { Link } from "react-router-dom";
import FormControlLabel from '@mui/material/FormControlLabel';
import selecter from "./Images/selecter.png";
import LogowTexture1 from "./Images/Logo wTexture 1.png";
import ellipse85 from "./Images/Ellipse 85.png";
import ellipse86 from "./Images/Ellipse 86.svg";
import ellipse87 from "./Images/Ellipse 87.png";
import ellipse95 from "./Images/Ellipse 95.png";
import VectorHeart from "./Images/VectorHeart.png";
import AdobeStock_214746128 from "./Images/AdobeStock_214746128 3.png";
import AdobeStock_269221208 from "./Images/AdobeStock_269221208 1.png";
import AdobeStock_2479749531 from './Images/AdobeStock_2479749531.png';
import AdobeStock_21474612813 from './Images/AdobeStock_214746128 (1)3.png';
//import adobeStock from "./Images/AdobeStock.svg";
import vectorRectangle741 from "./Images/VectorRectangle741.png";
import vector740 from "./Images/vector740.png";
import vector547 from "./Images/vector547.png";
import vectorAge from "./Images/vectorAge.png";
import vectorRelationship from "./Images/vectorRelationship.png";
import vectorGlobe from './Images/vectorGlobe.png';
import vectorState from './Images/vectorState.png';
import vectorCity from './Images/vectorCity.png';
import kidsLogo from './Images/kidsLogo.png';
import vectorFacebook from './Images/vectorFacebook.png';
import vectorTwitter from './Images/vectorTwitter.png';
import vectorInstagram  from './Images/vectorInstagram.png';
import vectorTriplet1 from './Images/2ndVectorTriplet1.png';
import vectorTriplet2 from './Images/2ndVectorTriplet2.png';
import vectorTriangle from './Images/vectorTriangle.png';
import vectorDil from './Images/vectorDil.png';
import vectorMessage from "./Images/vectorMessage.png";
import vectorEmoji from './Images/vectorEmoji.png';
import vectorFist from './Images/vectorFist.png';
import vectorTemple from './Images/vectorTemple.png';
import AdobeStock_1445627161 from './Images/AdobeStock_1445627161.png';
import vectorEllipse9555 from './Images/vectorEllipse9555.png';
import vectorStar from './Images/vectorStar.png';
import vectorPause from './Images/vectorPause.png';
import vectorArrow from './Images/vectorArrow.png';
import Ellipse137 from './Images/Ellipse137.png';
import Ellipse134 from './Images/Ellipse134.png';
import Ellipse139 from './Images/Ellipse139.png';
import Ellipse142 from './Images/Ellipse142.png';
import Ellipse144 from './Images/Ellipse144.png';
import Ellipse140 from './Images/Ellipse140.png';
import vectorLed from './Images/vectorLed.png';
import vectorLock from './Images/vectorLock.png';
import AdobeStock_3453918431 from './Images/AdobeStock_3453918431.png';
import vector13 from './Images/Vector13.png';
import vector14 from './Images/vector14.png';
import Mask from './Images/Mask.png';

//import vector from "./Images/Vector.svg";
//import vector2 from "./Images/Vector.png";
import AdobeStock_253980681 from "./Images/AdobeStock_253980681 2 1.png";
import { Typography } from "@material-ui/core";

const HomePage = () => {
  return (
    <div className="container">
      <div className='topHome'>
        <img className="selecter" src={selecter} alt="selecter" />
        <Typography className="about">ABOUT</Typography>
        <div className='line43'></div>
        <Typography className="ourTeam">OUR TEAM</Typography>
        <Typography className="faqs">FAQS</Typography>
        <Typography className="app">THE APP</Typography>
        <Typography className="contact">CONTACT</Typography>
        <Typography className="text1">MATCH YOUR</Typography>
        <div className='line44'></div>
        <Typography className="text2">Lifestyle</Typography>
        <Typography className="text3">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        </Typography>
        <div className="AdobeStock_253980681">
          <img src={AdobeStock_253980681} alt="AdobeStock_253980681" />
        </div>
        <div>
          <svg className="ellipse41"></svg>
          <svg className="ellipse43"></svg>
          <Typography className="hash">#</Typography>
          <Typography className="number">03</Typography>
          <Typography className="pool">POOL</Typography>
        </div>
        <div>
          <div>
            <svg className="rectangle741"></svg>
            <img
              className="VectorRectangle741"
              src={vectorRectangle741}
              alt="rectangle25"
            />
            <Typography className="height">HEIGHT </Typography>
            <Typography className="numberFirst">5 </Typography>
            <Typography className="feet">ft </Typography>
            <Typography className="numberSecond">6 </Typography>
            <Typography className="inch">in </Typography>
          </div>
          <div>
            <svg className="rectangle740"></svg>
            <img className="vector740" src={vector740} alt="vector740" />
            <Typography className="sex">sex</Typography>
            <Typography className="sexType">female</Typography>
          </div>
        </div>
        <div>
          
          <div className="rectangle35"></div>
          <Typography className="joinUs">JOIN US</Typography>
         
        </div>
      </div>
      <div>
        <Link to='/login'>
          <div className='rectangle25'></div>
          <Typography className="login">LOGIN</Typography>
        </Link>
        <div>
          <svg className="rectangle547"></svg>
          <img className="vector547" src={vector547} alt="vector547" />
          <Typography className="born">born</Typography>
          <Typography className="date">5 Dec 1990</Typography>
          <img className="vectorAge" src={vectorAge} alt="vectorAge" />
          <Typography className="age">age</Typography>
          <Typography className="ageYear">29 yr</Typography>
          <img
            className="vectorRelationship"
            src={vectorRelationship}
            alt="vectorRelationship"
          />
          <Typography className="relationship">relationship</Typography>
          <Typography className="single">single</Typography>
        </div>
        <div className="ellipse85">
          <img src={ellipse85} alt="ellipse85" />
        </div>
        <div>
        <img className='vectorGlobe' src={vectorGlobe} alt='vectorGlobe' />
        <Typography className='country'>country</Typography>
        <Typography className='countryName'>usa</Typography>
        <img className='vectorState' src={vectorState} alt='vectorState' />
        <Typography className='state'>state</Typography>
        <Typography className='stateName'>california</Typography>
        </div>
        <div>
          <img className='vectorCity' src={vectorCity} alt='vectorCity' />
          <Typography className='city'>city</Typography>
          <Typography className='cityName'>san diego</Typography>
        </div>
        <div className='rectangle742'>
          <img className='kidsLogo' src={kidsLogo} alt='kidsLogo' />
          <Typography className='kids'>kids</Typography>
          <Typography className='kidsNumber'>none</Typography>
        </div>
        <div>
          <Typography className='following'>FOLLOW US ON</Typography>
          <div className='line42'>
          </div>
          <img className='vectorFacebook' src={vectorFacebook} alt='vectorFacebook' />
          <img className='vectorTwitter' src={vectorTwitter} alt='vectotTwitter' />
          <img className='vectorInstagram' src = {vectorInstagram} alt='vectorInstagram' />
        </div>
      </div>
      <div className="ellipse87">
        <img src={ellipse87} alt="ellipse87" />
      </div>
        <img src={ellipse86} alt="Ellipse" className="ellipse86" />
        <div className='rectangle743'>

        </div>
        <div className='passion'>
           <Typography>passion</Typography>
        </div>
      <div>
        <img src={ellipse95} alt="Ellipse" className="ellipse95" />
        <img src={vectorTriplet1} alt="2ndVectorTriplet1" className='vectorTriplet1' />
        <img src={vectorTriplet2} alt="2ndVectorTriplet2" className='vectorTriplet2' />
        <img src={vectorTriplet2} alt="2ndVectorTriplet3" className='vectorTriplet3' />
      </div>

      <img className="VectorHeart" src={VectorHeart} alt="Heart" />

      <div>
        <div>
          <img
            className="AdobeStock_214746128"
            src={AdobeStock_214746128}
            alt="AdobeStock_214746128 3"
          />
       
          <div className="rectangle69332">

          </div>
          <img
            src={AdobeStock_269221208}
            alt="AdobeStock_269221208 1"
            className="AdobeStock_269221208"
          />
          <div className="rectangle737">

          </div>
          <div className='background434599178'>

          </div>
        </div>
        <div>
          <Typography className="typoso">
            So you want to date someone with
          </Typography>
          <Typography className="typopass">Passion and Drive?</Typography>
          <Typography className="typocopy">
            Copy Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod laboris nisi ut tempor incididunt ut labore et laboris nisi
            ut dolore magna aliqua.
          </Typography>
          <Typography className="typoduiss">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Typography>
          <div className="rectangle745">
          </div>
          <Typography className="typohow">how we do it?</Typography>
        </div>
      </div>
      <div className='line492'>
         
         </div>
      <div>
        <div>
          <Typography className="typolorem">
            LOREM IPSUM DOLOR SIT AMET
          </Typography>
          <Typography className="typoEnim">Enim edin Minim</Typography>
          <Typography className="typoipsum">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod laboris nisi ut tempor incididunt ut labore et laboris nisi
            ut dolore magna aliqua.
          </Typography>
          <Typography className="typoduis">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </Typography>
        
          <button className='joinTodayWrapper'>
              JOIN TODAY
          </button>
        </div>
      </div>
      <div className="AdobeStock_271631079">
      </div>
      <div className='AdobeStock_247974953'>

      </div>
      <div className='AdobeStock_4353769241'>

      </div>
      <div className='AdobeStock_4445757861'>

      </div>
      <img src={vectorPause} alt='vectorPause' className='vectorPause'/>
      <div>
        <img
          className="LogowTexture1"
          src={LogowTexture1}
          alt="LogowTexture1"
        />
      </div>
      <div className='rectangle749'>
      </div>
      <div className='background'>

      </div>
      <Typography className='insideRectangle749'>Lorem ipsum dolor sit amet</Typography>
      <div className='line50'>
        </div>   
        <div className='line49'>
        </div>  
        <Typography className='insideRectangle749f'>Somnis iste natus</Typography>   
        <Typography className='typoAccusantium'>Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Typography>
        <div className='rectangle693'>
          <div className='ellipse955'>
            <img src={vectorTriangle} alt="vectorTriangle" className='vectorTriangle' />
          </div>
          <div className='typoTortor'>Tortor Nullam <br /> Fringilla</div>
            <Typography className='typosedut'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore.</Typography>
        </div>
        <div className='rectangle694'>
          <div className='ellipse96'>
            <img src={vectorDil} alt="vectorDil" className='vectorDil' />
          </div>
          <Typography className='typoVectorDil'>Parturient Lorem</Typography>
          <Typography className='typoDil2'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
        </div>
        <div className='rectangle695'>
          <div className='ellipse97'>
            <img src={vectorMessage} alt="vectorMessage" className='vectorMessage' />
            <Typography className='typoDil3'>Magna Malesuada</Typography>
            <Typography className='typoDil4'>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
velit, sed quia non numquam eius modi tempora incidunt ut labore et</Typography>
          </div>
        </div>
        <div className='rectangle696'>
          <div className='ellipse98'>
            <img src={vectorEmoji} alt="vectorEmoji" className='vectorEmoji' />
          </div>
          <div className='typoFringilla'>Fringilla Fu <br /> sce Elit</div>
          <Typography className='typoDolore'>Dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
exercitationem ullam corporis suscipit laboriosam, nisi ut.</Typography>
        </div>
        <div className='rectangle697'>
        <div className='ellipse99'>
           <img src={vectorFist} alt="vectorFist" className='vectorFist' />
          </div>
          <Typography className='typoVenenatis'>Venenatis Mollis </Typography>
          <Typography className='typoAliquid'>Aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
voluptate velit esse quam nihil molestiae consequatur.</Typography>
        </div>
        <div className='rectangle698'>
          <div className='ellipse100'>
            <img src={vectorTemple} alt="vectorTemple" className='vectorTemple' />
          </div>
          <Typography className='typoTemple'>Lorem Ornare</Typography>
          <Typography className='typoAtvero'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</Typography>
        </div>
        <button className='rectangle746'>
          LEARN MORE
        </button>


        <div>
        <div>
        <div className='AdobeStock_1445627162'>
        
        </div>
        <img src={AdobeStock_1445627161} alt="AdobeStock_1445627161" className='AdobeStock_1445627161' />
        <div className='rectangle6933'>
          <div className='ellipse9555'>
            <img src={vectorEllipse9555} alt="vectorEllipse9555" className='vectorEllipse9555' />
          </div>
          <Typography className='finished'>finished</Typography>
          <Typography className='strugles'>strugles</Typography>
          <Typography className='wade'>wade waren</Typography>
        </div>
        <div className='ellipse999'>
          <Typography className='hashTag'>#1</Typography>
        </div>
        <div className='rectangle7372'>
          <Typography className='rating'>
            Rating
          </Typography>
          <Typography className='digits'>4.5</Typography>
          <img src={vectorStar} alt="vectorStar" className='vectorStar' /> 
          <Typography className='position'>position</Typography>
          <Typography className='typoTwo'>2</Typography>
          <img src={vectorArrow} alt='vectorArrow' className='vectorArrow'/>
        </div>
        </div>
        <div>
        <Typography className='typoQuisNos'>
        quis nostrud exercit
        </Typography>
        <div className='line493'>

        </div>
        <Typography className='typoCulpa'>
        culpa qui officia
        </Typography>
        <Typography className='typography'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut  tempor incididunt
        </Typography>
        <Typography className='typography2'>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaec cupidatat non proident, sunt in culpa qui officia.
        </Typography>
        <button className='btn'>
        JOIN TODAY
        </button>
        </div>
        </div>
        <div className='rectangle750'>
        </div>
        <Typography className='typography3'>Lorem ipsum dolor sit amet</Typography>
        <div className='line502'>

        </div>
        <div className='line5022'>

        </div>
        <Typography className='typography4'>Somnis iste natus</Typography>
        <Typography className='typography5'>Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</Typography>
        <img src={AdobeStock_2479749531} alt="AdobeStock_2479749531" className='AdobeStock_2479749531' />
        <img src={AdobeStock_21474612813} alt="AdobeStock_21474612813" className='AdobeStock_21474612813' />
        <img src={Ellipse137} alt="Ellipse137" className='ellipse137' />
        <img src={Ellipse134} alt="Ellipse134" className='Ellipse134' />
        <img src={Ellipse139} alt="Ellipse139" className='Ellipse139'/>
        <img src={Ellipse142} alt="Ellipse142" className='Ellipse142' />
        <img src={Ellipse144} alt="Ellipse144" className='Ellipse144' />
        <img src={Ellipse140} alt="Ellipse140" className='Ellipse140' />
        <div className='typography6'>quis nostrud exercit</div>
        <div className='line499'></div>
        <Typography className='typography7'>culpa qui officia</Typography>
        <Typography className='typography8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod laboris nisi ut  tempor incididunt</Typography>
        <button className='btnJoin'>JOIN TODAY</button>
        <div className='rectangle701'>
          <div className='ellipse95555'>
            <img src={vectorLed} alt="vectorLed" className='vectorLed' />
          </div>
          <Typography className='typography9'>Nemo enim ipsam voluptatem</Typography>
          <Typography className='typography10'>Sed ut perspiciatis, unde omnis iste natus eor sit voluptatem accusantium mque.</Typography>
        </div>
        <div className='rectangle703'>
          <div className='ellipseInRectangle703'></div>
          <img src={vectorLock} alt="vectorLock" className='vectorLock' />
          <Typography className='typography11'>Nam libero tempore soluta</Typography>
          <Typography className='typography12'>At vero eos et accusamus et iusto odio simos ducimus qui ispusm loram blanditiis.</Typography>
        </div>
        <div className='rectangle752'>

        </div>
        <Typography className='typography13'>We'd love to hear from you</Typography>
        <div className='typography14'>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor <br /> repellendus.</div>
        <img src={AdobeStock_3453918431} alt="AdobeStock_3453918431" className='AdobeStock_3453918431' />
        <div className='rectangle649'></div>
        <div className='polygon2'></div>
        <div className='rectangle738'>
          <img className='vector13' src={vector13} alt='vector13' />
          <img src={vector14} alt="vector14" className='vector14' />
        </div>
        <form>
          <label className='typography15'>Hi, my name is</label>
          <TextField className="standard-basic" label="Type Here" variant="standard" />
          <label className="typography16">and I’m looking for</label>
          <TextField className="standard-basic2" label="Select Dropdown" variant="standard" />
          <label className="typography17">
          Get in touch 
          <Typography className='typography18'>with me at</Typography>
          </label>
          <TextField className='standard-basic3' label='Your Email Id Here' variant='standard' />
        </form>
        <Typography className='typography19'>,Thank You</Typography>
        <FormGroup>
               <FormControlLabel  className='formGroup' control={<Checkbox />} label="I here by accept all terms and conditions." />
          </FormGroup>
          <button className='btnSubmit'>SUBMIT</button>
        <div className='ellipse108'>

        </div>
        <img src={selecter} alt="selecter" className='headerSelecter' />
        <Typography className='headerTypo'>Sed ut perspiciatis, unde omnis iste tus error sit tem accusantium nam libero tempore cum soluta.</Typography>
        <div className='rectangle33'>
          <div className='rectangleIn33'></div>
          GOOGLE PLAY
        </div>
        <div className='rectangle32'>
          APP STORE
        </div>
        
        <Typography className='navigation'>NAVIGATION</Typography>
        <Typography className='headerAbout'>About</Typography>
        <Typography className='headerOur'>Our Team</Typography>
        <Typography className='headerFaq'>FAQs</Typography>
        <Typography className='headerApp'>The App</Typography>
        <Typography className='headerContact'>Contact</Typography>
        <Typography className='legaltypo'>LEGAL</Typography>
        <Typography className='headerPrivacy'>Privacy</Typography>
        <Typography className='headerCookie'>Cookie Policy</Typography>
        <Typography className='headerSecurity'>Security</Typography>
        <Typography className='headerTerms'>Terms</Typography>
        <Typography className='typocontact'>CONTACT US</Typography>
        <Typography className='typoAddress'>385 Noah Place Suite 878</Typography>
        <div>
          <img src={Mask} alt="Mask" className='Mask' />
          <Typography className='typoPhone'>877-255-7945</Typography>
        </div>
        <div className='union'>
        </div>
        <div className='unionShape'>

        </div>
        <div className='path4'></div>
        <div className='path42'></div>
        <Typography className='typoEmailid'>info@form.com</Typography>
        <div className='playStore'></div>
    </div>
  );
};
export default HomePage;
