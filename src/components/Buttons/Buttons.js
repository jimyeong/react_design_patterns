import React, { memo } from "react";
import styled from "styled-components";
import { uiConfig } from "../../configs/uiConfig";
import { utils } from "../../utils";
const { setColor } = utils;

const normalizeButton = ({ backgroundColor }) => {
  return `
        background-color: ${backgroundColor};
        border:none;
        cursor:pointer;
        &:hover{
            background-color: ${setColor(backgroundColor, 20)};
        }
        &:active{
            background-color: ${setColor(backgroundColor, -20)};
        }
        &:focus{
        }
    `;
};
const Buttons = {};
Buttons.WideButton = styled.button`
  width: 100%;
  ${(props) =>
    normalizeButton({
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : uiConfig.primaryColor,
    })};
`;
const CircleButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  & + & {
    margin-left: 8px;
  }
  width: ${(props) => `${props.size ? props.size : 30}px`};
  height: ${(props) => `${props.size ? props.size : 30}px`};
  border-radius: 50%;
  ${(props) =>
    normalizeButton({
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : uiConfig.primaryColor,
    })}

  ${(props) => props.customStyle && props.customStyle}
`;
const RoundedBoxButton = styled.button`
  height: 38px;
  padding: 4px 8px;
  border-radius: 8px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  ${(props) =>
    normalizeButton({
      backgroundColor: props.backgroundColor
        ? props.backgroundColor
        : uiConfig.primaryColor,
    })};
  ${(props) => props.full && "width: 100%"};
  ${(props) =>
    props.fontSize ? `font-size: ${props.fontSize}` : `font-size: 16px`};
`;

const IconCircleButton = ({
  icon,
  size,
  backgroundColor,
  children,
  onClick,
  customStyle,
  ...rest
}) => {
  return (
    <CircleButton
      customStyle={customStyle}
      size={size}
      backgroundColor={backgroundColor}
      onClick={onClick}
      {...rest}
    >
      {children}
    </CircleButton>
  );
};
Buttons.CircleButton = memo(CircleButton);
Buttons.IconCircleButton = memo(IconCircleButton);
Buttons.RoundedBoxButton = memo(RoundedBoxButton);
const utils_buttons = {
  normalizeButton,
};
Buttons.utils = utils_buttons;

export default Buttons;
