import React from 'react';
import './App.css';
import { Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Todo from './todo'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  }
});

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <Typography variant="h1">
              Todo List
            </Typography>
          </header>
          <div>
            <Todo/>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
