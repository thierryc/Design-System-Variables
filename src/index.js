import * as Breakpoint from './Breakpoint'
import * as Typography from './Typography'
import * as Colors from './Colors'
import * as CSSFont from './CSSFont';
import * as BrandColors from './BrandColors';
import * as Gutter from './Gutter';
import * as Margin from './Margin';
import * as ZIndex from './ZIndex';

import * as _Rhythm from './Rhythm'

const DSV = {
    ...Breakpoint,
    ...Typography,
    ...Colors,
    ...Gutter,
    ...Margin,
    ...ZIndex,
    ...CSSFont,
    ...BrandColors,
    _Rhythm,
}

export default DSV;