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

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

// Scale Rhythm
var MINOR_THIRD = 1.2;
var MAJOR_THIRD = 1.25;
var FOURTH = 1.333;
var FIFTH = 1.5;
var FIBONACCI = 1.618;
var MINOR_SEVENTH = 1.778;
var MAJOR_SEVENTH = 1.875;
var OCTAVE = 2.0;

var Rhythm = /*#__PURE__*/Object.freeze({
  MINOR_THIRD: MINOR_THIRD,
  MAJOR_THIRD: MAJOR_THIRD,
  FOURTH: FOURTH,
  FIFTH: FIFTH,
  FIBONACCI: FIBONACCI,
  MINOR_SEVENTH: MINOR_SEVENTH,
  MAJOR_SEVENTH: MAJOR_SEVENTH,
  OCTAVE: OCTAVE
});

var TYPO_FONT_FAMILY = "fontname"; // 

var TYPO_CAP_HEIGHT = 0.68; // Base font size (px)

var ROOT_FONTSIZE = 16; // Base line height

var TYPO_BASE_LINE_HEIGHT = 1.6;
var RHYTHM_SCALE = FIBONACCI; // Bold headers

var TYPO_BOLD_HEADERS = true; // Scale Rhythm adjustment

var TYPO_SCALE_H1 = 4;
var TYPO_SCALE_H2 = 3;
var TYPO_SCALE_H3 = 2;
var TYPO_SCALE_H4 = 1;
var TYPO_SCALE_H5 = 0;
var TYPO_SCALE_H6 = -1; // Extra header spacing

var TYPO_HEADER_SPACING_BEFORE = 1;
var TYPO_HEADER_SPACING_AFTER = 0;

var Typography = /*#__PURE__*/Object.freeze({
  TYPO_FONT_FAMILY: TYPO_FONT_FAMILY,
  TYPO_CAP_HEIGHT: TYPO_CAP_HEIGHT,
  ROOT_FONTSIZE: ROOT_FONTSIZE,
  TYPO_BASE_LINE_HEIGHT: TYPO_BASE_LINE_HEIGHT,
  RHYTHM_SCALE: RHYTHM_SCALE,
  TYPO_BOLD_HEADERS: TYPO_BOLD_HEADERS,
  TYPO_SCALE_H1: TYPO_SCALE_H1,
  TYPO_SCALE_H2: TYPO_SCALE_H2,
  TYPO_SCALE_H3: TYPO_SCALE_H3,
  TYPO_SCALE_H4: TYPO_SCALE_H4,
  TYPO_SCALE_H5: TYPO_SCALE_H5,
  TYPO_SCALE_H6: TYPO_SCALE_H6,
  TYPO_HEADER_SPACING_BEFORE: TYPO_HEADER_SPACING_BEFORE,
  TYPO_HEADER_SPACING_AFTER: TYPO_HEADER_SPACING_AFTER
});

var SCREEN_SIZE_MIN_XS = 0;
var SCREEN_SIZE_MIN_SM = 600;
var SCREEN_SIZE_MIN_MD = 1024;
var SCREEN_SIZE_MIN_LG = 1440;
var SCREEN_SIZE_MIN_XL = 1920;

var SCREEN_XS = SCREEN_SIZE_MIN_XS / ROOT_FONTSIZE; // Extra small screen / phone

var SCREEN_MIN_XS = "".concat(SCREEN_XS, "em");
var SCREEN_SM = SCREEN_SIZE_MIN_SM / ROOT_FONTSIZE;
var SCREEN_MIN_SM = "".concat(SCREEN_SM, "em");
var SCREEN_MD = SCREEN_SIZE_MIN_MD / ROOT_FONTSIZE;
var SCREEN_MIN_MD = "".concat(SCREEN_MD, "em");
var SCREEN_LG = SCREEN_SIZE_MIN_LG / ROOT_FONTSIZE;
var SCREEN_MIN_LG = "".concat(SCREEN_LG, "em");
var SCREEN_XL = SCREEN_SIZE_MIN_XL / ROOT_FONTSIZE;
var SCREEN_MIN_XL = "".concat(SCREEN_XL, "em");
var SCREEN_MAX_XS = "".concat(SCREEN_SM - 1 / ROOT_FONTSIZE, "em");
var SCREEN_MAX_SM = "".concat(SCREEN_MD - 1 / ROOT_FONTSIZE, "em");
var SCREEN_MAX_MD = "".concat(SCREEN_LG - 1 / ROOT_FONTSIZE, "em");
var SCREEN_MAX_LG = "".concat(SCREEN_XL - 1 / ROOT_FONTSIZE, "em"); // Pixel 
// MIN

var SCREEN_MIN_SM_PX = "".concat(SCREEN_SIZE_MIN_SM, "px");
var SCREEN_MIN_MD_PX = "".concat(SCREEN_SIZE_MIN_MD, "px");
var SCREEN_MIN_LG_PX = "".concat(SCREEN_SIZE_MIN_LG, "px");
var SCREEN_MIN_XL_PX = "".concat(SCREEN_SIZE_MIN_XL, "px"); // MAX

