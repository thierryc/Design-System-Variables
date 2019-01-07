import React from 'react';
import * as dsv from './../design-system-variables';

export const H1 = ({children}) => <h1 style={{
  ...dsv.H1
}}>{children}</h1>;

export const H2 = ({children}) => <h2 style={{
  ...dsv.H2
}}>{children}</h2>;

export const H3 = ({children}) => <h3 style={{
  ...dsv.H3
}}>{children}</h3>;

export const H4 = ({children}) => <h4 style={{
  ...dsv.H4
}}>{children}</h4>;

export const H5 = ({children}) => <h5 style={{
  ...dsv.H5
}}>{children}</h5>;

export const H6 = ({children}) => <h6 style={{
  ...dsv.H6
}}>{children}</h6>;

export const P = ({children}) => <p style={{
  ...dsv.P
}}>{children}</p>;

export const PLead = ({children}) => <p style={{
  ...dsv.P_LEAD
}}>{children}</p>;

export const Blockquote = ({children}) => <blockquote style={{
  ...dsv.P_LEAD,
  marginTop: `${dsv.SPACER}rem`,
  marginLeft: `-${dsv.SPACER_HALF}rem`,
  marginRight: `-${dsv.SPACER_HALF}rem`,
  paddingLeft: `${dsv.SPACER_HALF_MINUS_1PX}rem`,
  paddingRight: `${dsv.SPACER_HALF}rem`,
  paddingBottom: dsv.P_LEAD.marginBottom,
  marginBottom: 0,
  borderLeft: `1px solid #000000`,
}}>{children}</blockquote>;



