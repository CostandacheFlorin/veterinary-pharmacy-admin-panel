import TextField from "@mui/material/TextField";

import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Text from "../../components/UIElements/Typography/Text";

// import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react";

// trb facuta functie la form sa adauge la inputuri error
import PageWrapper from "../../components/UIElements/PageWrapper/PageWrapper";
import backgroundImage from "../../img/patternbackground.jpg";
import { StyledLoginOptions, StyledFormContainer } from "../Login/Login.styled";
import { StyledMediumButton } from "../../components/UIElements/Buttons/Button.styled";

const Register = () => {
  const [inputError, setInputError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if (username.trim() === "" || password.trim() === "") {
      setInputError(true);
    }

    console.log({
      email: data.get("username"),
      password: data.get("password"),
    });
  };

  return (
    <PageWrapper background={backgroundImage}>
      <StyledFormContainer onSubmit={handleSubmit}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ fontWeight: "bold" }}
        >
          Inregistrare
        </Typography>

        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Nume de utilizator"
          name="username"
          error={inputError}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Parola"
          type="password"
          id="password"
          error={inputError}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirmati parola"
          type="password"
          id="confirmPassword"
          error={inputError}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="email"
          label="Email"
          type="email"
          id="email"
          error={inputError}
        />

        <StyledMediumButton>Inregistrare</StyledMediumButton>
        <StyledLoginOptions>
          <Link to="/uitare-parola" >
          <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">Ti-ai uitat parola?</Text>
          </Link>

          <Link to="/autentificare" >
          <Text type="text" size="medium" margin="0.5rem 0" color="#1890ff">Am deja un cont.</Text>
          </Link>
        </StyledLoginOptions>
      </StyledFormContainer>
    </PageWrapper>
  );
};

export default Register;
