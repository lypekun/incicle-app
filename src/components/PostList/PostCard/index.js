import React from 'react' 

//custom components
import InvitedPeopleModal from '../../InvitedPeopleModal'

//material ui components
import {Card, CardContent, Typography, Avatar, IconButton, Grid, Chip, Menu, MenuItem} from '@mui/material';
import { red } from '@mui/material/colors';
import {MoreVert} from '@mui/icons-material';


function PostCard(props){

  const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    function handleClick(event){
        setAnchorEl(event.currentTarget);
    };
    function handleClose(){
        setAnchorEl(null);
    };

    function handleDelete(){
        props.handleDelete(props.item.id);
        setAnchorEl(null);
    }

  function loadChip(type){
    if (type == 'event') return <Chip color="error" size="small" label="EVENTO" />
    else if (type == 'release') return <Chip color="primary" size="small" label="COMUNICADO" />
    else if (type == 'publication') return <Chip  size="small" label="PUBLICAÇÃO" />
  }

  function loadConfirmed(invited_people){
    const total = invited_people.length;
    const confirmed_list = invited_people.filter((item) => {return item.confirmed_presence})
    const confirmed = confirmed_list.length;
    return confirmed+" CONFIRMAÇÕES DE "+total;
  }




    return (<Card sx={{ minWidth: 275 }}>
        <CardContent> 
            <Grid container direction="row" justifyContent="space-between"  alignItems="center" spacing={1}>
                <Grid item xs={12} lg={2} md={2} sm={4}><Avatar sx={{ bgcolor: red[500], width: 115, height: 115 }} variant="square" src={props.src} aria-label="recipe">R</Avatar></Grid>
                <Grid item xs={10} lg={9} md={9} sm={7} container direction="column" justifyContent="space-between" spacing={0}>
                  <Grid item><Typography variant="h6" >{props.title}</Typography></Grid>
                  <Grid item sx={{fontSize: 14}}>{loadChip(props.type)}  {props.place ? props.place+" |" : ''} {props.date} {props.type == 'event' ?  ( <InvitedPeopleModal title={loadConfirmed(props.confirmed_people)} invited_people={props.confirmed_people}/>) : ''}</Grid>
                  <Grid item><Typography variant="subtitle1" sx={{fontSize: 14}}>{props.description}</Typography></Grid>
                </Grid>
                <Grid item xs={2} lg={1} md={1} sm={1}> <IconButton aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={{margin: 'auto'}}><MoreVert /></IconButton></Grid>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    >
                        <MenuItem onClick={handleDelete}>Excluir</MenuItem>
                    </Menu>
                
            </Grid>
        </CardContent>
      </Card>)
}


export default PostCard;