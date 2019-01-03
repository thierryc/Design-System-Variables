import { TYPO_BASE_LINE_HEIGHT } from './Typography'
import { getEmString } from './Helper';

const grid = TYPO_BASE_LINE_HEIGHT / 3;

export const GUTTER_SX = getEmString(1 * grid);
export const GUTTER_SM = getEmString(1 * grid);
export const GUTTER_MD = getEmString(2 * grid);
export const GUTTER_LG = getEmString(3 * grid);
export const GUTTER_XL = getEmString(3 * grid);
