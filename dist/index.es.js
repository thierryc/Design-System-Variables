import chroma from "chroma-js";
import bezier from "bezier-easing";

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(
        Object.getOwnPropertySymbols(source).filter(function(sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        })
      );
    }

    ownKeys.forEach(function(key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var MINOR_THIRD = 1.2;
var MAJOR_THIRD = 1.25;
var FOURTH = 1.333;
var FIFTH = 1.5;
var FIBONACCI = 1.618;
var MINOR_SEVENTH = 1.778;
var MAJOR_SEVENTH = 1.875;
var OCTAVE = 2.0;

var _Rhythm = /*#__PURE__*/ Object.freeze({
  MINOR_THIRD: MINOR_THIRD,
  MAJOR_THIRD: MAJOR_THIRD,
  FOURTH: FOURTH,
  FIFTH: FIFTH,
  FIBONACCI: FIBONACCI,
  MINOR_SEVENTH: MINOR_SEVENTH,
  MAJOR_SEVENTH: MAJOR_SEVENTH,
  OCTAVE: OCTAVE
});

var ROOT_FONTSIZE = 16;
var TYPO_DEFAULT_FONTSIZE = 1; //em

var TYPO_TEXT_COL_MAX_WIDTH = 46; // em

/* Edit your font  */

var TYPO_FONT_FAMILY_URL =
  "https://fonts.googleapis.com/css?family=Lato|Lora:400,700";
var TYPO_FONT_FAMILY = '"Lora", serif';
var _TYPO_CAP_HEIGHT = 0.7;
var TYPO_FONT_FAMILY_BODY = '"Lato", sans-serif';
var _TYPO_CAP_HEIGHT_BODY = 0.725;
var TYPO_BASE_LINE_HEIGHT = 2.1;
var TYPO_HEADER_X_LINE_HEIGHT = 1.6;
var LETTER_SPACING_SCALE = 0.006;
var RHYTHM_SCALE = FIBONACCI;
var TYPO_BOLD_HEADERS = true; // Scale Rhythm adjustment
// H1

var _TYPO_H1_SCALE = 3;
var _TYPO_H1_LINEHEIGHT = TYPO_HEADER_X_LINE_HEIGHT;
var _TYPO_H1_SPACING_BEFORE = 1;
var _TYPO_H1_SPACING_AFTER = 1; // H2

var _TYPO_H2_SCALE = 2;
var _TYPO_H2_LINEHEIGHT = TYPO_HEADER_X_LINE_HEIGHT;
var _TYPO_H2_SPACING_BEFORE = 1;
var _TYPO_H2_SPACING_AFTER = 1; // H3

var _TYPO_H3_SCALE = 1;
var _TYPO_H3_LINEHEIGHT = TYPO_BASE_LINE_HEIGHT;
var _TYPO_H3_SPACING_BEFORE = 1;
var _TYPO_H3_SPACING_AFTER = 1; // H4

var _TYPO_H4_SCALE = 0;
var _TYPO_H4_LINEHEIGHT = TYPO_BASE_LINE_HEIGHT;
var _TYPO_H4_SPACING_BEFORE = 1;
var _TYPO_H4_SPACING_AFTER = 1; // H5

var _TYPO_H5_SCALE = -0.5;
var _TYPO_H5_LINEHEIGHT = TYPO_BASE_LINE_HEIGHT;
var _TYPO_H5_SPACING_BEFORE = 1;
var _TYPO_H5_SPACING_AFTER = 1; // H6

var _TYPO_H6_SCALE = -1;
var _TYPO_H6_LINEHEIGHT = TYPO_BASE_LINE_HEIGHT;
var _TYPO_H6_SPACING_BEFORE = 1;
var _TYPO_H6_SPACING_AFTER = 1; // P

var _TYPO_P_SCALE = 0.333;
var _TYPO_P_LINEHEIGHT = TYPO_BASE_LINE_HEIGHT;
var _TYPO_P_SPACING_BEFORE = 0;
var _TYPO_P_SPACING_AFTER = 0;
var TYPO_UNIT = "em";

var Typography = /*#__PURE__*/ Object.freeze({
  ROOT_FONTSIZE: ROOT_FONTSIZE,
  TYPO_DEFAULT_FONTSIZE: TYPO_DEFAULT_FONTSIZE,
  TYPO_TEXT_COL_MAX_WIDTH: TYPO_TEXT_COL_MAX_WIDTH,
  TYPO_FONT_FAMILY_URL: TYPO_FONT_FAMILY_URL,
  TYPO_FONT_FAMILY: TYPO_FONT_FAMILY,
  _TYPO_CAP_HEIGHT: _TYPO_CAP_HEIGHT,
  TYPO_FONT_FAMILY_BODY: TYPO_FONT_FAMILY_BODY,
  _TYPO_CAP_HEIGHT_BODY: _TYPO_CAP_HEIGHT_BODY,
  TYPO_BASE_LINE_HEIGHT: TYPO_BASE_LINE_HEIGHT,
  TYPO_HEADER_X_LINE_HEIGHT: TYPO_HEADER_X_LINE_HEIGHT,
  LETTER_SPACING_SCALE: LETTER_SPACING_SCALE,
  RHYTHM_SCALE: RHYTHM_SCALE,
  TYPO_BOLD_HEADERS: TYPO_BOLD_HEADERS,
  _TYPO_H1_SCALE: _TYPO_H1_SCALE,
  _TYPO_H1_LINEHEIGHT: _TYPO_H1_LINEHEIGHT,
  _TYPO_H1_SPACING_BEFORE: _TYPO_H1_SPACING_BEFORE,
  _TYPO_H1_SPACING_AFTER: _TYPO_H1_SPACING_AFTER,
  _TYPO_H2_SCALE: _TYPO_H2_SCALE,
  _TYPO_H2_LINEHEIGHT: _TYPO_H2_LINEHEIGHT,
  _TYPO_H2_SPACING_BEFORE: _TYPO_H2_SPACING_BEFORE,
  _TYPO_H2_SPACING_AFTER: _TYPO_H2_SPACING_AFTER,
  _TYPO_H3_SCALE: _TYPO_H3_SCALE,
  _TYPO_H3_LINEHEIGHT: _TYPO_H3_LINEHEIGHT,
  _TYPO_H3_SPACING_BEFORE: _TYPO_H3_SPACING_BEFORE,
  _TYPO_H3_SPACING_AFTER: _TYPO_H3_SPACING_AFTER,
  _TYPO_H4_SCALE: _TYPO_H4_SCALE,
  _TYPO_H4_LINEHEIGHT: _TYPO_H4_LINEHEIGHT,
  _TYPO_H4_SPACING_BEFORE: _TYPO_H4_SPACING_BEFORE,
  _TYPO_H4_SPACING_AFTER: _TYPO_H4_SPACING_AFTER,
  _TYPO_H5_SCALE: _TYPO_H5_SCALE,
  _TYPO_H5_LINEHEIGHT: _TYPO_H5_LINEHEIGHT,
  _TYPO_H5_SPACING_BEFORE: _TYPO_H5_SPACING_BEFORE,
  _TYPO_H5_SPACING_AFTER: _TYPO_H5_SPACING_AFTER,
  _TYPO_H6_SCALE: _TYPO_H6_SCALE,
  _TYPO_H6_LINEHEIGHT: _TYPO_H6_LINEHEIGHT,
  _TYPO_H6_SPACING_BEFORE: _TYPO_H6_SPACING_BEFORE,
  _TYPO_H6_SPACING_AFTER: _TYPO_H6_SPACING_AFTER,
  _TYPO_P_SCALE: _TYPO_P_SCALE,
  _TYPO_P_LINEHEIGHT: _TYPO_P_LINEHEIGHT,
  _TYPO_P_SPACING_BEFORE: _TYPO_P_SPACING_BEFORE,
  _TYPO_P_SPACING_AFTER: _TYPO_P_SPACING_AFTER,
  TYPO_UNIT: TYPO_UNIT
});

var SCREEN_SIZE_MIN_XS = 0;
var SCREEN_SIZE_MIN_SM = 600;
var SCREEN_SIZE_MIN_MD = 1024;
var SCREEN_SIZE_MIN_LG = 1440;
var SCREEN_SIZE_MIN_XL = 1920;

var FIXDIGIT = 3;

var getEmString = function getEmString(val) {
  return val.toFixed(FIXDIGIT) == 0
    ? 0
    : "".concat(val.toFixed(FIXDIGIT), "em");
};
var getRemString = function getRemString(val) {
  return val.toFixed(FIXDIGIT) == 0
    ? 0
    : "".concat(val.toFixed(FIXDIGIT), "rem");
};
var getPxString = function getPxString(val) {
  return val === 0 ? val : "".concat(val.toFixed(0), "px");
};
var getStringFromPx = function getStringFromPx(val) {
  var unit =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "px";
  var fontSize =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : ROOT_FONTSIZE;

  switch (unit) {
    case "em":
      return getEmString(val / fontSize);

    case "rem":
      return getRemString(val / ROOT_FONTSIZE);

    case "px":
    default:
      return getPxString(val);
  }
};
/**
 * Use pixels to compute the font size em and rem are not consistent.
 * @param {Integer} level Level of the rhythm.
 * @param {Float} capHeight Cap Height for the font.
 * @param {String} fontFamily Font family name.
 * @param {Float} xLineHeight LineHeight multiplicator Goal.
 * @param {String} fontWeight Font Weight.
 * @param {Integer} before
 * @param {Integer} after
 */

var getTypographicElement = function getTypographicElement(_ref) {
  var level = _ref.level,
    capHeight = _ref.capHeight,
    fontFamily = _ref.fontFamily,
    _ref$xLineHeight = _ref.xLineHeight,
    xLineHeight =
      _ref$xLineHeight === void 0 ? TYPO_BASE_LINE_HEIGHT : _ref$xLineHeight,
    _ref$fontWeight = _ref.fontWeight,
    fontWeight = _ref$fontWeight === void 0 ? null : _ref$fontWeight,
    _ref$before = _ref.before,
    before = _ref$before === void 0 ? 0 : _ref$before,
    _ref$after = _ref.after,
    after = _ref$after === void 0 ? 0 : _ref$after;
  // get pixel size
  // use Math.floor to get consitent result.
  var grid = Math.floor(ROOT_FONTSIZE * TYPO_BASE_LINE_HEIGHT);
  var fontSizePx = Math.pow(RHYTHM_SCALE, level) * ROOT_FONTSIZE; // conpute the better line height for the font size

  var lineHeightPx = Math.round((fontSizePx * xLineHeight) / grid) * grid;

  var shift = Math.round((lineHeightPx - fontSizePx * capHeight) / 2); //const marginTop = Math.ceil();

  var paddingTop = before > 0 ? before * grid + shift : shift;
  var marginBottom = shift > grid ? grid - shift : shift * -1;

  if (after) {
    marginBottom += after * grid;
  }

  var letterSpacing =
    Math.pow(RHYTHM_SCALE, level) * LETTER_SPACING_SCALE * -1 +
    LETTER_SPACING_SCALE;

  if (fontWeight === null) {
    fontWeight = null;
  }

  return {
    fontFamily: fontFamily,
    fontSize: getStringFromPx(fontSizePx, TYPO_UNIT, ROOT_FONTSIZE),
    //
    lineHeight: getStringFromPx(lineHeightPx, TYPO_UNIT, fontSizePx),
    paddingTop: getStringFromPx(paddingTop, TYPO_UNIT, fontSizePx),
    marginTop: 0,
    fontWeight: fontWeight,
    marginBottom: getStringFromPx(marginBottom, TYPO_UNIT, fontSizePx),
    letterSpacing: getEmString(letterSpacing),
    _shift: shift
  };
};

var SCREEN_XS = SCREEN_SIZE_MIN_XS / ROOT_FONTSIZE; // Extra small screen / phone

var SCREEN_MIN_XS = getEmString(SCREEN_XS);
var SCREEN_SM = SCREEN_SIZE_MIN_SM / ROOT_FONTSIZE;
var SCREEN_MIN_SM = getEmString(SCREEN_SM);
var SCREEN_MD = SCREEN_SIZE_MIN_MD / ROOT_FONTSIZE;
var SCREEN_MIN_MD = getEmString(SCREEN_MD);
var SCREEN_LG = SCREEN_SIZE_MIN_LG / ROOT_FONTSIZE;
var SCREEN_MIN_LG = getEmString(SCREEN_LG);
var SCREEN_XL = SCREEN_SIZE_MIN_XL / ROOT_FONTSIZE;
var SCREEN_MIN_XL = getEmString(SCREEN_XL);
var SCREEN_MAX_XS = getEmString(SCREEN_SM - 1 / ROOT_FONTSIZE);
var SCREEN_MAX_SM = getEmString(SCREEN_MD - 1 / ROOT_FONTSIZE);
var SCREEN_MAX_MD = getEmString(SCREEN_LG - 1 / ROOT_FONTSIZE);
var SCREEN_MAX_LG = getEmString(SCREEN_XL - 1 / ROOT_FONTSIZE); // Pixel
// MIN

var SCREEN_MIN_XS_PX = getPxString(SCREEN_SIZE_MIN_XS);
var SCREEN_MIN_SM_PX = getPxString(SCREEN_SIZE_MIN_SM);
var SCREEN_MIN_MD_PX = getPxString(SCREEN_SIZE_MIN_MD);
var SCREEN_MIN_LG_PX = getPxString(SCREEN_SIZE_MIN_LG);
var SCREEN_MIN_XL_PX = getPxString(SCREEN_SIZE_MIN_XL); // MAX

var SCREEN_MAX_XS_PX = getPxString(SCREEN_SIZE_MIN_SM - 1);
var SCREEN_MAX_SM_PX = getPxString(SCREEN_SIZE_MIN_MD - 1);
var SCREEN_MAX_MD_PX = getPxString(SCREEN_SIZE_MIN_LG - 1);
var SCREEN_MAX_LG_PX = getPxString(SCREEN_SIZE_MIN_XL - 1);

var Breakpoint = /*#__PURE__*/ Object.freeze({
  SCREEN_MIN_XS: SCREEN_MIN_XS,
  SCREEN_MIN_SM: SCREEN_MIN_SM,
  SCREEN_MIN_MD: SCREEN_MIN_MD,
  SCREEN_MIN_LG: SCREEN_MIN_LG,
  SCREEN_MIN_XL: SCREEN_MIN_XL,
  SCREEN_MAX_XS: SCREEN_MAX_XS,
  SCREEN_MAX_SM: SCREEN_MAX_SM,
  SCREEN_MAX_MD: SCREEN_MAX_MD,
  SCREEN_MAX_LG: SCREEN_MAX_LG,
  SCREEN_MIN_XS_PX: SCREEN_MIN_XS_PX,
  SCREEN_MIN_SM_PX: SCREEN_MIN_SM_PX,
  SCREEN_MIN_MD_PX: SCREEN_MIN_MD_PX,
  SCREEN_MIN_LG_PX: SCREEN_MIN_LG_PX,
  SCREEN_MIN_XL_PX: SCREEN_MIN_XL_PX,
  SCREEN_MAX_XS_PX: SCREEN_MAX_XS_PX,
  SCREEN_MAX_SM_PX: SCREEN_MAX_SM_PX,
  SCREEN_MAX_MD_PX: SCREEN_MAX_MD_PX,
  SCREEN_MAX_LG_PX: SCREEN_MAX_LG_PX
});

// Inspired from RADIX
// https://design.lyft.com/re-approaching-color-9e604ba22c88
// https://www.colorbox.io
// https://github.com/lyft/coloralgorithm
var BLACK = "hsl(0, 0%, 0%)";
var BLACK_900 = "hsla(0, 0%, 0%, .9)";
var BLACK_700 = "hsla(0, 0%, 0%, .7)";
var BLACK_500 = "hsla(0, 0%, 0%, .5)";
var BLACK_300 = "hsla(0, 0%, 0%, .3)";
var BLACK_100 = "hsla(0, 0%, 0%, .1)";
var WHITE = "hsl(0, 0%, 100%)";
var WHITE_900 = "hsla(0, 0%, 100%, .9)";
var WHITE_700 = "hsla(0, 0%, 100%, .7)";
var WHITE_500 = "hsla(0, 0%, 100%, .5)";
var WHITE_300 = "hsla(0, 0%, 100%, .3)";
var WHITE_100 = "hsla(0, 0%, 100%, .1)";
var GRAY_100 = "hsl(208, 32%, 99%)";
var GRAY_200 = "hsl(208, 28%, 97%)";
var GRAY_300 = "hsl(208, 24%, 93%)";
var GRAY_400 = "hsl(208, 20%, 86%)";
var GRAY_500 = "hsl(208, 16%, 76%)";
var GRAY_600 = "hsl(208, 12%, 46%)";
var GRAY_700 = "hsl(208, 16%, 15%)";
var GRAY_800 = "hsl(208, 20%, 10%)";
var GRAY_900 = "hsl(208, 24%, 7%)";
var BLUE_100 = "hsl(208, 99%, 99%)";
var BLUE_200 = "hsl(208, 96%, 97%)";
var BLUE_300 = "hsl(208, 78%, 78%)";
var BLUE_400 = "hsl(208, 76%, 68%)";
var BLUE_500 = "hsl(208, 98%, 50%)";
var BLUE_600 = "hsl(208, 82%, 45%)";
var BLUE_700 = "hsl(208, 99%, 35%)";
var BLUE_800 = "hsl(208, 99%, 12%)";
var BLUE_900 = "hsl(208, 99%, 10%)";
var GREEN_100 = "hsl(142, 60%, 99%)";
var GREEN_200 = "hsl(142, 60%, 97%)";
var GREEN_300 = "hsl(142, 40%, 72%)";
var GREEN_400 = "hsl(142, 34%, 64%)";
var GREEN_500 = "hsl(142, 68%, 42%)";
var GREEN_600 = "hsl(142, 62%, 40%)";
var GREEN_700 = "hsl(142, 60%, 38%)";
var GREEN_800 = "hsl(142, 60%, 12%)";
var GREEN_900 = "hsl(142, 60%, 10%)";
var YELLOW_100 = "hsl(54, 100%, 99%)";
var YELLOW_200 = "hsl(54, 100%, 97%)";
var YELLOW_300 = "hsl(54, 100%, 92%)";
var YELLOW_400 = "hsl(54, 100%, 72%)";
var YELLOW_500 = "hsl(52, 100%, 46%)";
var YELLOW_600 = "hsl(52, 100%, 40%)";
var YELLOW_700 = "hsl(52, 100%, 18%)";
var YELLOW_800 = "hsl(52, 100%, 13%)";
var YELLOW_900 = "hsl(52, 100%, 10%)";
var RED_100 = "hsl(0, 100%, 99%)";
var RED_200 = "hsl(0, 100%, 97%)";
var RED_300 = "hsl(0, 85%, 72%)";
var RED_400 = "hsl(0, 85%, 78%)";
var RED_500 = "hsl(0, 100%, 65%)";
var RED_600 = "hsl(0, 100%, 45%)";
var RED_700 = "hsl(0, 100%, 40%)";
var RED_800 = "hsl(0, 100%, 12%)";
var RED_900 = "hsl(0, 100%, 10%)";
var COLOR_FACEBOOK = "#4267b2";
var COLOR_TWITTER = "#1da1f2";

var Colors = /*#__PURE__*/ Object.freeze({
  BLACK: BLACK,
  BLACK_900: BLACK_900,
  BLACK_700: BLACK_700,
  BLACK_500: BLACK_500,
  BLACK_300: BLACK_300,
  BLACK_100: BLACK_100,
  WHITE: WHITE,
  WHITE_900: WHITE_900,
  WHITE_700: WHITE_700,
  WHITE_500: WHITE_500,
  WHITE_300: WHITE_300,
  WHITE_100: WHITE_100,
  GRAY_100: GRAY_100,
  GRAY_200: GRAY_200,
  GRAY_300: GRAY_300,
  GRAY_400: GRAY_400,
  GRAY_500: GRAY_500,
  GRAY_600: GRAY_600,
  GRAY_700: GRAY_700,
  GRAY_800: GRAY_800,
  GRAY_900: GRAY_900,
  BLUE_100: BLUE_100,
  BLUE_200: BLUE_200,
  BLUE_300: BLUE_300,
  BLUE_400: BLUE_400,
  BLUE_500: BLUE_500,
  BLUE_600: BLUE_600,
  BLUE_700: BLUE_700,
  BLUE_800: BLUE_800,
  BLUE_900: BLUE_900,
  GREEN_100: GREEN_100,
  GREEN_200: GREEN_200,
  GREEN_300: GREEN_300,
  GREEN_400: GREEN_400,
  GREEN_500: GREEN_500,
  GREEN_600: GREEN_600,
  GREEN_700: GREEN_700,
  GREEN_800: GREEN_800,
  GREEN_900: GREEN_900,
  YELLOW_100: YELLOW_100,
  YELLOW_200: YELLOW_200,
  YELLOW_300: YELLOW_300,
  YELLOW_400: YELLOW_400,
  YELLOW_500: YELLOW_500,
  YELLOW_600: YELLOW_600,
  YELLOW_700: YELLOW_700,
  YELLOW_800: YELLOW_800,
  YELLOW_900: YELLOW_900,
  RED_100: RED_100,
  RED_200: RED_200,
  RED_300: RED_300,
  RED_400: RED_400,
  RED_500: RED_500,
  RED_600: RED_600,
  RED_700: RED_700,
  RED_800: RED_800,
  RED_900: RED_900,
  COLOR_FACEBOOK: COLOR_FACEBOOK,
  COLOR_TWITTER: COLOR_TWITTER
});

var H1 = getTypographicElement({
  level: _TYPO_H1_SCALE,
  xLineHeight: _TYPO_H1_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT,
  fontFamily: TYPO_FONT_FAMILY,
  before: _TYPO_H1_SPACING_BEFORE,
  after: _TYPO_H1_SPACING_AFTER
});
var H2 = getTypographicElement({
  level: _TYPO_H2_SCALE,
  xLineHeight: _TYPO_H2_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT,
  fontFamily: TYPO_FONT_FAMILY,
  before: _TYPO_H2_SPACING_BEFORE,
  after: _TYPO_H2_SPACING_AFTER
});
var H3 = getTypographicElement({
  level: _TYPO_H3_SCALE,
  xLineHeight: _TYPO_H3_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT,
  fontFamily: TYPO_FONT_FAMILY,
  before: _TYPO_H3_SPACING_BEFORE,
  after: _TYPO_H3_SPACING_AFTER
});
var H4 = getTypographicElement({
  level: _TYPO_H4_SCALE,
  xLineHeight: _TYPO_H4_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT,
  fontFamily: TYPO_FONT_FAMILY,
  before: _TYPO_H4_SPACING_BEFORE,
  after: _TYPO_H4_SPACING_AFTER
});
var H5 = getTypographicElement({
  level: _TYPO_H5_SCALE,
  xLineHeight: _TYPO_H5_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT,
  fontFamily: TYPO_FONT_FAMILY,
  before: _TYPO_H5_SPACING_BEFORE,
  after: _TYPO_H5_SPACING_AFTER
});
var H6 = getTypographicElement({
  level: _TYPO_H6_SCALE,
  xLineHeight: _TYPO_H6_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT,
  fontFamily: TYPO_FONT_FAMILY,
  before: _TYPO_H6_SPACING_BEFORE,
  after: _TYPO_H6_SPACING_AFTER
});
var P = getTypographicElement({
  level: _TYPO_P_SCALE,
  xLineHeight: _TYPO_P_LINEHEIGHT,
  capHeight: _TYPO_CAP_HEIGHT_BODY,
  fontFamily: TYPO_FONT_FAMILY_BODY,
  before: _TYPO_P_SPACING_BEFORE,
  after: _TYPO_P_SPACING_AFTER
});

var CSSFont = /*#__PURE__*/ Object.freeze({
  H1: H1,
  H2: H2,
  H3: H3,
  H4: H4,
  H5: H5,
  H6: H6,
  P: P
});

var linear = bezier(0.5, 0.5, 0.5, 0.5);
var easeInCubic = bezier(0.55, 0.055, 0.675, 0.19);
var easeOutCubic = bezier(0.215, 0.61, 0.355, 1);
var easeInOutCubic = bezier(0.645, 0.045, 0.355, 1);
var easeInSine = bezier(0.47, 0, 0.745, 0.715);
var easeOutSine = bezier(0.39, 0.575, 0.565, 1);
var easeInOutSine = bezier(0.445, 0.05, 0.55, 0.95);
var easeInQuad = bezier(0.55, 0.085, 0.68, 0.53);
var easeOutQuad = bezier(0.25, 0.46, 0.45, 0.94);
var easeInOutQuad = bezier(0.455, 0.03, 0.515, 0.955);
var easeInQuart = bezier(0.895, 0.03, 0.685, 0.22);
var easeOutQuart = bezier(0.165, 0.84, 0.44, 1);
var easeInOutQuart = bezier(0.77, 0, 0.175, 1);
var easeInCirc = bezier(0.6, 0.04, 0.98, 0.335);
var easeOutCirc = bezier(0.075, 0.82, 0.165, 1);
var easeInOutCirc = bezier(0.785, 0.135, 0.15, 0.86);
var easeInQuint = bezier(0.755, 0.05, 0.855, 0.06);
var easeOutQuint = bezier(0.23, 1, 0.32, 1);
var easeInOutQuint = bezier(0.86, 0, 0.07, 1);
var easeInExpo = bezier(0.95, 0.05, 0.795, 0.035);
var easeOutExpo = bezier(0.19, 1, 0.22, 1);
var easeInOutExpo = bezier(1, 0, 0, 1);
var easeInBack = bezier(0.6, -0.28, 0.735, 0.045);
var easeOutBack = bezier(0.175, 0.885, 0.32, 1.275);
var easeInOutBack = bezier(0.68, -0.55, 0.265, 1.55);

var Curves = /*#__PURE__*/ Object.freeze({
  linear: linear,
  easeInCubic: easeInCubic,
  easeOutCubic: easeOutCubic,
  easeInOutCubic: easeInOutCubic,
  easeInSine: easeInSine,
  easeOutSine: easeOutSine,
  easeInOutSine: easeInOutSine,
  easeInQuad: easeInQuad,
  easeOutQuad: easeOutQuad,
  easeInOutQuad: easeInOutQuad,
  easeInQuart: easeInQuart,
  easeOutQuart: easeOutQuart,
  easeInOutQuart: easeInOutQuart,
  easeInCirc: easeInCirc,
  easeOutCirc: easeOutCirc,
  easeInOutCirc: easeInOutCirc,
  easeInQuint: easeInQuint,
  easeOutQuint: easeOutQuint,
  easeInOutQuint: easeInOutQuint,
  easeInExpo: easeInExpo,
  easeOutExpo: easeOutExpo,
  easeInOutExpo: easeInOutExpo,
  easeInBack: easeInBack,
  easeOutBack: easeOutBack,
  easeInOutBack: easeInOutBack
});

function distribute(value, rangeA, rangeB) {
  var _Array$from = Array.from(rangeA),
    _Array$from2 = _slicedToArray(_Array$from, 2),
    fromLow = _Array$from2[0],
    fromHigh = _Array$from2[1];

  var _Array$from3 = Array.from(rangeB),
    _Array$from4 = _slicedToArray(_Array$from3, 2),
    toLow = _Array$from4[0],
    toHigh = _Array$from4[1];

  var result =
    toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow);

  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow;
    }

    if (result > toHigh) {
      return toHigh;
    }
  } else {
    if (result > toLow) {
      return toLow;
    }

    if (result < toHigh) {
      return toHigh;
    }
  }

  return result;
}

