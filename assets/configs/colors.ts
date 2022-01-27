export interface colorType {
  text: string;
  background: string;
  brand: {
    brand0: string;
    brand1: string;
    brand2: string;
    brand3: string;
    brand4: string;
    brand4Opacity?: string;
  };
  gray: {
    gray0: string;
    gray1: string;
    gray2: string;
    gray3: string;
    gray4: string;
  };
}

export const lightColors: colorType = {
  text: '#210d02',
  background: '#fffefe',
  brand: {
    brand0: '#fffefe',
    brand1: '#fde1d3',
    brand2: '#fbc0a2',
    brand3: '#f89f72',
    brand4: '#F47636',
    brand4Opacity: 'rgba(244,118,54,0.4)',
  },
  gray: {
    gray0: '#F3F4F6',
    gray1: '#A0A0A0',
    gray2: '#5C5C5C',
    gray3: '#121212',
    gray4: '#040404',
  },
};

export const darkColors: colorType = {
  ...lightColors,
  text: '#fffefe',
  background: '#040404',
};

export const utils = {
  red: '#E53E3E',
};
