import React from 'react';
import styled from 'styled-components';
import { 
  SPACER, 
  SPACER_MINUS_1PX, 
  SPACER_ONE_THIRD,  
  SPACER_ONE_THIRD_MINUS_1PX,
  SPACER_TWO_THIRD,  
  BLACK_200, 
  BLACK, 
  BLACK_300,
  P,
} from './../design-system-variables';

const Wrapper = styled.label`
  position: relative;
  display: block;
  width: ${SPACER + SPACER_ONE_THIRD}em;
  height: ${SPACER_MINUS_1PX}em;
  margin-top: ${P.paddingTop};
  margin-bottom: ${P.marginBottom};
`;

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
  margin: 0;
  z-index: -1;

  &:checked + div {
    background-color: ${BLACK_300};
  }

  &:checked + div::before {
    transform: translateX(${SPACER_TWO_THIRD}em);
    background-color: ${BLACK};
  }
`;

const Dummy = styled.div`
  position: absolute;
  cursor: pointer;
  top: ${SPACER_ONE_THIRD_MINUS_1PX * 0.666}em;
  left: 0;
  right: 0;
  bottom: ${SPACER_ONE_THIRD_MINUS_1PX * 0.333}em;
  background-color: ${BLACK_300};
  border-radius: 9999px;
  transition: background-color 100ms ease;

  &::before {
    position: absolute;
    content: "";
    height: ${SPACER_TWO_THIRD}em;
    width: ${SPACER_TWO_THIRD}em;
    left: 0;
    bottom: 0;
    background-color: ${BLACK_300};
    transition: transform 100ms ease;
    border-radius: 50%;
  }

  &::after {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: ${SPACER_TWO_THIRD}em;
  }
`;

const Switch = (props) => (
  <Wrapper>
    <Checkbox
      {...props}
      type="checkbox"
    />
    <Dummy />
  </Wrapper>
);

export default Switch;
