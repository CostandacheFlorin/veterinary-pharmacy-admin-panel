import HomeIcon from "@mui/icons-material/Home";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Text from "../../UIElements/Typography/Text";
import Logo from "../../../img/logo.png";
import Image from "../../UIElements/Image/Image";
import {
  StyledFooter,
  StyledFooterColumn1,
  StyledFooterColumn2,
  StyledFooterColumn3,
  Column1Logo,
  Column1About,
  StyledFooterListItem,
  StyledFooterList,
} from "./Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterColumn1>
        <Column1Logo>
          <Image image={Logo} alt="logo-site" />
          <Text variant="h3" type="Title" color="#fff">
            PAWSE
          </Text>
        </Column1Logo>
        <Column1About>
          Farmacia veterinara PAWSE se ocupa cu distribuirea de medicamente
          destinate animalelor. Aceasta farmacie a luat nastere in 2005, in
          prezent existand peste 12 locatii in toata tara.
        </Column1About>
      </StyledFooterColumn1>
      <StyledFooterColumn2>
        <Text variant="h3" type="subtitle" margin="1rem" color="#fff">
          Link-uri folositoare
        </Text>
        <StyledFooterList>
          <StyledFooterListItem> Produse </StyledFooterListItem>
          <StyledFooterListItem>Cosul de cumparaturi</StyledFooterListItem>
          <StyledFooterListItem> Pagina principala</StyledFooterListItem>
          <StyledFooterListItem>Setari profil</StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterColumn2>
      <StyledFooterColumn3>
        <Text variant="h3" type="subtitle" margin="1rem" color="#fff">
          Contact
        </Text>
        <StyledFooterList>
          <StyledFooterListItem>
            <HomeIcon /> Str. Științei nr. 2
          </StyledFooterListItem>
          <StyledFooterListItem>
            <EmailIcon /> contact@pawse.columns
          </StyledFooterListItem>
          <StyledFooterListItem>
            <PhoneInTalkIcon /> contact@pawse.com
          </StyledFooterListItem>
        </StyledFooterList>
      </StyledFooterColumn3>
    </StyledFooter>
  );
};

export default Footer;
