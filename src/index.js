import * as Breakpoint from './Breakpoint'
import * as Typography from './Typography'
import * as Colors from './Colors'
import * as Style from './CSSFont';
import * as BrandColors from './BrandColors';
import * as Gutter from './Gutter';
import * as Margin from './Margin';
import * as ZIndex from './ZIndex';

import * as Rhythm from './Rhythm'

const DSV = {
    ...Breakpoint,
    ...Typography,
    ...Colors,
    ...BrandColors,
    ...Gutter,
    ...Margin,
    ...ZIndex,
}

export {
    Rhythm,
    Style,
}

export default DSV;