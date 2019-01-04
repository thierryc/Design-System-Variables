import * as cfg from './Typography'
import { getEmString, getPxString } from './Helper';

/**
 * Creates an instance of the Rhythm.
 *
 * @param {Integer} level Level of the rhythm.
 * @param {Bollean} heading is a heading to get paddingTop and marginBottom.
 */

const getTypographicElement = ( level, capHeight, fontFamily, heading = false ) => {
  const fontSize =  Math.pow( cfg.RHYTHM_SCALE, level );
  const lineHeight = cfg.TYPO_BASE_LINE_HEIGHT * fontSize;
  const shift = ( lineHeight - ( fontSize * capHeight ) ) / 2;
  let paddingTop = shift;
  let marginBottom = ( shift > cfg.TYPO_BASE_LINE_HEIGHT ? 2 : 1 ) * cfg.TYPO_BASE_LINE_HEIGHT - shift;
  if ( heading ) {
    paddingTop += cfg.TYPO_HEADER_SPACING_BEFORE * cfg.TYPO_BASE_LINE_HEIGHT;
    marginBottom += cfg.TYPO_HEADER_SPACING_AFTER * cfg.TYPO_BASE_LINE_HEIGHT;
  }
  const letterSpacing = Math.pow( cfg.RHYTHM_SCALE, level) * 0.004 - 0.003;
  return {
    fontFamily,
    fontSize: getEmString(fontSize),
    lineHeight: getEmString(lineHeight),
    paddingTop: getEmString(paddingTop),
    marginBottom: getEmString(marginBottom),
    letterSpacing: getEmString(letterSpacing),
    _fontSizeFactor: fontSize,
    _shift: shift,
  }
}

const H1 = getTypographicElement( cfg._TYPO_SCALE_H1, cfg._TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const H2 = getTypographicElement( cfg._TYPO_SCALE_H2, cfg._TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const H3 = getTypographicElement( cfg._TYPO_SCALE_H3, cfg._TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const H4 = getTypographicElement( cfg._TYPO_SCALE_H4, cfg._TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const H5 = getTypographicElement( cfg._TYPO_SCALE_H5, cfg._TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const H6 = getTypographicElement( cfg._TYPO_SCALE_H6, cfg._TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const P = getTypographicElement( 0, cfg._TYPO_CAP_HEIGHT_BODY, cfg.TYPO_FONT_FAMILY_BODY, false );

export {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P
};
