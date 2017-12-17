import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import About from './scenes/About';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <About />
      </MuiThemeProvider>
    );
  }
}

export default App;