function generate(_ref) {
  var specs = _ref.specs;

  function generateNumberOfSteps(curve, steps) {
    var array = [];

    for (var step in Array.from(Array(steps).keys())) {
      var value = curve(step / (steps - 1));
      array.push(value);
    }

    array.reverse();
    return array;
  }

  var lum_array = generateNumberOfSteps(Curves[specs.lum_curve], specs.steps);
  var sat_array = generateNumberOfSteps(Curves[specs.sat_curve], specs.steps);
  var hue_array = generateNumberOfSteps(Curves[specs.hue_curve], specs.steps);
  var lum_array_adjusted = [];
  var sat_array_adjusted = [];
  var hue_array_adjusted = [];

  for (var index in lum_array) {
    var _step = lum_array[index];
    lum_array_adjusted.push(
      distribute(
        _step,
        [0, 1],
        [specs.lum_end * 0.01, specs.lum_start * 0.01],
        true
      )
    );
  }

  for (var index in sat_array) {
    var _step2 = sat_array[index];
    var sat_step = distribute(
      _step2,
      [0, 1],
      [specs.sat_start * 0.01, specs.sat_end * 0.01],
      true
    );
    sat_step = sat_step * (specs.sat_rate * 0.01);
    sat_array_adjusted.push(sat_step);
  }

  for (var index in hue_array) {
    var _step3 = hue_array[index];
    hue_array_adjusted.push(
      distribute(_step3, [0, 1], [specs.hue_start, specs.hue_end])
    );
  }

  sat_array_adjusted.reverse();
  hue_array_adjusted.reverse();
  lum_array = lum_array_adjusted;
  sat_array = sat_array_adjusted;
  hue_array = hue_array_adjusted;
  var colorMap = [];

  for (var index in lum_array) {
    var step = lum_array[index];
    var params = {
      hue: hue_array[index],
      saturation: sat_array[index],
      luminosity: lum_array[index]
    };

    if (params.saturation > 1) {
      params.saturation = 1;
    }

    var hex = chroma(
      chroma.hsv([params.hue, params.saturation, params.luminosity])
    );
    var hexRGB = chroma(
      chroma.hsv([params.hue, params.saturation, params.luminosity])
    ).rgb();
    var contrastWhite = chroma.contrast(hex, "white").toFixed(2);
    var contrastBlack = chroma.contrast(hex, "black").toFixed(2);
    var displayColor = "";

    if (contrastWhite >= 4.5) {
      displayColor = "white";
    } else {
      displayColor = "black";
    }

    var colorObj = {
      hex: chroma(hex).hex(),
      hue: chroma(hex).hsv()[0],
      sat: chroma(hex).hsv()[1],
      lum: chroma(hex).hsv()[2],
      hsv: chroma(hex).hsv(),
      hsl: chroma(hex).hsl(),
      rgb: chroma(hex).rgb(),
      hueRange: [specs.hue_start, specs.hue_end],
      steps: specs.steps,
      label: specs.modifier * index,
      contrastBlack: contrastBlack,
      contrastWhite: contrastWhite,
      displayColor: displayColor
    };
    colorMap.push(colorObj);
  }

  return colorMap;
}

