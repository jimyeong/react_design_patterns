import React from "react";
import styled from "styled-components";

const OptimisingLaboratoryBlock = styled.div``;

function OptimisingLaboratoryPage({ children }) {
  return (
    <OptimisingLaboratoryBlock>
      <h3>purpose: </h3>

      <p>
        there are many ways to optimise the number of times of components
        re-rendering
      </p>
      <p>now we are gonna sail the ways of controlling Re-render</p>
      <p>
        the key is how to not uneccesarrily create a new reference of the arrays
        in State
      </p>
      <ul>
        <li>
          <h3>React.memo</h3>
          <p>you can use this with these methods, useCallback, useMemo </p>
          <p>
            It checks props passing over to the component wrapped by React.memo,
            and it the values are the same as the previous one, it stops the
            component from re-rendering
          </p>
          <p>
            if you are passing props directly in the component, then use this
          </p>
        </li>
        <li>
          <h3>Reselect library</h3>
          <p>
            when you are using redux library, everytime you call useSelector, it
            returns a new reference which leads the whole child components to
            re-render. so, you can refer to this, when you are using Redux and
            considering optimising techniques.
          </p>
          <p>when your application is running on Redux State management</p>
        </li>
        <li>
          <h3>Seperate an array into an Id array and a data array</h3>
          <p>
            the benefit you can get, from this pattern is you can just trigger
            re-rendering by just handling only the ID array when the number of
            item in the array increases or decreases
          </p>
        </li>
      </ul>
    </OptimisingLaboratoryBlock>
  );
}

export default OptimisingLaboratoryPage;
