import styled from 'styled-components';
const Titles = {};

Titles.H4 = styled.h4`
    font-size: 18px;
    font-weight: 600;
    color: #c2c2c2;
    line-height: 1.3;
    ${(props) => props.marginTop && 'margin-top: 16px'};
`;

export default Titles;
