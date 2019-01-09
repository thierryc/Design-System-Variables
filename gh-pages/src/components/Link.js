import styled from 'styled-components'
import{  
  SPACER_ONE_THIRD,  
  BLACK_100, 
  BLACK_200,
} from './../design-system-variables';

export const A = styled.a`
  background-color: transparent;
  color: inherit;
  text-decoration: none;
  transition: background .15s cubic-bezier(0.33, 0.66, 0.66, 1);
  border-bottom:  ${SPACER_ONE_THIRD * -.5}em solid ${BLACK_200};
  box-shadow: inset 0 ${SPACER_ONE_THIRD * -.5}em 0 ${BLACK_200};

  &:hover{
    background-color: ${BLACK_100};
  }
`;




