import Logo from '../UI/Logo';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import GavelOutlinedIcon from '@mui/icons-material/GavelOutlined';
import './style.css';

const Drawer = () => {
  return (
    <div className="drawer">
       <Logo/>
       <iframe width="200" height="130" src="https://www.youtube.com/embed/9DGb8thJppw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen modestbranding="1"></iframe>
       <div className="drawer-options">
         <p><VideoCameraFrontOutlinedIcon style={{fontSize: '20px'}}/><span>HOW IT WORKS</span></p>
         <p><InsertChartOutlinedRoundedIcon style={{fontSize: '20px'}}/><span>POOL</span></p>
         <p><DashboardOutlinedIcon style={{fontSize: '20px'}}/><span>BIG BOARD</span></p>
         <p><PeopleAltOutlinedIcon style={{fontSize: '20px'}}/> <span>SOCIAL</span></p>
         <p><MessageOutlinedIcon style={{fontSize: '20px'}}/><span>COMMUNICATE</span></p>
         <p><CloudUploadOutlinedIcon style={{fontSize: '20px'}} /><span>UPLOADS</span></p>
         <p><CallOutlinedIcon style={{fontSize: '20px'}}/><span>CONTACT</span></p>
         <p><GavelOutlinedIcon style={{fontSize: '20px'}}/><span>LEGAL</span></p>
       </div>
    </div>
  );
}

export default Drawer;