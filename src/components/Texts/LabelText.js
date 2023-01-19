import React from 'react';
import styled, { css } from 'styled-components';

const TEXTLABEL = styled.span`
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
`;
const TEXT = styled.p`
    font-size: 16px;
    line-height: 1.5;
    ${(props) => props.color && `color: ${props.color}`};
    text-transform: lowercase;
`;
const LabelTextBlock = styled.div`
    & + & {
        margin-top: 22px;
    }
    font-size: 18px;
    font-weight: 500;
    text-transform: uppercase;
    ${(props) => (props.type == 'col' ? labelType('col') : labelType('row'))};
`;

const labelType = (type) => {
    if (type == 'col') {
        return `
            .label__box{
                display: block;
            }
        `;
    }
    return `
        &{
            position:relative;
            padding-left: 50px;
        }
        .label__box{
            position:absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
        }
    `;
};

function LabelText({ text, labelType, labelName, children }) {
    return (
        <LabelTextBlock type={labelType}>
            <TEXTLABEL className="label__box">{labelName}: </TEXTLABEL>
            <TEXT className="context__box">{text}</TEXT>
        </LabelTextBlock>
    );
}

export default LabelText;
