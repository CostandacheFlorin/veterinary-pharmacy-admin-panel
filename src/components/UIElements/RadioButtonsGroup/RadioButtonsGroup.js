import * as React from "react";
import Radio from "@mui/material/Radio";

import { useState } from "react";

const getDefaultState = (values) => {
  const defaultState = {};
  for (let value of values) {
    defaultState[value.key] = false;
  }

  return defaultState;
};

const RadioButtonsGroup = ({ radioValues, onChange, name }) => {
  const defaultStateSet = getDefaultState(radioValues);


  const [defaultState, setDefaultState] = useState(defaultStateSet);

  React.useEffect(() => {
    onChange(defaultState);
  }, [defaultState, onChange])

  const onChangeHandler = (event, key) => {
    setDefaultState({
      ...defaultStateSet,
      [key]: event.target.checked,
    });
  };

  const renderRadios = (values) =>
    values.map(({ key, value }) => (
     <div key={`${key}_radioFilter`} className="filterbox-radio">
      <Radio
        checked={defaultState[key]}
        onChange={(event) => onChangeHandler(event, key)}
      />
      <p className="option-name">{value}</p>
      
     </div>
    ));

  return <div>{renderRadios(radioValues)}</div>;
};

RadioButtonsGroup.defaultProps = {
  radioValues: [],
  onChange: () => true,
};

export default RadioButtonsGroup;
