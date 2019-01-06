import { FIXDIGIT } from './Constant' 
import { 
  ROOT_FONTSIZE, 
  TYPO_BASE_LINE_HEIGHT,
} from './Typography'

export const EM_1PX = (1 / ROOT_FONTSIZE);

export const SPACER = (TYPO_BASE_LINE_HEIGHT);
export const SPACER_MINUS_1PX = (TYPO_BASE_LINE_HEIGHT - EM_1PX);

export const SPACER_HALF = (TYPO_BASE_LINE_HEIGHT / 2);
export const SPACER_HALF_MINUS_1PX = (TYPO_BASE_LINE_HEIGHT / 2 - EM_1PX);

export const SPACER_ONE_THIRD = (TYPO_BASE_LINE_HEIGHT / 3);
export const SPACER_ONE_THIRD_MINUS_1PX = (TYPO_BASE_LINE_HEIGHT / 3 - EM_1PX);

export const SPACER_TWO_THIRD = ((TYPO_BASE_LINE_HEIGHT / 3) * 2);
export const SPACER_TWO_THIRD_MINUS_1PX = (((TYPO_BASE_LINE_HEIGHT / 3) * 2) - EM_1PX);

