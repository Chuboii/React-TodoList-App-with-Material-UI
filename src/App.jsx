import './App.css'
import AddTodosIcon from "./TodoComponent/AddTodosIcon"
import TodoForm from './TodoComponent/TodoForm'
import { Route, Routes } from 'react-router-dom'
import TodoList from './TodoComponent/TodoList'
import { DataProvider } from './TodoComponent/DataContext'
import Render from './TodoComponent/Render'
import Checked from './TodoComponent/Checked'
import DeletedTodos from './TodoComponent/DeletedTodos'
import Registration from './TodoComponent/Registration'
import Profile from './TodoComponent/Profile'
import LogoutPage from './TodoComponent/LogoutPage'
function App() {
  return (
    <>
  <DataProvider>
  <Render/>
    <Routes>
    <Route path='/register' element={<Registration/>}/>
   <Route path='/profile' element={<Profile/>}/>
    <Route path='/deletedtodos' element={<DeletedTodos/>}/>
    <Route path='/checkedtodos' element={<Checked/>}/>
    <Route path="/addtodos" element={<TodoForm />}/>
    <Route path="/todos" element={<TodoList />} /> {/* Nested route for TodoList */}
    <Route path="/" element={<Registration/>}/>
    <Route path='/home' element={<AddTodosIcon/>}/>
    <Route path='/logout-page' element={<LogoutPage/>}/>

    
    </Routes>
    </DataProvider>
    </>
  )
}

export default App
