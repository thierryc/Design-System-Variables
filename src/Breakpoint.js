import { FIXDIGIT } from './Constant' 
import { ROOT_FONTSIZE } from './Typography'
import { 
    SCREEN_SIZE_MIN_XS, 
    SCREEN_SIZE_MIN_SM, 
    SCREEN_SIZE_MIN_MD, 
    SCREEN_SIZE_MIN_LG, 
    SCREEN_SIZE_MIN_XL
} from './ScreenSize'

const getEmString = (val) => (val === 0) ? val : `${val.toFixed(FIXDIGIT)}em`;
const getPxString = (val) => (val === 0) ? val : `${val.toFixed(0)}px`;

const SCREEN_XS = SCREEN_SIZE_MIN_XS / ROOT_FONTSIZE;

// Extra small screen / phone
export const SCREEN_MIN_XS = getEmString(SCREEN_XS);

const SCREEN_SM = SCREEN_SIZE_MIN_SM / ROOT_FONTSIZE;
export const SCREEN_MIN_SM = getEmString(SCREEN_SM)

const SCREEN_MD = SCREEN_SIZE_MIN_MD / ROOT_FONTSIZE;
export const SCREEN_MIN_MD = getEmString(SCREEN_MD)

const SCREEN_LG = SCREEN_SIZE_MIN_LG / ROOT_FONTSIZE;
export const SCREEN_MIN_LG = getEmString(SCREEN_LG)

const SCREEN_XL = SCREEN_SIZE_MIN_XL / ROOT_FONTSIZE;
export const SCREEN_MIN_XL = getEmString(SCREEN_XL)

export const SCREEN_MAX_XS = getEmString(SCREEN_SM - (1 / ROOT_FONTSIZE));
export const SCREEN_MAX_SM = getEmString(SCREEN_MD - (1 / ROOT_FONTSIZE));
export const SCREEN_MAX_MD = getEmString(SCREEN_LG - (1 / ROOT_FONTSIZE));
export const SCREEN_MAX_LG = getEmString(SCREEN_XL - (1 / ROOT_FONTSIZE));

// Pixel 
// MIN
export const SCREEN_MIN_XS_PX = getPxString(SCREEN_SIZE_MIN_XS);
export const SCREEN_MIN_SM_PX = getPxString(SCREEN_SIZE_MIN_SM);
export const SCREEN_MIN_MD_PX = getPxString(SCREEN_SIZE_MIN_MD);
export const SCREEN_MIN_LG_PX = getPxString(SCREEN_SIZE_MIN_LG);
export const SCREEN_MIN_XL_PX = getPxString(SCREEN_SIZE_MIN_XL);
// MAX
export const SCREEN_MAX_XS_PX = getPxString(SCREEN_SIZE_MIN_SM - 1);
export const SCREEN_MAX_SM_PX = getPxString(SCREEN_SIZE_MIN_MD - 1);
export const SCREEN_MAX_MD_PX = getPxString(SCREEN_SIZE_MIN_LG - 1);
export const SCREEN_MAX_LG_PX = getPxString(SCREEN_SIZE_MIN_XL - 1);