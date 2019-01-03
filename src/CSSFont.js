import * as cfg from './Typography'
import { FIXDIGIT } from './Constant' 

/**
 * Creates an instance of the Rhythm.
 *
 * @param {Integer} level Level of the rhythm.
 * @param {Bollean} heading is a heading to get paddingTop and marginBottom.
 */

const getTypographicElement = ( level, capHeight, fontFamily, heading = false ) => {

  const rhythmUnit = Math.round( cfg.ROOT_FONTSIZE * cfg.TYPO_BASE_LINE_HEIGHT );
		
  const fontSizeFactor = Math.pow( cfg.RHYTHM_SCALE, level );
  const fontSize = Math.round( cfg.ROOT_FONTSIZE * fontSizeFactor );
  const unitsInSize = Math.ceil( ( fontSize + 0.001 ) / rhythmUnit );
  const lineHeight = Math.round( rhythmUnit * unitsInSize );
  const shift = Math.round( ( lineHeight - ( fontSize * capHeight ) ) / 2 );
  let paddingTop = shift;
  let marginBottom = ( shift > rhythmUnit ? 2 : 1 ) * rhythmUnit - shift;
  if ( heading ) {
    paddingTop += cfg.TYPO_HEADER_SPACING_BEFORE * rhythmUnit;
    marginBottom += cfg.TYPO_HEADER_SPACING_AFTER * rhythmUnit;
  }
  return {
    fontFamily,
    fontSize: `${fontSize.toFixed(FIXDIGIT)}${cfg.TYPO_UNIT}`,
    lineHeight: `${lineHeight.toFixed(FIXDIGIT)}${cfg.TYPO_UNIT}`,
    paddingTop: `${paddingTop.toFixed(FIXDIGIT)}${cfg.TYPO_UNIT}`,
    marginBottom: `${marginBottom.toFixed(FIXDIGIT)}${cfg.TYPO_UNIT}`,
  }
}

const h1 = getTypographicElement( cfg.TYPO_SCALE_H1, cfg.TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const h2 = getTypographicElement( cfg.TYPO_SCALE_H2, cfg.TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const h3 = getTypographicElement( cfg.TYPO_SCALE_H3, cfg.TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const h4 = getTypographicElement( cfg.TYPO_SCALE_H4, cfg.TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const h5 = getTypographicElement( cfg.TYPO_SCALE_H5, cfg.TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const h6 = getTypographicElement( cfg.TYPO_SCALE_H6, cfg.TYPO_CAP_HEIGHT, cfg.TYPO_FONT_FAMILY, true );
const p = getTypographicElement( 0, cfg.TYPO_CAP_HEIGHT_BODY, cfg.TYPO_FONT_FAMILY_BODY, false );

const CSSFont = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p
};

export default CSSFont;