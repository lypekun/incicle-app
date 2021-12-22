import React, {useState} from 'react';

//custom components
import ManagementContent from './ManagementContent'

//material ui
import {Card, CardContent, Typography} from '@mui/material';


function ManagementCard(props) {
  const [boards, setBoards] = useState(props.management[0].boards || [])

  function handleDelete(title){
    const delete_list = boards.filter((item) => {return item.title != title})
    setBoards(delete_list);
  }
  return (
    
    <Card variant="outlined" sx={{ minWidth: 375 }}>
        <CardContent>
        <Typography variant="h6"  gutterBottom>Quadros de Gestão à Vista</Typography>
        {boards.map((item, index) =>  {return (
             <ManagementContent key={index} title={item.title} resume_files={item.resume_files} handleDelete={handleDelete} />
        )})}
       
        </CardContent> 
    </Card>

  );
}


export default ManagementCard;