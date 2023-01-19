import React, { useState, useContext } from "react";
import styled from "styled-components";
import { INPUTS, Buttons } from "..";
import { useInput } from "../../hooks/useInput";
import { utils } from "../../utils";

const SearchBarBlock = styled.div`
  position: relative;
  padding-right: 140px;

  > button {
    width: 100px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    border: none;
    color: white;
  }
`;

/**
 * do not ever fix this code up to your need
 * @author jimmy jung
 * @date 01.15.23
 * @param {id, callback}
 * @returns
 */
function SearchBar({ id, callback }) {
  const initialValue = { [id]: "" };

  const [values, setValues] = useState(initialValue);
  const onChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const onReset = () => {
    setValues(initialValue);
  };
  const onClick = () => {
    onReset();
    if (callback) callback(values[id]);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onReset();
      if (callback) callback(values[id]);
    }
  };
  return (
    <SearchBarBlock>
      <INPUTS.INPUT_TEXT
        name={id}
        value={values[id]}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Buttons.RoundedBoxButton onClick={onClick}>GO!</Buttons.RoundedBoxButton>
    </SearchBarBlock>
  );
}

export default React.memo(SearchBar);
