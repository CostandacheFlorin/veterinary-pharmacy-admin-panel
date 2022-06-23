import styled from "styled-components";

export const StyledFooter = styled.footer`
  margin-top: 2rem;
  min-height: 25vh;
  width: 100%;
  background-color: black;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  justify-items: center;
  align-items: center;
  position:relative;
  bottom: 0;


  @media (max-width: 640px) {
    font-size: 0.8rem;
  }
`;

export const StyledFooterColumn1 = styled.div`
  text-align: center;
`;
export const StyledFooterColumn2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledFooterColumn3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Column1About = styled.div`
  padding-top: 1rem;
  font-size: 15px;
`;

export const Column1Logo = styled.div`
  width: 100%;
  font-size: 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

  & img {
    padding-top: 1rem;
    height: 8rem;
    width: 6rem;
  }

  @media (max-width: 640px) {
    width: 100%;
    font-size: 1.3rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const StyledFooterList = styled.div`
  margin: 0.5rem 0;
`;

export const StyledFooterListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 1rem;
  gap: 0.5rem;
  & svg {
    font-size: 2rem;
  }
`;
