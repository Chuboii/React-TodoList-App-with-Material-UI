import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function getData(){
    let storage = localStorage.getItem('formValues')
    return storage ? JSON.parse(storage) : []
}
export default function Profile(){
  let [info] = useState(getData)
    let navigate = useNavigate()
let logoutForm = () =>{
   navigate("/logout-page")

   setTimeout(() => {
    navigate("/")
   }, 2000);
}

    return(
        <div style={{marginTop:"6rem"}}>
        <AccountCircleIcon sx={{fontSize:"200px", position:"relative", left:"50%", transform:"translateX(-50%)", top:"3rem"}}/>

        <div className='user-info'>
         <p>{info[0].firstName}</p>
         <p>{info[0].lastName}</p>
         <p>{info[0].email}</p>

         <button className='logout' onClick={logoutForm}>LOG OUT</button>
        </div>
        </div>
    )
}