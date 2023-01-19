import React from 'react';
import styled from 'styled-components';
import Buttons from '../Buttons/Buttons';

const BUTTON = styled.button`
    width: 80px;
    display: block;
`;
const BALLOON = styled.img``;
const MOVING_CONVEYER = styled.div``;

function MessageLoader({ words }) {
    return <div></div>;
}

const MOTIVATING_CONVEYER = styled.div`
    @keyframes trailer {
        0% {
            transform: translate();
        }
        100% {
        }
    }
`;

function MotivatingButton({ children }) {
    return (
        <MOTIVATING_CONVEYER>
            <Buttons.RoundedBoxButton>hello</Buttons.RoundedBoxButton>
        </MOTIVATING_CONVEYER>
    );
}

export default MotivatingButton;
