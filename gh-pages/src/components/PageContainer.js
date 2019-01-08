import React from 'react';
import { ROOT_FONTSIZE, TYPO_BASE_LINE_HEIGHT, EM_1PX } from './../design-system-variables';

const showGrid = (show) => {
  if (show) {
    return {
      background: 'linear-gradient(to bottom, rgba( 32,160,255,.35 ) 1px, transparent 1px)',
      backgroundSize: `100% ${Math.round((TYPO_BASE_LINE_HEIGHT - EM_1PX) * ROOT_FONTSIZE )/2}px`,
    };
  } 
}

const PageContainer = ({children, grid = false}) => <div style={showGrid(grid)}>{children}</div>;

export default PageContainer;