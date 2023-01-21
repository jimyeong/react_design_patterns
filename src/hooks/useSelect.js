import React, { useState } from "react";

export function useSelect(initialState) {
  const [selectValues, setValues] = useState(initialState);
  const onSelectChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...selectValues,
      label: value,
      value: value,
    });
  };
  const onSelectReset = () => {
    setValues(initialState);
  };
  return [selectValues, onSelectChange, onSelectReset];
}
