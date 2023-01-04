import { grey } from '@mui/material/colors';
import { createTheme, ThemeOptions, responsiveFontSizes } from '@mui/material/styles';


export const themePalette = {
    palette: {
      primary: {
        light: '#3b4151',
        main: '#3b4151',
      },
      secondary: {
        light: '#61affe',
        main: '#61affe',
      },
      success: {
        main: '#49cc90',
      },
      error: {
        main: '#f93e3e',
      },
      info: {
        main: '#fca130',
      },
    },
  };

  export const defaultTheme = responsiveFontSizes(createTheme({}));


  export const baseTheme: ThemeOptions = {
    typography: {
      fontFamily: 'Plus Jakarta Sans, sans-serif',
    },
    palette: {
      ...themePalette.palette,
    },
    shape: {
      borderRadius: 4,
    },
  
    components: {
      MuiTypography: {
        styleOverrides: {
          h1: {
            fontWeight: 700,
            fontSize: '28px',
          },
          h2: {
            fontWeight: 700,
            fontSize: '28px',
          },
          body2: {
            color: grey['400'],
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          fullWidth: true,
        },
      },

    },
  };
  
  export const theme = () => createTheme(baseTheme);
  
  export const muiTheme = theme;