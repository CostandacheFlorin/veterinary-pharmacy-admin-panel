import styled from 'styled-components';

export const StyledInputContainer = styled.div`
display: flex;
flex-direction:column;
font-family: "Myriad", sans-serif;
color: #0cc2f5;
& input {
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "28px"};
    margin-top: 0.2rem;
    border: 0;
    border-bottom: 2px solid #ebebeb;
}

`
