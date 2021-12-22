import React, {useState} from 'react';


//material ui
import {Card, CardContent, Typography, Grid, Avatar, IconButton, Menu, MenuItem} from '@mui/material'
import {MoreVert, Public} from '@mui/icons-material';

function ManagementContent(props){


    const [resume_files, setResumeFiles] = useState(props.resume_files || []);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    function handleClick(event){
        setAnchorEl(event.currentTarget);
    };
    function handleClose(){
        setAnchorEl(null);
    };
    function handleDelete(){
        props.handleDelete(props.title);
        setAnchorEl(null);
    }


    return (
        <Card variant="outlined" sx={{margin: 1, marginLeft: 0, marginRight: 0}}>
            <CardContent>
                <Grid container  justifyContent="space-between" alignItems="center">
                    <Grid item lg={9} md={10} sm={10} xs={9}><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>{props.title}</Typography></Grid>
                    <Grid item><IconButton sx={{margin: 'auto'}}><Public fontSize="small"/></IconButton></Grid>
                    <Grid item><IconButton aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick} sx={{margin: 'auto'}}><MoreVert fontSize="small"/></IconButton></Grid>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleDelete}>Excluir</MenuItem>
                    </Menu>
                    
                    <Grid item container lg={12} sm={12} md={12} xs={12}>
                        {resume_files.map((item,index) =>  {return (
                            <Grid key={index} item lg={3} sm={3} md={3} xs={3}>
                            <Avatar sx={{  width: 75, height: 75 }} variant="square" src={item.file}></Avatar>
                            </Grid>
                        )})}
                    </Grid>
                </Grid>
                
            </CardContent>
        </Card>
    )
}

export default ManagementContent;