import { FIXDIGIT } from './Constant' 

export const getEmString = (val) => (val.toFixed(FIXDIGIT) == 0) ? 0 : `${val.toFixed(FIXDIGIT)}em`;
export const getPxString = (val) => (val === 0) ? val : `${val.toFixed(0)}px`;
