import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deltodo,updatetodo,checkedTodo } from '../store/slices/todoSlice'

const ListTodo = () => {
  const todos = useSelector(state=>state.todos)
  const [edit,setEdit] = useState(false)
  const [id,setID] = useState('')
  const [check,setCheck] = useState(false)
  const [txt,setTxt] = useState({
    id:null,
    title: '',
    status: false
  })
  const dispatch = useDispatch()
  

  const editTodo = (itemID) => {
    setID(itemID)
    setEdit(true)
  }

  const Cancel = () => {
    setID('')
    setEdit(false)
  }

  const updateTodo = () => {
    dispatch(updatetodo(txt))
    setID('')
    setEdit(false)
    setTxt({
      id:null,
      title: '',
      status: false
    })
  }

  return (
    <div className='list'>
        {todos?.map((item)=>          
          <div key={item.id}>
            {edit && item.id === id ? 
              <>
                <p><input defaultValue={item.title} onChange={(e)=>setTxt({...txt,id:item.id,title:e.target.value})}/></p>
                <button onClick={updateTodo}>Update</button>
                <button onClick={Cancel}>Cancel</button>
              </>  
            :
              <>
                <p><input type='checkbox' onChange={(e)=>dispatch(checkedTodo({...item,id:item.id,status:e.target.checked}))} checked={item.status}/>{item.title}</p>
                <button onClick={()=>editTodo(item.id)}>Edit</button>
                <button onClick={()=>dispatch(deltodo(item.id))}>Delete</button>
              </>  
            }
          </div>
        )}
    </div>
  )
}

export default ListTodo