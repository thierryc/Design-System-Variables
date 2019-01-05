import * as cfg from './Typography'
import { getEmString, getRemString } from './Helper';

/**
 * Use pixels to compute the font size em and rem are not consistent.
 * @param {Integer} level Level of the rhythm.
 * @param {Integer} capHeight Level of the rhythm.
 * @param {Integer} fontFamily Level of the rhythm.
 * @param {Integer} before 
 * @param {Integer} after 
 */


const getTypographicElement = ({ 
  level, 
  capHeight, 
  fontFamily,
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

  /*
  let paddingTop = 0;
  let marginBottom = 0;
  
  */

  const letterSpacing = (Math.pow( cfg.RHYTHM_SCALE, level) * cfg.LETTER_SPACING_SCALE * -1) + cfg.LETTER_SPACING_SCALE;
  return {
    fontFamily,
    fontSize: `${fontSizePx}px`,
    lineHeight: `${lineHeightPx}px`,
    paddingTop: `${paddingTop}px`,
    marginTop: 0,
    marginBottom: `${marginBottom}px`,
    letterSpacing: getEmString(letterSpacing),
    _shift: shift,
  }
}

const H1 = getTypographicElement({
  level: cfg._TYPO_H1_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H1_SPACING_BEFORE,
  after: cfg._TYPO_H1_SPACING_AFTER,
});

const H2 = getTypographicElement({
  level: cfg._TYPO_H2_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H2_SPACING_BEFORE,
  after: cfg._TYPO_H2_SPACING_AFTER,
});

const H3 = getTypographicElement({
  level: cfg._TYPO_H3_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H3_SPACING_BEFORE,
  after: cfg._TYPO_H3_SPACING_AFTER,
});

const H4 = getTypographicElement({
  level: cfg._TYPO_H4_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H4_SPACING_BEFORE,
  after: cfg._TYPO_H34_SPACING_AFTER,
});

const H5 = getTypographicElement({
  level: cfg._TYPO_H5_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H5_SPACING_BEFORE,
  after: cfg._TYPO_H5_SPACING_AFTER,
});

const H6 = getTypographicElement({
  level: cfg._TYPO_H6_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H6_SPACING_BEFORE,
  after: cfg._TYPO_H6_SPACING_AFTER,
});

const P = getTypographicElement({
  level: cfg._TYPO_P_SCALE, 
  capHeight: cfg._TYPO_CAP_HEIGHT_BODY, 
  fontFamily: cfg.TYPO_FONT_FAMILY_BODY, 
  before: cfg._TYPO_P_SPACING_BEFORE,
  after: cfg._TYPO_P_SPACING_AFTER,
});

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
};
