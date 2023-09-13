import {useForm} from 'react-hook-form'
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Registration.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';



export default function Registration() {
  const [showPassword, setShowPassword] = React.useState(false);
     const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onChange',
      });
let first = useRef()
let navigate = useNavigate()
      let registerOptions = {
         firstName:{
            required: 'Firstname is required'
         },
         lastName:{
            required: 'Lastname is required'
         },
         email:{
            required:"Email is required"
         },
         password:{
            required: 'Password is required'
         }
      }

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  let registerForm = (data)=>{
    if(data.firstName && data.lastName && data.email && data.password){
  navigate('/home')
let formvalues = [{
   firstName: data.firstName,
   lastName: data.lastName,
   password: data.password,
   email: data.email
}]
  localStorage.setItem("formValues", JSON.stringify(formvalues))
    }
  
  }


  return (
   <div className="v">
   <div className='bg'></div>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', color:'white', background:'white', padding:'2rem 1rem ', 
    maxWidth:'500px',
    position:'absolute', top:'50%', width:"90%", left:'50%', transform:"translate(-50%, -50%)", borderRadius:"10px", zIndex:'2' }}>
    <form className='register-form' onSubmit={handleSubmit(registerForm)}>

      <div className='first-name'>
        <TextField
         ref={first}
          label="Firstname"
          id="outlined-start-firstname"
          sx={{ m: 1, width: '90%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='firstName'

          {...register("firstName", registerOptions.firstName)}
        />
{errors.firstName && <small className='err'>{errors.firstName.message}</small>}
        </div>

    
        <TextField
          label="Lastname"
          id="outlined-start-lastname"
          sx={{ m: 1, width: '90%' }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
          }}
          name='lastName'
          {...register("lastName", registerOptions.lastName)}
        />
        {errors.lastName && <small className='err'>{errors.lastName.message}</small>}
   
        <FormControl sx={{ m: 1, width: '90%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password"
          >Password</InputLabel>
          <OutlinedInput
          name='password'
          {...register("password", registerOptions.password)}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        {errors.password && <small className='err'>{errors.password.message}</small>}
  
        <div>
        <FormControl sx={{ m: 1, width:'90%' }}>
          <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
          <OutlinedInput
            id="outlined-adornment-email"
            name='lastName'
          {...register("email", registerOptions.email)}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Email"
          />
        </FormControl>
        {errors.email && <small className='err'>{errors.email.message}</small>}
      </div>

      <button className='register-btn'>Register</button>
    </form>
    </Box>

    </div>
  );
}