var brandColorScheme_one = {
  specs: {
    // Number of colors
    steps: 11,
    // Hue Start Value (0 - 359)
    hue_start: 315,
    // Hue End Value (0 - 359)
    hue_end: 293,
    // Hue Curve (See Curves Section)
    hue_curve: "easeInQuad",
    // Saturation Start Value (0 - 100)
    sat_start: 4,
    // Saturation End Value (0 - 100)
    sat_end: 90,
    // Saturation Curve (See Curves Section)
    sat_curve: "easeOutQuad",
    // Saturation Rate (0 - 200)
    sat_rate: 130,
    // Luminosity Start Value (0 - 100)
    lum_start: 100,
    // Luminosity End Value (0 - 100)
    lum_end: 53,
    // Luminosity Curve (See Curves Section)
    lum_curve: "easeOutQuad",
    // Modifier Scale
    // Every generated color gets a modifier (label) that
    // indicates its lightness. A value of 10 results in
    // two-digit modifiers. The lightest color will be 0 (e.g. Red 0)
    // and the darkest color will be 100 (e.g. Red 100), given
    // that you generate 11 colors
    modifier: 10
  }
};
var colorArray = generate(brandColorScheme_one);
var _WIP_DEBUG_BRANDCOLOR_SCHEME_RESULT = colorArray;

