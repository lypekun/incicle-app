import React,{useState} from 'react';

//material ui
import {Button, Dialog, DialogContent, Grid, Typography, IconButton, Card, CardContent, Chip, Avatar} from '@mui/material';


function InvitedPeopleModal(props) {
  const [open, setOpen] = React.useState(false);
  const [list, setList] = useState(props.invited_people || []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen}>
        {props.title}
      </Button>
      <Dialog
        fullWidth={true}
        maxWidth="lg"
        open={open}
        onClose={handleClose}
      >
        <DialogContent>
        <Grid container spacing={3}>
        {list.map((item, index) => {return (
            <Grid item lg={12} sm={12} md={12} xs={12} key={index}>
             <Card sx={{ minWidth: 275 }}>
             <CardContent> 
                 <Grid container direction="row" justifyContent="space-between"  alignItems="center" spacing={1}>
                     <Grid item xs={2} lg={2} md={2} sm={2}><Avatar sx={{  width: 115, height: 115 }} variant="square" src={item.avatar} aria-label="recipe"></Avatar></Grid>
                     <Grid item xs={10} lg={10} md={10} sm={10} container direction="column" justifyContent="space-between" spacing={0}>
                     <Grid item><Typography variant="h6" >{item.name}</Typography></Grid>
                     <Grid item><Typography sx={{fontSize: 14}}>{item.username}</Typography></Grid>
                     <Grid item>{item.confirmed_presence ?  <Chip label="PRESENÇA CONFIRMADA" size="small" color="success" /> : <Chip size="small" label="PRESENÇA PENDENTE" />}</Grid>
                     </Grid>
                 </Grid>
             </CardContent>
             </Card>
             </Grid>
        )})}
        </Grid>
      
      
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InvitedPeopleModal