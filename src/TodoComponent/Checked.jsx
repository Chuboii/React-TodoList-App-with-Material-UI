import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import  Delete from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import { UseData } from './DataContext';

function getData(){
  let stored = localStorage.getItem("checked")
  return stored ? JSON.parse(stored) : []
}

export default function Checked() {
  
  let [checkedData, setCheckedData] = React.useState(getData)
let {searchValue} = UseData()

  let filterItems = checkedData.filter((el)=>{
    return el.item.toLowerCase().includes(searchValue.toLowerCase())
  })

  React.useEffect(()=>{
    localStorage.setItem("checked", JSON.stringify(checkedData))
  }, [checkedData])

  let clearAllChecked = () =>{
    localStorage.setItem('checked', '[]')
    let stored = localStorage.getItem("checked")
    setCheckedData(JSON.parse(stored))
 }

  return (
   <div style={{marginTop:"6rem"}}>
   <div className='del-grp'>
   <h4 className='checked-h4'>Checked todos</h4>  
   <div style={{marginLeft:"1rem", display:"flex", alignItems:"center"}}><Delete sx={{marginRight:".5rem", padding:'1rem', color:"white", background:'blue', borderRadius:"50%"}} onClick={clearAllChecked}/> 

   </div>
   </div>
   <List sx={{
    width: '95%', maxWidth: 600, bgcolor: 'tranparent' ,
    margin:'1rem auto',
   }}>
 {filterItems.map((value, idx) => {
   const labelId = `checkbox-list-label-${value}`;

   return (
     <ListItem
       key={idx}
       secondaryAction={
         <IconButton edge="end" aria-label="comments" >
     
         </IconButton>
       }
       disablePadding
     >
     <Box className='crossed-lists checked'>
       <ListItemButton className='lists' role={undefined}  dense>
         <ListItemIcon>
           <Checkbox
             edge="start"
             checked={true}
             tabIndex={-1}
             disableRipple
             disabled={!value.isDisabled}
             sx={{color:'white'}}
             inputProps={{ 'aria-labelledby': labelId }}
           />
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