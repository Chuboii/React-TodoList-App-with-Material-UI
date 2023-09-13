import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UseData } from './DataContext'; 

export default function TodoForm() {
  let navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: 'onChange',
  });
  let { setData } = UseData(); 

  const registerOptions = {
    input: {
      required: 'You must add a todo',
    },
  };

  const submitTodos = (data) => {
    if (data.input) {
      navigate("/todos");
  setData((prev)=>{
    return [...prev, {id: uuidv4(), item: data.input, isDisabled:false }]
  })   
}

  }

  let text = "What's on your mind?"

  return (
    <>
      <Box
        sx={{
          width: 500,
          maxWidth: '95%',
          margin: '2rem auto',
          background: 'white',
          borderRadius: '10px',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <form className='form' onSubmit={handleSubmit(submitTodos)}>
          <h4 className='form-h4'>{text}</h4>
          <small>{errors?.input && errors.input.message}</small>

          <TextField
            fullWidth
            label="Add Todos"
            id="fullWidth"
            className='input'
            name='input'
           {...register("input", registerOptions.input)}
          />
          <button onClick={submitTodos} className='button'>
            <EditIcon className='edit' onClick={submitTodos} />
          </button>
        </form>
      </Box>
    </>
  );
}
