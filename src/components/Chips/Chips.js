import React from 'react';
import styled from 'styled-components';

const Chips = {};
Chips.RoundChip = styled.div`
    & + & {
        margin-left: 8px;
    }
    border-radius: 18px;
    font-size: 16px;
    line-height: 40px;
    height: 40px;
    background-color: #f3f3f3;
    text-align: center;
    padding: 0 16px;
    display: inline-block;
    border: ${(props) =>
        props.borderColor ? `3px solid ${props.borderColor}` : 'none'};
`;

export default Chips;
