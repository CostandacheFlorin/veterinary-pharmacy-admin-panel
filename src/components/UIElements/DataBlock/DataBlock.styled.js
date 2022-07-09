import styled from "styled-components";

export const StyledDataBlockWrapper = styled.div`
  width: 100%;
  height: 8rem;
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 4px 8px;
  border-radius: 2rem;
  & a {
    text-decoration: none;
  }
`;

export const StyledDataBlockTitle = styled.div`
  color: ${(props) => props.color};
`;

export const StyledDataBlockText = styled.div`
  color: ${(props) => props.color};
`;

export const StyledDataBlockLink = styled.div`
  text-align: center;
  color: ${(props) => props.color};
`;
