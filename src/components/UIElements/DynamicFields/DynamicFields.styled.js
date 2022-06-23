import styled from "styled-components";

export const StyledInputsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin-left: 6rem;
  
  margin-bottom: 1rem;
  

  & input {
    border: 0;
    border-bottom: 2px solid #ebebeb;
  }
  
  
`;

export const StyledInputsRemoveRow = styled.div`
height: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;
`;

export const StyledInputsAddRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
export const StyledWrapper = styled.div``;

export const StyledAddButton = styled.button`
  color: #06d43c;
  background-color: transparent;
  height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid #06d43c;
  font-weight: bold;
  font-family: "Myriad", sans-serif;
  cursor: pointer;
`;

export const StyledRemoveButton = styled.button`
  color: #d32f2f;
  background-color: transparent;
  height: 2rem;
  border-radius: 0.5rem;
  border: 2px solid #d32f2f;
  font-weight: bold;
  font-family: "Myriad", sans-serif;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
