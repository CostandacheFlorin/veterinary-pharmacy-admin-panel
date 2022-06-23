import styled from "styled-components";

export const StyledFormContainer = styled.form`
  height: max-content;
  width: 23rem;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.26);

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15px;
  text-decoration:none;
`;

export const StyledLoginOptions = styled.div`
  display: flex;
  justify-content: space-around;
`;



