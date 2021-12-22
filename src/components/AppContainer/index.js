import React from 'react'

//custom components
import MenuBar from '../../components/MenuBar'


//material ui components
import {Container} from '@mui/material'


function AppContainer(props){
    return(
        <>
        <MenuBar />
        <Container fixed sx={{marginBottom: 10}}>
        {props.children}
        </Container>
        </>
    )
}


export default AppContainer;