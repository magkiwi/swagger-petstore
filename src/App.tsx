import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { PetStoreContextProvider } from 'contexts';
import { muiTheme } from 'shared/styles/muiTheme';
import { Root } from 'views/Root';

function App() {

  const theme = muiTheme();

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 360000, // 6 minutes
      },
    },
  });

  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <PetStoreContextProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline>
              <Root />
            </CssBaseline>
          </ThemeProvider>
        </PetStoreContextProvider>
      </QueryClientProvider>
    </Router>

  );
}

export default App;