var BrandColors = /*#__PURE__*/ Object.freeze({
  _WIP_DEBUG_BRANDCOLOR_SCHEME_RESULT: _WIP_DEBUG_BRANDCOLOR_SCHEME_RESULT
});

var EM_1PX = 1 / ROOT_FONTSIZE;
var SPACER = TYPO_BASE_LINE_HEIGHT;
var SPACER_MINUS_1PX = TYPO_BASE_LINE_HEIGHT - EM_1PX;
var SPACER_HALF = TYPO_BASE_LINE_HEIGHT / 2;
var SPACER_HALF_MINUS_1PX = TYPO_BASE_LINE_HEIGHT / 2 - EM_1PX;
var SPACER_ONE_THIRD = TYPO_BASE_LINE_HEIGHT / 3;
var SPACER_ONE_THIRD_MINUS_1PX = TYPO_BASE_LINE_HEIGHT / 3 - EM_1PX;
var SPACER_TWO_THIRD = (TYPO_BASE_LINE_HEIGHT / 3) * 2;
var SPACER_TWO_THIRD_MINUS_1PX = (TYPO_BASE_LINE_HEIGHT / 3) * 2 - EM_1PX;

var Grid = /*#__PURE__*/ Object.freeze({
  EM_1PX: EM_1PX,
  SPACER: SPACER,
  SPACER_MINUS_1PX: SPACER_MINUS_1PX,
  SPACER_HALF: SPACER_HALF,
  SPACER_HALF_MINUS_1PX: SPACER_HALF_MINUS_1PX,
  SPACER_ONE_THIRD: SPACER_ONE_THIRD,
  SPACER_ONE_THIRD_MINUS_1PX: SPACER_ONE_THIRD_MINUS_1PX,
  SPACER_TWO_THIRD: SPACER_TWO_THIRD,
  SPACER_TWO_THIRD_MINUS_1PX: SPACER_TWO_THIRD_MINUS_1PX
});

