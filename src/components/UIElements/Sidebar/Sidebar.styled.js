import styled from "styled-components";
import { Link } from "react-router-dom";
export const StyledSidebarWrapper = styled.div`
    height: 100%;
  width: 16rem;
  background-color: rgb(17, 24, 39);
  color: #fff;
  padding-top: 2rem;

  & a {
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
  }
`;

export const StyledSidebarItem = styled(Link)`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
  margin-left: 1rem;
  font-family: "Myriad", sans-serif;


  &:hover {
    background-color: #013b7a;
  }
`;


export const MinimizeSidebarButton = styled.div`
text-align: center;
`

export const MaximizeSidebarButton = styled.div`

 & svg {
    font-size: 3rem;
 }
`

export const SidebarWrapper = styled.div`
  position: fixed;
  height: 100%;
  z-index: 10;

`