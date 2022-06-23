import React, { useState } from "react";

import { StyledProductInputs } from "./ProductFields.styled";
import Input from "../UIElements/Input/Input";
import TextArea from "../UIElements/TextArea/TextArea";
const ProductFields = ({
  initialName,
  initialDescription,
  initialPrice,
  initialUsage,
  onNameChange,
  onDescriptionChange,
  onPriceChange,
  onUsageChange
}) => {
  //de vazut cum fac cu state sa setez value ( controlled si uncontrolled components)

  const changeNameHandler = (e) => {
    onNameChange(e.target.value);
  };

  const changeDescriptionHandler = (e) => {
    onDescriptionChange(e.target.value);
  };

  const changePriceHandler = (e) => {
    onPriceChange(e.target.value);
  };

  const changeUsageHandler = (e) => {
    onUsageChange(e.target.value);
  };


  return (
    <StyledProductInputs>
      <Input
        id="name"
        label="Denumirea produsului:"
        name="name"
        placeholder="Introduceti numele produsului."
        value={initialName}
        onChangeHandler={changeNameHandler}
      />
      <TextArea
        placeholder="Introduceti descrierea medicamentului"
        name="description"
        id="description"
        col={60}
        rows={40}
        label="Descrierea produsului"
        value={initialDescription}
        onChangeHandler={changeDescriptionHandler}
      />
      <Input
        type="number"
        label="Pret"
        id="price"
        name="price"
        placeholder="Pretul medicamentului."
        value={initialPrice}
        onChangeHandler={changePriceHandler}
      />
      <TextArea
        placeholder="Introduceti modul de folosire al medicamentului"
        name="usage"
        id="usage"
        col={60}
        rows={40}
        label="Modul de folosire al produsului"
        value={initialUsage}
        onChangeHandler={changeUsageHandler}
      />
    </StyledProductInputs>
  );
};

export default ProductFields;
