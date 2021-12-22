import React from 'react';


//material ui
import {Card, CardActions, CardContent, Button, Typography} from '@mui/material';




function AlertCard(props) {
  return (
      <Card variant="outlined" sx={{backgroundColor: '#ffdede', minWidth: 375}}>
      <CardContent>
      <Typography variant="h6" sx={{color: '#825757'}} gutterBottom>Endomarketing</Typography>
      <Typography sx={{ fontSize: 14 }} sx={{color: '#e49b9b'}} gutterBottom>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
      </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" color="error">DISPENSAR</Button>
      </CardActions>  
      </Card>
  );
}


export default AlertCard