import React from "react";
import typeMapping, { SIZE } from "./helpers/typeMapping";
import variants from "./helpers/variants";
import { StyledText } from './Text.styled';

const Text = ({
  stronger,
  bold,
  type,
  size,
  variant,
  children,
  style,
  className,
  margin,
  align,
  color,
  hovercolor
}) => {
  return (
    <StyledText
      type={type}
      size={size}
      variant={variant}
      style={style}
      className={className}
      stronger={stronger}
      bold={bold}
      margin={margin}
      align={align}
      color={color}
      hovercolor={hovercolor}
    >
      {children}
    </StyledText>
  );
};

Text.defaultProps = {
  type: typeMapping.text,
  size: SIZE.medium,
  variant: variants.p
};

export default Text;
