import React from "react";
import {
  StyledDataBlockWrapper,
  StyledDataBlockTitle,
  StyledDataBlockText,
  StyledDataBlockLink,
} from "./DataBlock.styled";
import Text from "../Typography/Text";
import { Link } from "react-router-dom";

const DataBlock = ({title, text, link, linklabel, ...props}) => {
  return (
    <StyledDataBlockWrapper>
      <StyledDataBlockTitle>
        {" "}
        <Text type="subtitle" margin="0 1rem" color="#0cc2f5" bold={true}>
          {title}
        </Text>
      </StyledDataBlockTitle>
      <StyledDataBlockText>
        <Text type="text" margin="0 1rem" size="large" color="#454545">
         {text}
        </Text>
      </StyledDataBlockText>
      <StyledDataBlockLink>
        <Link to={`/${link}`}>
        <Text type="text" size="medium" color="#454545">
          {linklabel}
        </Text>
        </Link>

      </StyledDataBlockLink>
    </StyledDataBlockWrapper>
  );
};

export default DataBlock;
