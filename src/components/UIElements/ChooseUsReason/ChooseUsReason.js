


import { ChooseUsHeader, ChooseUsText, ChooseUsTextContainer, ChooseUsReason as ChooseUsReasonContainer, ChooseUsIcon } from './ChooseUsReason.styled';

const ChooseUsReason = (props) => {
return (
    
    <ChooseUsReasonContainer> 
    <ChooseUsIcon>
    {props.icon}
    </ChooseUsIcon>
    <ChooseUsTextContainer>
        <ChooseUsHeader>{props.header}</ChooseUsHeader>
        <ChooseUsText>
           {props.text}
        </ChooseUsText>

    </ChooseUsTextContainer>
</ChooseUsReasonContainer>
)



}




export default ChooseUsReason;