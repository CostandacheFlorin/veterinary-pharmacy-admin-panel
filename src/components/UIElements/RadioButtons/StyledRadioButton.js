import React from "react";

import { StyledRButton } from "./StyledRadioButton.styled";

const StyledRadioButton = ({id, name, value, title}) => {
  return (
    <StyledRButton>

    
      <input type="radio" id={id} name={name} value={value} />
      <label for={id}>{title}</label>
      </StyledRButton>
  );
};

export default StyledRadioButton;
