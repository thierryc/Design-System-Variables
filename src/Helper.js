import { FIXDIGIT } from './Constant' 
import { ROOT_FONTSIZE } from './Typography'

export const getEmString = (val) => (val.toFixed(FIXDIGIT) == 0) ? 0 : `${val.toFixed(FIXDIGIT)}em`;
export const getRemString = (val) => (val.toFixed(FIXDIGIT) == 0) ? 0 : `${val.toFixed(FIXDIGIT)}rem`;
export const getPxString = (val) => (val === 0) ? val : `${val.toFixed(0)}px`;

export const getStringFromPx = (val, unit = 'px', fontSize = ROOT_FONTSIZE) => {
  switch (unit){
    case 'em':
      return getEmString(val / fontSize);
    case 'rem':
      return getRemString(val / ROOT_FONTSIZE);
    case 'px':
    default:
      return getPxString(val);
  }
}

/**
 * Use pixels to compute the font size em and rem are not consistent.
 * @param {Integer} level Level of the rhythm.
 * @param {Integer} capHeight Level of the rhythm.
 * @param {Integer} fontFamily Level of the rhythm.
 * @param {Integer} before 
 * @param {Integer} after 
 */

export const getTypographicElement = ({ 
  level, 
  capHeight, 
  fontFamily,
  fontWeight = null,
  before = 0,
  after = 0,
}) => {

  // get pixel size
  // use Math.floor to get consitent result.
  const grid = Math.floor(cfg.ROOT_FONTSIZE * cfg.TYPO_BASE_LINE_HEIGHT);

  const fontSizePx = Math.pow( cfg.RHYTHM_SCALE, level ) * cfg.ROOT_FONTSIZE;
  
  // conpute the better line height for the font size
  const lineHeightPx = Math.round((fontSizePx * cfg.TYPO_BASE_LINE_HEIGHT) / grid) * grid;

  const capHeightPx = fontSizePx * capHeight;
  // align the baseline on the grid.
  const shift = Math.round( ( lineHeightPx - ( fontSizePx * capHeight ) ) / 2 );

  //const marginTop = Math.ceil();
  const paddingTop = (before > 0) ? before * grid + shift : shift;
  let marginBottom = (shift > grid) ? grid - shift : shift * -1;

  if (after) {
    marginBottom += after * grid;
  }

  const letterSpacing = (Math.pow( cfg.RHYTHM_SCALE, level) * cfg.LETTER_SPACING_SCALE * -1) + cfg.LETTER_SPACING_SCALE;
  
  if (fontWeight === null) {
    fontWeight = (!cfg.TYPO_BOLD_HEADERS) ? 400 : null;
  }
  
  return {
    fontFamily,
    fontSize: getStringFromPx(fontSizePx, cfg.TYPO_UNIT, cfg.ROOT_FONTSIZE), // 
    lineHeight: getStringFromPx(lineHeightPx, cfg.TYPO_UNIT, fontSizePx),
    paddingTop: getStringFromPx(paddingTop, cfg.TYPO_UNIT, fontSizePx),
    marginTop: 0,
    fontWeight,
    marginBottom: getStringFromPx(marginBottom, cfg.TYPO_UNIT, fontSizePx),
    letterSpacing: getEmString(letterSpacing),
    _shift: shift,
  }
}
