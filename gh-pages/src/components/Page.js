import styled from 'styled-components'
import{ 
  SCREEN_MIN_SM, 
  SCREEN_MIN_MD,
  SCREEN_MIN_LG,
  SCREEN_MIN_XL,
  MARGIN_XS,
  MARGIN_SM,
  MARGIN_MD,
  MARGIN_LG,
  MARGIN_XL,
  TYPO_TEXT_COL_MAX_WIDTH,
} from './../design-system-variables';

export const Page = styled.div`

  /* XL  is the default */
  background-color: hsla(54, 100%, 60%, .3);
  
  margin: 0 ${MARGIN_XS};

  @media (min-width: ${SCREEN_MIN_SM}) {
    background-color: hsla(208, 100%, 50%, .3);
    margin: 0 ${MARGIN_SM}; 
  }

  @media (min-width: ${SCREEN_MIN_MD}) {
    background-color: hsla(142, 100%, 50%, .3);
    margin: 0 ${MARGIN_MD};
  }

  @media (min-width: ${SCREEN_MIN_LG}) {
    background-color: hsla(0, 100%, 50%, .3);
    margin: 0 ${MARGIN_LG}; 
  }

  @media (min-width: ${SCREEN_MIN_XL}) {
    background-color: hsla(54, 100%, 50%, .3);
    margin: 0 ${MARGIN_XL}; 
  }

`;

export const TextContainer = styled.div`
  max-width: ${TYPO_TEXT_COL_MAX_WIDTH}em;
  margin: 0 auto;
`;


