import styled from "styled-components";

export const ChooseUsReason = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
  margin-right: 1rem;
  margin-left: 1rem;
`;

export const ChooseUsText = styled.p`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1.1em;
`;

export const ChooseUsHeader = styled.h4`
  font-family: "Akshar", sans-serif;
  font-size: 1.5em;
`;

export const ChooseUsIcon = styled.div`
  padding-top: 1rem;
  padding-right: 0.5rem;
  top: 0;
  left: 0;
  & svg {
    width: 5rem;
    height: 5rem;
    fill: greenyellow;
  }
`;

export const ChooseUsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
