import React from "react";
import {
  StyledDataBlockWrapper,
  StyledDataBlockTitle,
  StyledDataBlockText,
  StyledDataBlockLink,
} from "./DataBlock.styled";
import Text from "../Typography/Text";
import { Link } from "react-router-dom";

const DataBlock = ({title, text, link, linklabel, backgroundColor, color, ...props}) => {
  return (
    <StyledDataBlockWrapper backgroundColor={backgroundColor}>
      <StyledDataBlockTitle >
        {" "}
        <Text bold={true} type="subtitle" align={"center"} margin="0 1rem" color={color} >
          {title}
        </Text>
      </StyledDataBlockTitle>
      <StyledDataBlockText >
        <Text  bold={true} align={"center"} type="text" margin="0 1rem" size="large" color={color}>
         {text}
        </Text>
      </StyledDataBlockText>
      <StyledDataBlockLink>
        <Link to={`/${link}`}>
        <Text bold="true" type="text" align={"left"} margin="0 2rem" size="medium" color={color}>
          {linklabel}
        </Text>
        </Link>

      </StyledDataBlockLink>
    </StyledDataBlockWrapper>
  );
};

export default DataBlock;
