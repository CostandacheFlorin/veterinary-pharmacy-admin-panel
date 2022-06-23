import styled from "styled-components";

export const PageWrapper = styled.section`
  width: 100%;
  min-height: 89vh;

  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  filter: blur(2px);
  z-index: -1;
  background-size: cover;
`;
