
export const createPruebaPalette = () => {
  const data = `
import { PaletteMode } from '@mui/material';
import { deepOrange, } from '@mui/material/colors';
import { alpha } from '@mui/material/styles';

// ----------------------------------------------------------------------

// SETUP COLORS
export const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
};

export const common = {
  black: '#000000',
  white: '#FFFFFF',
};

export const primary = {
  lighter: '#D0ECFE',
  light: '#73BAFB',
  main: '#1877F2',
  dark: '#0C44AE',
  darker: '#042174',
  contrastText: '#FFFFFF',
};

export const secondary = {
  lighter: '#EFD6FF',
  light: '#C684FF',
  main: '#8E33FF',
  dark: '#5119B7',
  darker: '#27097A',
  contrastText: '#FFFFFF',
};

export const error = {
  lighter: '#FFE9D5',
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  darker: '#7A0916',
  contrastText: '#FFFFFF',
};

export const warning = {
  lighter: '#FFF5CC',
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  darker: '#7A4100',
  contrastText: grey[800],
};

export const info = {
  lighter: '#CAFDF5',
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  darker: '#003768',
  contrastText: '#FFFFFF',
};

export const success = {
  lighter: '#C8FAD6',
  light: '#5BE49B',
  main: '#00A76F',
  dark: '#007867',
  darker: '#004B50',
  contrastText: '#FFFFFF',
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const base = {
  common,
  primary,
  secondary,
  error,
  warning,
  info,
  success,
  grey,
  divider: alpha(grey[500], 0.2),
  action,
};

// ----------------------------------------------------------------------

export function palette(mode:PaletteMode) {
  // const colors = "";
  return {
    mode,
    ...(mode === "light"
      ? {
        ...base,
        text: {
          primary: grey[800],
          secondary: grey[600],
          disabled: grey[500],
        },
        background: {
          paper: '#FFFFFF',
          default: grey[100],
          neutral: grey[200],
        },
        action: {
          ...base.action,
          active: grey[600],
        },
      }
      : {
        common: {},
        primary: {
          light: '#0C44AE',
          dark: '#73BAFB',
          main: '#1877F2',
        },
        secondary: {
          dark: '#C684FF',
          main: '#8E33FF',
          light: '#5119B7',
        },
        error: {},
        warning: {},
        info: {
          light: '#006C9C',
          main: '#00B8D9',
          dark: '#61F3F3',
        },
        success:{},
        grey: {
          0: '#161C24',
          100: '#212B36',
          200: '#454F5B',
          300: '#637381',
          400: '#919EAB',
          500: '#C4CDD5',
          600: '#DFE3E8',
          700: '#F4F6F8',
          800: '#F9FAFB',
          900: '#FFFFFF',
        },
        text: {
          primary: "#fff",
          secondary: grey[600],
          disabled: grey[500],
        },
        divider: deepOrange[700],
        background: {
          default: "#141b2d",
        },
        action: {
          ...base.action,
          active: grey[600],
        },
      }
    )
  };
}
`;
  return data;
}
