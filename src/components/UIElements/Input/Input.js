import React from 'react';
import { StyledInputContainer } from './Input.styled';



const Input = ({id, label,type,name, width, height, placeholder, value, onChangeHandler}) => {

  
   


 return(
     <StyledInputContainer width={width} height={height} >
         <label  htmlFor={id}>{label}</label>
         <input onChange={onChangeHandler} value={value} type={type} name={name} placeholder={placeholder} id={id} />

     </StyledInputContainer>

 )
}



export default Input;