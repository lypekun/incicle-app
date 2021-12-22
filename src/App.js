import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard'
import "@fontsource/open-sans"; 

import {createTheme, ThemeProvider} from '@mui/material'


const theme = createTheme({
  typography: {
    fontFamily: [
      'Open Sans'
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
      </ThemeProvider>);
}

export default App;
