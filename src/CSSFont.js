import * as cfg from './Typography'
import { getStringFromPx, getEmString, getTypographicElement } from './Helper';

const H1 = getTypographicElement({
  level: cfg._TYPO_H1_SCALE,
  xLineHeight: cfg._TYPO_H1_LINEHEIGHT,
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H1_SPACING_BEFORE,
  after: cfg._TYPO_H1_SPACING_AFTER,
});

const H2 = getTypographicElement({
  level: cfg._TYPO_H2_SCALE,
  xLineHeight: cfg._TYPO_H2_LINEHEIGHT,
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H2_SPACING_BEFORE,
  after: cfg._TYPO_H2_SPACING_AFTER,
});

const H3 = getTypographicElement({
  level: cfg._TYPO_H3_SCALE, 
  xLineHeight: cfg._TYPO_H3_LINEHEIGHT,
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H3_SPACING_BEFORE,
  after: cfg._TYPO_H3_SPACING_AFTER,
});

const H4 = getTypographicElement({
  level: cfg._TYPO_H4_SCALE,
  xLineHeight: cfg._TYPO_H4_LINEHEIGHT,
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H4_SPACING_BEFORE,
  after: cfg._TYPO_H4_SPACING_AFTER,
});

const H5 = getTypographicElement({
  level: cfg._TYPO_H5_SCALE, 
  xLineHeight: cfg._TYPO_H5_LINEHEIGHT,
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H5_SPACING_BEFORE,
  after: cfg._TYPO_H5_SPACING_AFTER,
});

const H6 = getTypographicElement({
  level: cfg._TYPO_H6_SCALE, 
  xLineHeight: cfg._TYPO_H6_LINEHEIGHT,
  capHeight: cfg._TYPO_CAP_HEIGHT, 
  fontFamily: cfg.TYPO_FONT_FAMILY, 
  before: cfg._TYPO_H6_SPACING_BEFORE,
  after: cfg._TYPO_H6_SPACING_AFTER,
});

const P = getTypographicElement({
  level: cfg._TYPO_P_SCALE, 
  xLineHeight: cfg._TYPO_P_LINEHEIGHT,
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
