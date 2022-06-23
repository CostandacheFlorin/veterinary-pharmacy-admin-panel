import React from "react";
import { StyledInputContainer } from "./TextArea.styled";

const TextArea = ({
  id,
  label,
  name,
  rows,
  col,
  placeholder,
  value,
  width,
  height,
  onChangeHandler,
}) => {
  return (
    <StyledInputContainer width={width} height={height}>
      <label htmlFor={id}>{label}</label>
      <textarea
        height="30px"
        rows={rows}
        cols={col}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
      >
        
      </textarea>
    </StyledInputContainer>
  );
};

export default TextArea;
