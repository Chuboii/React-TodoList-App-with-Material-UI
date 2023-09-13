import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function getData(){
    let storage = localStorage.getItem('formValues')
    return storage ? JSON.parse(storage) : []
}

export default function AddTodosIcon(){
    let [info] = useState(getData)
let navigate = useNavigate()
let getForm = () =>{
navigate('/addtodos')
}


return(
        <div style={{marginTop:"6rem"}}>
<h3 className='welcome'>Welcome {info[0].firstName}</h3>
<h3 className='welcome'>Tap the plus button to add a todo</h3>
<h3 className='welcome'>Or navigate through the menu</h3> 
<AddCircleIcon onClick={getForm} className='add' sx={{fontSize:"120px"}}/>
    </div>
     )
}