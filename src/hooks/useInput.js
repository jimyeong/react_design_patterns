import { useState } from "react";

export function useInput(initialState) {
  const [values, setValues] = useState(initialState);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onReset = () => {
    setValues(initialState);
  };
  return [values, onChange, onReset];
}
