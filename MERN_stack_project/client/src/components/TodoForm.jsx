import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addnewTodo } from '../redux/actions';


const TodoForm = () => {

  const [text, setText] = useState("");
  const dispatch=useDispatch()

  const onFormSubmit=(e)=>{
    e.preventDefault()
    dispatch(addnewTodo(text))
  }

  const onInputChange=(e)=>{
    // console.log(e.target.value);
    setText(e.target.value)

  }
  return (
    <form className='form' onSubmit={onFormSubmit}>
        <input
        placeholder='Enter new todo..'
        className='input'
        onChange={onInputChange}
        />
    </form>
  )
}

export default TodoForm