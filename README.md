# Design-System-Variables

Variables Design System for Grid, Layout, Media Queries, Responsive Design, Typography Rhythm and colors.
A “ready to use” set of variables for Design System.

Low level variables for CSS in JS.

# Typography

## Fonts

* 1 heading font (Lora serif font)
* 1 body font (Nato sans serif font)

## Colors 

* 4 brand colors

# Layout, Columns, gutters, and margins

## Columns

Content is placed in the areas of the screen that contain columns. 
Column width is defined using percentages.

* COL_NUMB_SX = 4;
* COL_NUMB_SM = 4;
* COL_NUMB_MD = 8;
* COL_NUMB_LG = 12;
* COL_NUMB_XL = 12;

## Gutters

Gutters are the spaces between columns. They help separate content. 
Gutter widths are fixed values at each breakpoint range.

* GUTTER_SX
* GUTTER_SM
* GUTTER_MD
* GUTTER_LG
* GUTTER_XL






## How to use



### Variables list

```json

{
    "Rhythm": {
        "MINOR_THIRD": 1.2,
        "MAJOR_THIRD": 1.25,
        "FOURTH": 1.333,
        "FIFTH": 1.5,
        "FIBONACCI": 1.618,
        "MINOR_SEVENTH": 1.778,
        "MAJOR_SEVENTH": 1.875,
        "OCTAVE": 2
    },
    "Style": {
        "default": {
            "h1": {
                "fontSize": "110.000em",
                "lineHeight": "130.000em",
                "paddingTop": "54.000em",
                "marginBottom": "24.000em"
            },
            "h2": {
                "fontSize": "68.000em",
                "lineHeight": "78.000em",
                "paddingTop": "42.000em",
                "marginBottom": "10.000em"
            },
            "h3": {
                "fontSize": "42.000em",
                "lineHeight": "52.000em",
                "paddingTop": "38.000em",
                "marginBottom": "14.000em"
            },
            "h4": {
                "fontSize": "26.000em",
                "lineHeight": "52.000em",
                "paddingTop": "43.000em",
                "marginBottom": "9.000em"
            },
            "h5": {
                "fontSize": "16.000em",
                "lineHeight": "26.000em",
                "paddingTop": "34.000em",
                "marginBottom": "18.000em"
            },
            "h6": {
                "fontSize": "13.000em",
                "lineHeight": "26.000em",
                "paddingTop": "35.000em",
                "marginBottom": "17.000em"
            },
            "p": {
                "fontSize": "16.000em",
                "lineHeight": "26.000em",
                "paddingTop": "8.000em",
                "marginBottom": "18.000em"
            }
        }
    },
    "default": {
        "SCREEN_MIN_XS": 0,
        "SCREEN_MIN_SM": "37.500em",
        "SCREEN_MIN_MD": "64.000em",
        "SCREEN_MIN_LG": "90.000em",
        "SCREEN_MIN_XL": "120.000em",
        "SCREEN_MAX_XS": "37.438em",
        "SCREEN_MAX_SM": "63.938em",
        "SCREEN_MAX_MD": "89.938em",
        "SCREEN_MAX_LG": "119.938em",
        "SCREEN_MIN_XS_PX": 0,
        "SCREEN_MIN_SM_PX": "600px",
        "SCREEN_MIN_MD_PX": "1024px",
        "SCREEN_MIN_LG_PX": "1440px",
        "SCREEN_MIN_XL_PX": "1920px",
        "SCREEN_MAX_XS_PX": "599px",
        "SCREEN_MAX_SM_PX": "1023px",
        "SCREEN_MAX_MD_PX": "1439px",
        "SCREEN_MAX_LG_PX": "1919px",
        "TYPO_FONT_FAMILY": "fontname",
        "TYPO_CAP_HEIGHT": 0.68,
        "ROOT_FONTSIZE": 16,
        "TYPO_BASE_LINE_HEIGHT": 1.6,
        "RHYTHM_SCALE": 1.618,
        "TYPO_BOLD_HEADERS": true,
        "TYPO_SCALE_H1": 4,
        "TYPO_SCALE_H2": 3,
        "TYPO_SCALE_H3": 2,
        "TYPO_SCALE_H4": 1,
        "TYPO_SCALE_H5": 0,
        "TYPO_SCALE_H6": -0.5,
        "TYPO_HEADER_SPACING_BEFORE": 1,
        "TYPO_HEADER_SPACING_AFTER": 0,
        "TYPO_UNIT": "em",
        "BLACK": "hsl(0, 0%, 0%)",
        "BLACK_900": "hsla(0, 0%, 0%, .9)",
        "BLACK_700": "hsla(0, 0%, 0%, .7)",
        "BLACK_500": "hsla(0, 0%, 0%, .5)",
        "BLACK_300": "hsla(0, 0%, 0%, .3)",
        "BLACK_100": "hsla(0, 0%, 0%, .1)",
        "WHITE": "hsl(0, 0%, 100%)",
        "WHITE_900": "hsla(0, 0%, 100%, .9)",
        "WHITE_700": "hsla(0, 0%, 100%, .7)",
        "WHITE_500": "hsla(0, 0%, 100%, .5)",
        "WHITE_300": "hsla(0, 0%, 100%, .3)",
        "WHITE_100": "hsla(0, 0%, 100%, .1)",
        "GRAY_100": "hsl(208, 32%, 99%)",
        "GRAY_200": "hsl(208, 28%, 97%)",
        "GRAY_300": "hsl(208, 24%, 93%)",
        "GRAY_400": "hsl(208, 20%, 86%)",
        "GRAY_500": "hsl(208, 16%, 76%)",
        "GRAY_600": "hsl(208, 12%, 46%)",
        "GRAY_700": "hsl(208, 16%, 15%)",
        "GRAY_800": "hsl(208, 20%, 10%)",
        "GRAY_900": "hsl(208, 24%, 7%)",
        "BLUE_100": "hsl(208, 99%, 99%)",
        "BLUE_200": "hsl(208, 96%, 97%)",
        "BLUE_300": "hsl(208, 78%, 78%)",
        "BLUE_400": "hsl(208, 76%, 68%)",
        "BLUE_500": "hsl(208, 98%, 50%)",
        "BLUE_600": "hsl(208, 82%, 45%)",
        "BLUE_700": "hsl(208, 99%, 35%)",
        "BLUE_800": "hsl(208, 99%, 12%)",
        "BLUE_900": "hsl(208, 99%, 10%)",
        "GREEN_100": "hsl(142, 60%, 99%)",
        "GREEN_200": "hsl(142, 60%, 97%)",
        "GREEN_300": "hsl(142, 40%, 72%)",
        "GREEN_400": "hsl(142, 34%, 64%)",
        "GREEN_500": "hsl(142, 68%, 42%)",
        "GREEN_600": "hsl(142, 62%, 40%)",
        "GREEN_700": "hsl(142, 60%, 38%)",
        "GREEN_800": "hsl(142, 60%, 12%)",
        "GREEN_900": "hsl(142, 60%, 10%)",
        "YELLOW_100": "hsl(54, 100%, 99%)",
        "YELLOW_200": "hsl(54, 100%, 97%)",
        "YELLOW_300": "hsl(54, 100%, 92%)",
        "YELLOW_400": "hsl(54, 100%, 72%)",
        "YELLOW_500": "hsl(52, 100%, 46%)",
        "YELLOW_600": "hsl(52, 100%, 40%)",
        "YELLOW_700": "hsl(52, 100%, 18%)",
        "YELLOW_800": "hsl(52, 100%, 13%)",
        "YELLOW_900": "hsl(52, 100%, 10%)",
        "RED_100": "hsl(0, 100%, 99%)",
        "RED_200": "hsl(0, 100%, 97%)",
        "RED_300": "hsl(0, 85%, 72%)",
        "RED_400": "hsl(0, 85%, 78%)",
        "RED_500": "hsl(0, 100%, 65%)",
        "RED_600": "hsl(0, 100%, 45%)",
        "RED_700": "hsl(0, 100%, 40%)",
        "RED_800": "hsl(0, 100%, 12%)",
        "RED_900": "hsl(0, 100%, 10%)",
        "COLOR_FACEBOOK": "#4267b2",
        "COLOR_TWITTER": "#1da1f2",
        "ZINDEX_GROUND": 0,
        "ZINDEX_DROPDOWN": 1000,
        "ZINDEX_sticky": 1020,
        "ZINDEX_FIXED": 1030,
        "ZINDEX_MODAL_BACKDROP": 1040,
        "ZINDEX_MODAL": 1050,
        "ZINDEX_POPOVER": 1060,
        "ZINDEX_TOOLTIP": 1070
    }
}

```

##  Create your onw set


## Get Cap height of a font.





https://github.com/sebdesign/cap-height




