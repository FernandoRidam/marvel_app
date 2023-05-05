import {
  ThemeProvider,
} from 'styled-components';

import {
  Router,
} from './router';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Router />
    </ThemeProvider>
  );
}

export default App;
