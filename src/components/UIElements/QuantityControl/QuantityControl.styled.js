import styled from "styled-components";

export const StyledQuantityControlWrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const StyledQuantityButton = styled.button`
  height: 47px;
  line-height: 47px;
  width: 3.5rem;
  background-color: #fff;
  font-size: 22px;
  color: #999;
  border-radius: ${(props) => props.borderradius || "0"};
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const StyledNumberInput = styled.input`
  height: 47px;
  line-height: 47px;
  margin: 0 0rem;
  text-align: center;

  & ::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