var grid = TYPO_BASE_LINE_HEIGHT / 3;
var GUTTER_SX = getEmString(1 * grid);
var GUTTER_SM = getEmString(1 * grid);
var GUTTER_MD = getEmString(2 * grid);
var GUTTER_LG = getEmString(3 * grid);
var GUTTER_XL = getEmString(3 * grid);

var Gutter = /*#__PURE__*/ Object.freeze({
  GUTTER_SX: GUTTER_SX,
  GUTTER_SM: GUTTER_SM,
  GUTTER_MD: GUTTER_MD,
  GUTTER_LG: GUTTER_LG,
  GUTTER_XL: GUTTER_XL
});

var MARGIN_SX = getEmString(SPACER_TWO_THIRD); // ~ 16.6

var MARGIN_SM = getEmString(SPACER_TWO_THIRD); // ~ 16.6

var MARGIN_MD = getEmString(SPACER); // ~24

var MARGIN_LG = getEmString(2 * SPACER_TWO_THIRD); // ~32

var MARGIN_XL = getEmString(2 * SPACER_TWO_THIRD); // ~32

var Margin = /*#__PURE__*/ Object.freeze({
  MARGIN_SX: MARGIN_SX,
  MARGIN_SM: MARGIN_SM,
  MARGIN_MD: MARGIN_MD,
  MARGIN_LG: MARGIN_LG,
  MARGIN_XL: MARGIN_XL
});

