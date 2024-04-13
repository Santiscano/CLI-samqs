
export const createPalette = () => {
  const data = `import { PaletteMode } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { ColorPreset } from './theme.interface';

// *definiciones por defecto de light y dark en:
  // *text, background, grey, common, error, warning, info, sucess, action, divider
const themeDefault = {
  light: {
    text: {
      primary: '#212b36', // Black
      secondary: '#637381', // grey
      disabled: '#919eab',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f4f6f8',
      neutral: '#dde2eb',
    },
    grey: {
      0: '#FFFFFF',
      100: '#F9FAFB',
      200: '#e5e6e8', // hover bg
      300: '#DFE3E8',
      400: '#C4CDD5',
      500: '#919EAB', // secondlight
      600: '#637381',
      700: '#454F5B',
      800: '#212B36',
      900: '#161C24',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    error: {
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
      contrastText: '#FFFFFF',
    },
    warning: {
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      contrastText: '#212B36',
    },
    info: {
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
      contrastText: '#FFFFFF',
    },
    success: {
      light: '#5BE49B',
      main: '#00A76F',
      dark: '#007867',
      contrastText: '#FFFFFF',
    },
    action: {
      hover: '#e6e7e9',
      selected: alpha('#919EAB', 0.16),
      disabled: alpha('#919EAB', 0.8),
      disabledBackground: alpha('#919EAB', 0.24),
      focus: '#e6e7e9',
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
      active: '#637381',
    },
    divider: alpha('#919EAB', 0.2),
  },
  dark: {
    text: {
      primary: '#fff', // white
      secondary: '#919eab', // grey
      secondlight: '#637381',
    },
    background: {
      paper: '#212b36',
      default: '#161c24',
      neutral: '#2d3641',
    },
    grey: {
      0: '#161C24',
      100: '#212B36',
      200: '#454F5B',
      300: '#637381',
      400: '#919EAB', // secondlight
      500: '#C4CDD5',
      600: '#DFE3E8',
      700: '#e5e6e8', // hover bg
      800: '#F9FAFB',
      900: '#FFFFFF',
    },
    common: {
      black: '#000000',
      white: '#FFFFFF',
    },
    error: {
      light: '#FFAC82',
      main: '#FF5630',
      dark: '#B71D18',
      contrastText: '#FFFFFF',
    },
    warning: {
      light: '#FFD666',
      main: '#FFAB00',
      dark: '#B76E00',
      contrastText: '#212B36',
    },
    info: {
      light: '#61F3F3',
      main: '#00B8D9',
      dark: '#006C9C',
      contrastText: '#FFFFFF',
    },
    success: {
      light: '#5BE49B',
      main: '#00A76F',
      dark: '#007867',
      contrastText: '#FFFFFF',
    },
    action: {
      hover: '#29333e',
      selected: alpha('#919EAB', 0.16),
      disabled: alpha('#919EAB', 0.8),
      disabledBackground: alpha('#919EAB', 0.24),
      focus: '#e6e7e9',
      hoverOpacity: 0.08,
      disabledOpacity: 0.48,
      active: '#637381',
    },
    divider: alpha('#919EAB', 0.2),
  }
};

// *================ themes ====================* //
const themeFacebookBlue = {
  primary: {
    light: '#73BAFB',
    main: '#1877F2',
    dark: '#0C44AE',
    contrastText: '#FFFFFF',
  },
};
const themePurpleLight = {
  primary: {
    light: '#818cf8',
    main: '#4f46e5',
    dark: '#3730a3',
    contrastText: 'rgb(255,255,255)',
  }
};
const themeTeal = {
  primary: {
    light: '#00744d',
    main: '#00a76f',
    dark: '#33b88b',
    contrastText: 'rgb(255, 255, 255)',
  }
}
const themeCeruleanBlue = {
  primary: {
    light: '#38a3f1',
    main: '#078dee',
    dark: '#0462a6',
    contrastText: 'rgb(255, 255, 255)',
  }
}
const themeFireEngineRed = {
  primary: {
    light: '#ff5959',
    main: '#ff3030',
    dark: '#b22121',
    contrastText: 'rgb(255, 255, 255)',
  }
}
const themeGoldenrod = {
  primary: {
    light: '#fdba57',
    main: '#fda92d',
    dark: '#b1761f',
    contrastText: 'rgb(255, 255, 255)',
  }
}
// *================ themes ====================* //

const optionsThemes = {
  facebookBlue: {
    light: {
      ...themeDefault.light,
      ...themeFacebookBlue
    },
    dark: {
      ...themeDefault.dark,
      ...themeFacebookBlue,
    },
  },
  purpleLight: {
    light: {
      ...themeDefault.light,
      ...themePurpleLight,
    },
    dark: {
      ...themeDefault.dark,
      ...themePurpleLight,
    },
  },
  teal: {
    light: {
      ...themeDefault.light,
      ...themeTeal,
    },
    dark: {
      ...themeDefault.dark,
      ...themeTeal,
    },
  },
  ceruleanBlue: {
    light: {
      ...themeDefault.light,
      ...themeCeruleanBlue,
    },
    dark: {
      ...themeDefault.dark,
      ...themeCeruleanBlue,
    },
  },
  fireEngineRed: {
    light: {
      ...themeDefault.light,
      ...themeFireEngineRed,
    },
    dark: {
      ...themeDefault.dark,
      ...themeFireEngineRed,
    },
  },
  goldenrod: {
    light: {
      ...themeDefault.light,
      ...themeGoldenrod,
    },
    dark: {
      ...themeDefault.dark,
      ...themeGoldenrod,
    },
  },
};

export function palette(mode: PaletteMode, theme: ColorPreset) {

  const base = {
    // @ts-ignore
    ...optionsThemes[theme][mode],
  };

  return {
    mode,
    ...(mode === 'light'
      ? {
          ...base,
        }
      : {
          ...base,
        }),
  };
}
`;
  return data;
}
