import styled from 'styled-components';


export const StyledDataSummaryWrapper = styled.div`
width: 100%;
min-height: 100%;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
gap: 5rem;
padding: 2rem 2rem;
background-color: #F9FAFC;

@media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr) );
    padding: 2rem;
}
`