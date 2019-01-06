import chroma from 'chroma-js';

const minimum = {
  aa: 4.5,
  aaLarge: 3,
  aaa: 7,
  aaaLarge: 4.5,
};

export default (hex) => {
  const contrast = chroma.contrast(hex, 'white');
  return {
    hex,
    contrast,
    accessibility: {
      aa: contrast >= minimum.aa,
      aaLarge: contrast >= minimum.aaLarge,
      aaa: contrast >= minimum.aaa,
      aaaLarge: contrast >= minimum.aaaLarge,
    },
  };
};