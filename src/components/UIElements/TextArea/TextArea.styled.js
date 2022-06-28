import styled from "styled-components";

export const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Myriad", sans-serif;
  color: #000;
  & textarea {
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "28px"};
    margin-top: 0.2rem;
    border: 0;
    border: 2px solid #ebebeb;
    max-height: auto;
    min-height: 80px;
    resize: vertical;
  }

  & label {
    color: #0cc2f5;
  }
`;
