import React, { useState, useEffect } from "react";

import {
  StyledWrapper,
  StyledInputsWrapper,
  StyledInputsRemoveRow,
  StyledInputsAddRow,
  StyledAddButton,
  StyledRemoveButton,
} from "./DynamicFields.styled";
import Text from "../Typography/Text";
const DynamicFields = ({ name, listName, itemArray, setValues }) => {
  const [itemList, setItemList] = useState(itemArray);

  useEffect(()=> {
    setValues(itemList);
   },[itemList, setValues]);


  const obj = {};

  for (const key of Object.keys(itemArray[0])) {
    obj[key] = "";
  }

  const handleItemAdd = () => {
    setItemList([...itemList, obj]);
  };
  const handleItemRemove = (index) => {
    const list = [...itemList];
    list.splice(index, 1);
    setItemList(list);
  };

  const handleItemChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...itemList];
    list[index][name] = value;
    setItemList(list);
  };

  return (
    <StyledWrapper style={{ minWidth: "50%" }}>
      <Text
        type="text"
        margin="1rem 0"
        color="#0cc2f5"
        align="left"
      >{`Adauga ${listName}`}</Text>

      {itemList.map((item, index) => (
        <StyledInputsWrapper key={index}>
          <StyledInputsAddRow>
            {Object.entries(item).map(([key, value]) => {
              return (
                <input
                  key={key}
                  name={key}
                  type="text"
                  value={value}
                  placeholder={key}
                  onChange={(e) => {
                    handleItemChange(e, index);
                  }}
                  required
                />
              );
            })}

            {itemList.length - 1 === index && (
              <StyledAddButton type="button" onClick={handleItemAdd}>
                {`Adauga ${name}`}
              </StyledAddButton>
            )}
          </StyledInputsAddRow>
          <StyledInputsRemoveRow>
            {itemList.length > 1 && (
              <StyledRemoveButton
                type="button"
                onClick={() => handleItemRemove(index)}
              >
                {`Sterge ${name}`}
              </StyledRemoveButton>
            )}
          </StyledInputsRemoveRow>
        </StyledInputsWrapper>
      ))}
    </StyledWrapper>
  );
};

export default DynamicFields;
