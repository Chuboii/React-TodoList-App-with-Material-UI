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

function getDataa(){
  let stored = localStorage.getItem("checked")
  return stored ? JSON.parse(stored) : []
}

function dell(){
  let stored = localStorage.getItem("deleted")
  return stored ? JSON.parse(stored) : []
}

function firtsName(){
  let stored = localStorage.getItem("formValues")
  return stored ? JSON.parse(stored) : []
}

export default function TodoList() 
{

  let {data, setData} = UseData()
  let {searchValue} = UseData()
  let [getData, setGetData] = React.useState(data) 
  const [checked, setChecked] = React.useState([0]);
  let [deletedItem, setDeletedItem] = React.useState(getDataa)
  let [delData, setDelData] = React.useState(dell)
  let [info] = React.useState(firtsName)

  let filterItems = getData.filter((el)=>{
    return el.item.toLowerCase().includes(searchValue.toLowerCase())
  })


  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);

    let id = value.id
     
    let filtered = [...data].filter(el => el.id !== id)

    setGetData(filtered)

    let filtered2 = [...data].filter(el => el.id === id)

    setDeletedItem((prev) =>{
      return [...prev, ...filtered2]
    })
    setData(filtered)
  };

  let delBtn = (idx) =>{
    let filtered = [...data].filter(el => el.id === idx)
    let filtered2 = [...data].filter(el => el.id !== idx)

    setDelData((prev)=>{
      return [...prev, ...filtered]
    })
    setGetData(filtered2)
    setData(filtered2)
  }
React.useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(getData))
  localStorage.setItem("checked", JSON.stringify(deletedItem))
  localStorage.setItem("deleted", JSON.stringify(delData))
}, [getData, deletedItem, delData])
let apostrophe = "'"
  return (
    <div style={{marginTop:"6rem"}}>
    <h4 className='your-h4'>{info[0].firstName}{apostrophe}s TODOS</h4>
   <List sx={{
         width: '95%', maxWidth: 600, bgcolor: 'tranparent' ,
         margin:'1rem auto',
        }}>
      {filterItems.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem
            key={value.id}
            secondaryAction={
              <IconButton edge="end" aria-label="comments" >
          
              </IconButton>
            }
            disablePadding
          >
          <Box className='lists'>
            <ListItemButton className='lists' role={undefined} onClick={handleToggle(value)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <p>{value.item}</p>
              <Delete  className='del' onClick={(e) =>{
                  e.stopPropagation()
                 delBtn(value.id)
              }} />
            </ListItemButton>
            </Box>
          </ListItem>
        );
      })}
    </List>
</div>
  );
}
