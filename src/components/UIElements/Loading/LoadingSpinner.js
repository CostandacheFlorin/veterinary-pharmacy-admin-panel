import React from 'react';
import { StyledLoadingArea } from './LoadingSpinner.styled';
import { CircularProgress } from '@mui/material';
import Text from '../Typography/Text';
const LoadingSpinner = (props) => {
    return (
        <StyledLoadingArea>
            <Text bold="true" color={"#fff"} type="subtitle" margin="1rem 0">Asteptati...</Text>
            <CircularProgress size={props.size} />
        </StyledLoadingArea>

    )
}


export default LoadingSpinner;