var ZINDEX_GROUND = 0;
var ZINDEX_DROPDOWN = 1000;
var ZINDEX_STICKY = 1020;
var ZINDEX_FIXED = 1030;
var ZINDEX_MODAL_BACKDROP = 1040;
var ZINDEX_MODAL = 1050;
var ZINDEX_POPOVER = 1060;
var ZINDEX_TOOLTIP = 1070;

var ZIndex = /*#__PURE__*/ Object.freeze({
  ZINDEX_GROUND: ZINDEX_GROUND,
  ZINDEX_DROPDOWN: ZINDEX_DROPDOWN,
  ZINDEX_STICKY: ZINDEX_STICKY,
  ZINDEX_FIXED: ZINDEX_FIXED,
  ZINDEX_MODAL_BACKDROP: ZINDEX_MODAL_BACKDROP,
  ZINDEX_MODAL: ZINDEX_MODAL,
  ZINDEX_POPOVER: ZINDEX_POPOVER,
  ZINDEX_TOOLTIP: ZINDEX_TOOLTIP
});

var DSV = _objectSpread(
  {},
  Breakpoint,
  Typography,
  Colors,
  Grid,
  Gutter,
  Margin,
  ZIndex,
  CSSFont,
  BrandColors,
  {
    _Rhythm: _Rhythm
  }
);

export default DSV;
