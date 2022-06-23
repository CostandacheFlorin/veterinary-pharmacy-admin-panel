import React from 'react';
import { StyledButtonIcon } from './ButtonIcon.styled';



const ButtonIcon = (props) => {
    return (
            <StyledButtonIcon>
            {props.children}
            </StyledButtonIcon>
    )
}


export default ButtonIcon
