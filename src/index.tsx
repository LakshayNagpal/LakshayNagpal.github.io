import { CssBaseline, MuiThemeProvider } from '@material-ui/core';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { theme } from './config/theme';
import { IndexRoute } from './routes';

const Application: React.FC<{}> = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <IndexRoute />
    </Router>
  </MuiThemeProvider>
);

render(<Application />, document.getElementById('root'));
