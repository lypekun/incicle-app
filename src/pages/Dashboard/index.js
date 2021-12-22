import React, {useState} from 'react'
import data from '../../database/data.json'
import management from '../../database/management.json'

//custom components
import AppContainer from '../../components/AppContainer'
import PostList from '../../components/PostList'
import AlertCard from '../../components/AlertCard'
import ManagementCard from '../../components/ManagementCard'


//material ui components
import {Typography, Button, Grid, MenuItem, Select, OutlinedInput, Checkbox, ListItemText, FormControl, InputLabel} from '@mui/material'

import AddIcon from '@mui/icons-material/Add'


const types = [
  {name: 'event', description: 'Eventos'},
  {name: 'release', description: 'Comunidado'},
  {name: 'publication', description: 'Publicação'}
]



function Dashboard(){



    const [type, setType] = useState([]);
    const [typeList, setTypeList] = useState([]);
    const [list, setList] = useState(data.data);
    const [filteredList, setFilteredList] = useState(data.data);

    const handleChange = (event) => {
      
      const {target: { value },} = event;
      let filter = [];
      types.map((item, index) => {
        for (var key in value){
          if(item.description === value[key]) filter.push(item.name)
        }
      })
      setType(typeof value === 'string' ? value.split(',') : value);
      const filteredList = list.filter((item) => {
        for (var key in filter) {
          if (item.type === filter[key]) return true;
        }
        return false;
      })
      if(value.length === 0){
        setFilteredList(list)
      } else {
        setFilteredList(filteredList);
      }
      console.log('Data: ', data.data)
    };

    function handleDelete(id){
      console.log('Deletando: ', id)
      const delete_list = list.filter((item) => {return item.id != id})
      const delete_filtered = filteredList.filter((item) => {return item.id != id})
      setList(delete_list);
      setFilteredList(delete_filtered);
    }

    return (
        <AppContainer>
       

        <Grid container direction="row" justifyContent="flex-start" alignItems="flex-start" spacing={2}>

        {/* left content */}
        <Grid container spacing={2} item xs={12} lg={8} md={12} sm={12} direction="row" justifyContent="flex-start" >
          <Grid item xs={8} lg={8} md={8} sm={8}><Typography variant="h4" sx={{color: "#575757"}}>Endomarketing</Typography></Grid>
          <Grid item xs={2} lg={2} md={2} sm={2}>
          <FormControl fullWidth>
          <InputLabel>Tipo</InputLabel>
          <Select
          multiple
          value={type}
          onChange={handleChange}
          input={<OutlinedInput label="Tipo" />}
          renderValue={(selected) => selected.join(', ')}
          sx={{backgroundColor: '#fff'}}
          fullWidth
          >
          {types.map((item) => (
            <MenuItem key={item.name} value={item.description}>
              <Checkbox checked={type.indexOf(item.description) > -1} />
              <ListItemText primary={item.description} />
            </MenuItem>
          ))}
          </Select>
          </FormControl>
          </Grid>
          <Grid item xs={2} lg={2} md={2} sm={2}><Button sx={{padding: 2}}  fullWidth variant="contained" endIcon={<AddIcon />}>CRIAR</Button></Grid>
          <PostList data={filteredList} handleDelete={handleDelete} />
          
        </Grid>
        {/* right content */}
        <Grid container  direction="column" item lg={4} md={12} sm={12} xs={12} spacing={2} >
          <Grid item lg={12} md={12} sm={2} xs={2}><AlertCard /></Grid>
          <Grid item lg={12} md={12} sm={2} xs={2}><ManagementCard management={management.data}/></Grid>
        </Grid>

        </Grid>
      
      </AppContainer>
    )
}


export default Dashboard