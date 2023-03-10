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
            fontSize: '36px',
          },
          h2: {
            fontWeight: 700,
            fontSize: '28px',
          },
          h3: {
            fontWeight: 700,
            fontSize: '16px',
          },
          h4: {
            fontWeight: 700,
            fontSize: '14px',
          },
          h6: {
            fontWeight: 300,
            fontSize: '12px',
          },
          body2: {
            color: grey['400'],
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: '#FAFAFF',
            color: themePalette.palette.primary.main,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            marginTop: 10,
            padding: 8,
          }
        }
      },

      MuiAccordionSummary: {
        styleOverrides: {
          content: {
            margin: 0,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: 'blue',
            display: 'block'
          }
        }
      },

    },
  };
  
  export const theme = () => createTheme(baseTheme);
  
  export const muiTheme = theme;