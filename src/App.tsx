import React from 'react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { muiTheme } from 'shared/styles/muiTheme';

function App() {

  const theme = muiTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        Swagger Pets
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
