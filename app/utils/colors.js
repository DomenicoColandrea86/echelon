import lighten from 'polished/lib/color/lighten';
import darken from 'polished/lib/color/darken';
import shade from 'polished/lib/color/shade';

export const lightGrey = '#e5e5e5';
export const darkGrey = darken(0.05, '#282a36');

export const red = '#ff5555';
export const violetRed = 'rgb(219, 112, 147)';
export const lightVioletRed = lighten(0.31, 'rgb(219, 112, 147)');

export const gold = shade(0.9, 'rgb(243, 182, 97)');

export const blackCoral = '#4F5D75';

export const lightSlateGray = '#6E8898';
export const lightGray = '#D3D0CB';
export const meatBrown = '#E2C044';
export const darkMeatBrown = darken(0.05, '#E2C044');
export const darkSlateGray = '#2E5266';
export const ghostWhite = '#f8f8ff';

// RCA
export const blue = '#3667A6';
export const darkBlue = '#184278';
export const orange = '#e87d1e';
export const paleGrey = lighten(0.01, '#EEF0F2');
export const grey = '#666';
export const white = '#fff';
export const charcoal = '#333';
export const lightPaleGrey = lighten(0.03, paleGrey);
