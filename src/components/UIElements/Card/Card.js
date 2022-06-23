import React from 'react';


import { StyledCard } from './Card.styled';

const Card = props => {
  return (
    <StyledCard  style={props.style}>
      {props.children}
    </StyledCard>
  );
};

export default Card;
