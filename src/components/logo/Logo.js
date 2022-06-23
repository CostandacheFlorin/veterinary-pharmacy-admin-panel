
import { Link } from "react-router-dom";
import { StyledLogo } from "./Logo.styled";
import LogoPicture from "../../img/logo.png"

const Logo = () => {
   return  <StyledLogo>
        <Link to="/"> <img src={LogoPicture} alt="logo-site" />
        <h2>PAWSE</h2>
        </Link> 
      </StyledLogo>
}






export default Logo;