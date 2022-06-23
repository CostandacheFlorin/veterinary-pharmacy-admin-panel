import styled from "styled-components";

export const StyledGreenButton = styled.button`
  background-image: linear-gradient(-180deg, #00d775, #00bd68);
  width: 80%;

  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: Inter, -apple-system, system-ui, Roboto, "Helvetica Neue", Arial,
    sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;

  z-index: 1;
  border: 0;

  &:hover {
    background: #00bd68;
  }
`;

export const StyledButtonMaxWidthMobile = styled(StyledGreenButton)`
  @media (max-width: 640px) {
    width: 100%;
  }
`;

export const StyledMediumButton = styled.button`
  margin: 1rem 0;
  width: 10rem;
  margin-left: auto;
  margin-right: auto;
  margin: ${(props) => props.margin || "0 auto"};
  background-image: linear-gradient(-180deg, #00d775, #00bd68);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Myriad", sans-serif;
  height: 44px;
  line-height: 44px;
  outline: 0;
  overflow: hidden;
  padding: 0 20px;
  pointer-events: auto;
  position: relative;
  text-align: center;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
  vertical-align: top;
  white-space: nowrap;

  z-index: 1;
  border: 0;

  &:hover {
    background: #00bd68;
  }
`;

export const StyledIconButton = styled(StyledMediumButton)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: ${(props) => props.weight || "400"};
  padding: ${(props) => props.padding || "0px"};

  & svg {
    color: ${(props) => props.color || "#fff"};
    font-size: ${(props) => props.fontsize || "30px"};
    border: 0;
  }
`;

export const RoundedCornersButton = styled(StyledMediumButton)`
  border-radius: 20px;
`;
