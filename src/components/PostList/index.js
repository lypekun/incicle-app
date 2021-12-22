import React from 'react' 


//custom components
import PostCard from './PostCard'


//material ui components
import {Grid} from '@mui/material'




function PostList(props){



    return (
     
       <>
        {props.data.map((item, index) => {return <Grid key={index} item xs={12} lg={12} md={12} sm={12}>
        <PostCard 
        
        handleDelete={props.handleDelete}
        item={item}
        title={item.title} 
        date={item.info.date} 
        place={item.info.place} 
        type={item.type} 
        description={item.description}
        src={item.file.url}
        confirmed_people={item.invited_people}
        /></Grid>})}
        </>
       
    )
}


export default PostList;