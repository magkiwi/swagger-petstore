import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { PetStoreContextProvider } from 'contexts';
import { muiTheme } from 'shared/styles/muiTheme';
import { Info } from 'views/Public/Info';

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
    <QueryClientProvider client={queryClient}>
      <PetStoreContextProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <Info />
          </CssBaseline>
        </ThemeProvider>
      </PetStoreContextProvider>
    </QueryClientProvider>
  );
}

export default App;