var SCREEN_MAX_XS_PX = "".concat(SCREEN_SIZE_MIN_SM - 1, "px");
var SCREEN_MAX_SM_PX = "".concat(SCREEN_SIZE_MIN_MD - 1, "px");
var SCREEN_MAX_MD_PX = "".concat(SCREEN_SIZE_MIN_LG - 1, "px");
var SCREEN_MAX_LG_PX = "".concat(SCREEN_SIZE_MIN_XL - 1, "px");

var Breakpoint = /*#__PURE__*/Object.freeze({
  SCREEN_MIN_XS: SCREEN_MIN_XS,
  SCREEN_MIN_SM: SCREEN_MIN_SM,
  SCREEN_MIN_MD: SCREEN_MIN_MD,
  SCREEN_MIN_LG: SCREEN_MIN_LG,
  SCREEN_MIN_XL: SCREEN_MIN_XL,
  SCREEN_MAX_XS: SCREEN_MAX_XS,
  SCREEN_MAX_SM: SCREEN_MAX_SM,
  SCREEN_MAX_MD: SCREEN_MAX_MD,
  SCREEN_MAX_LG: SCREEN_MAX_LG,
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
var BLACK = 'hsl(0, 0%, 0%)';
var BLACK_900 = 'hsla(0, 0%, 0%, .9)';
var BLACK_700 = 'hsla(0, 0%, 0%, .7)';
var BLACK_500 = 'hsla(0, 0%, 0%, .5)';
var BLACK_300 = 'hsla(0, 0%, 0%, .3)';
var BLACK_100 = 'hsla(0, 0%, 0%, .1)';
var WHITE = 'hsl(0, 0%, 100%)';
var WHITE_900 = 'hsla(0, 0%, 100%, .9)';
var WHITE_700 = 'hsla(0, 0%, 100%, .7)';
var WHITE_500 = 'hsla(0, 0%, 100%, .5)';
var WHITE_300 = 'hsla(0, 0%, 100%, .3)';
var WHITE_100 = 'hsla(0, 0%, 100%, .1)';
var GRAY_100 = 'hsl(208, 32%, 99%)';
var GRAY_200 = 'hsl(208, 28%, 97%)';
var GRAY_300 = 'hsl(208, 24%, 93%)';
var GRAY_400 = 'hsl(208, 20%, 86%)';
var GRAY_500 = 'hsl(208, 16%, 76%)';
var GRAY_600 = 'hsl(208, 12%, 46%)';
var GRAY_700 = 'hsl(208, 16%, 15%)';
var GRAY_800 = 'hsl(208, 20%, 10%)';
var GRAY_900 = 'hsl(208, 24%, 7%)';
var BLUE_100 = 'hsl(208, 99%, 99%)';
var BLUE_200 = 'hsl(208, 96%, 97%)';
var BLUE_300 = 'hsl(208, 78%, 78%)';
var BLUE_400 = 'hsl(208, 76%, 68%)';
var BLUE_500 = 'hsl(208, 98%, 50%)';
var BLUE_600 = 'hsl(208, 82%, 45%)';
var BLUE_700 = 'hsl(208, 99%, 35%)';
var BLUE_800 = 'hsl(208, 99%, 12%)';
var BLUE_900 = 'hsl(208, 99%, 10%)';
var GREEN_100 = 'hsl(142, 60%, 99%)';
var GREEN_200 = 'hsl(142, 60%, 97%)';
var GREEN_300 = 'hsl(142, 40%, 72%)';
var GREEN_400 = 'hsl(142, 34%, 64%)';
var GREEN_500 = 'hsl(142, 68%, 42%)';
var GREEN_600 = 'hsl(142, 62%, 40%)';
var GREEN_700 = 'hsl(142, 60%, 38%)';
var GREEN_800 = 'hsl(142, 60%, 12%)';
var GREEN_900 = 'hsl(142, 60%, 10%)';
var YELLOW_100 = 'hsl(54, 100%, 99%)';
var YELLOW_200 = 'hsl(54, 100%, 97%)';
var YELLOW_300 = 'hsl(54, 100%, 92%)';
var YELLOW_400 = 'hsl(54, 100%, 72%)';
var YELLOW_500 = 'hsl(52, 100%, 46%)';
var YELLOW_600 = 'hsl(52, 100%, 40%)';
var YELLOW_700 = 'hsl(52, 100%, 18%)';
var YELLOW_800 = 'hsl(52, 100%, 13%)';
var YELLOW_900 = 'hsl(52, 100%, 10%)';
var RED_100 = 'hsl(0, 100%, 99%)';
var RED_200 = 'hsl(0, 100%, 97%)';
var RED_300 = 'hsl(0, 85%, 72%)';
var RED_400 = 'hsl(0, 85%, 78%)';
var RED_500 = 'hsl(0, 100%, 65%)';
var RED_600 = 'hsl(0, 100%, 45%)';
var RED_700 = 'hsl(0, 100%, 40%)';
var RED_800 = 'hsl(0, 100%, 12%)';
var RED_900 = 'hsl(0, 100%, 10%)';
var COLOR_FACEBOOK = '#4267b2';
var COLOR_TWITTER = '#1da1f2';

var Colors = /*#__PURE__*/Object.freeze({
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

var DSV = _objectSpread({}, Breakpoint, Typography, Colors);

export default DSV;
export { Rhythm };
