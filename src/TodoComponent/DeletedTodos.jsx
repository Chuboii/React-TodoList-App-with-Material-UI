import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import  Delete from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { UseData } from './DataContext';

function getData(){
  let stored = localStorage.getItem("deleted")
  return stored ? JSON.parse(stored) : []
}

export default function DeletedTodos() {
  
  let [deletedData, setDeletedData] = React.useState(getData)

 let {searchValue} = UseData()
  let filterItems = deletedData.filter((el)=>{
    return el.item.toLowerCase().includes(searchValue.toLowerCase())
  })
  React.useEffect(()=>{
    localStorage.setItem("deleted", JSON.stringify(deletedData))
  }, [deletedData])
 

  let clearAll = () =>{
    localStorage.setItem('deleted', '[]')
    let stored = localStorage.getItem("deleted")
    setDeletedData(JSON.parse(stored))
 }
  return (
   <div style={{marginTop:"6rem"}}>
   <div className='del-grp'>
   <h4 className='checked-h4'>Deleted Todos</h4>  
   <div style={{marginLeft:"1rem", display:"flex", alignItems:"center"}}><Delete sx={{marginRight:".5rem", padding:'1rem', color:"white", background:'blue', borderRadius:"50%"}} onClick={clearAll}/> 
   </div>
   </div>
   <List sx={{
    width: '95%', maxWidth: 600, bgcolor: 'tranparent' ,
    margin:'1rem auto',
   }}>
 {filterItems.map((value, idx) => {
   return (
     <ListItem
       key={idx}
       secondaryAction={
         <IconButton edge="end" aria-label="comments" >
     
         </IconButton>
       }
       disablePadding
     >
     <Box className='crossed-lists'>
       <ListItemButton className='lists' role={undefined}  dense>
         <ListItemIcon>
           <Delete sx={{background:"lightblue", color:"black", padding:'1rem', marginRight:"1rem", borderRadius:"50%"}}/>
         </ListItemIcon>
         <p>{value.item}</p>
       </ListItemButton>
       </Box>
     </ListItem>
   );
 })}
</List>
</div>
  );
    }