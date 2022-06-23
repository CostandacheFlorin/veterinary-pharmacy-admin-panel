import styled, { css } from "styled-components";
import typeMapping from "./helpers/typeMapping";
import variants from "./helpers/variants";

const Variant = ({ variant, children, ...props }) => {
  const Component = variants[variant] || variants.p;

  return <Component {...props}>{children}</Component>;
};

const getTypeStyle = (type, size) => css`
  font-size: ${typeMapping[type]?.font[size]}px;
`;

export const StyledText = styled(Variant)`
  padding: 0;

  margin: ${(props) => props.margin || "0"};

  font-weight: normal;
  line-height: 1;
  font-family: "Myriad", sans-serif;
  color: ${(props) => props.color || "#000"};
  ${({ type, size }) => getTypeStyle(type, size)};

  text-align: ${(props) => props.align};


  &:hover {
    color: ${props => props.hovercolor};
  }
  
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
