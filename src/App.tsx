import {
  ThemeProvider,
} from 'styled-components';

import {
  SnackbarProvider,
} from 'notistack';

import {
  CheckCircle,
  IconProps,
  XCircle,
} from '@phosphor-icons/react';

import {
  Router,
} from './router';

import theme from './theme';

function App() {
  const alertIconDefaultProps: IconProps = {
    size: 24,
    weight: 'bold',
    style: {
      marginRight: 8,
    },
  };

  return (
    <ThemeProvider theme={ theme }>
      <SnackbarProvider
        autoHideDuration={ 5000 }
        SnackbarProps={{
          style: {
            fontFamily: theme.FONT.FAMILY.EPILOGUE,
            fontSize: theme.FONT.SIZE.SM,
            fontWeight: theme.FONT.WEIGHT.MEDIUM,
          }
        }}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom',
        }}
        iconVariant={{
          success: <CheckCircle { ...alertIconDefaultProps }/>,
          error: <XCircle { ...alertIconDefaultProps }/>,
        }}
      >
        <Router />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
