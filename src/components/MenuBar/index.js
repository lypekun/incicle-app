import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function MenuBar() {
  return (
    
      <AppBar position="static" color="inherit" sx={{boxShadow: 3, marginBottom: 8}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            InCicle
          </Typography>
          
        </Toolbar>
      </AppBar>
    
  );
}

export default MenuBar;