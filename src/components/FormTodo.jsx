import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../store/slices/todoSlice'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';

const FormTodo = () => {
    const todos = useSelector(state=>state.todos)
    const [dis,setDis] = useState(true)
    const [text,setText] = useState({
        id:null,
        title:'',
        status: false
    })

    const dispatch = useDispatch()

    const onChange = (e) => {
        setText((item)=>{
            return {
                ...item,
                [e.target.name] : e.target.value
            }  
        })
    }

    const { title } = text

    const Submit = () => {
        text.id = uuidv4()
        dispatch(addtodo(text))
        setText({
            id:null,
            title:'',
            status: false
        })
    }

    useEffect(()=>{
        if(title){
            setDis(false)
        }else{
            setDis(true)
        }
    },[title])

  return (
    <div className='form-add'>
        <input 
        value={text.title}
        name='title'
        onChange={onChange}
        />
        <button onClick={Submit} disabled={dis}>Add</button>
    </div>
  )
}

export default FormTodo