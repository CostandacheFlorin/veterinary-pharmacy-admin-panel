import styled from 'styled-components';

import { Link } from 'react-router-dom';


export const StyledPaginationList = styled.ul`
display: flex;
list-style: none;
padding-left: 0;
border-radius: 0.25rem;

`


export const StyledPaginationItem = styled.li`
& :hover {
        background-color: #ADD8E6;
    }
`


export const StyledPaginationLink = styled(Link)`
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
    cursor: pointer;
    
`