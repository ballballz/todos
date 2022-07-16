import { createSlice } from "@reduxjs/toolkit/";

const get_txt = JSON.parse(localStorage.getItem('todos'));
const check = get_txt ? get_txt : [];

const initialState = [...check]

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        addtodo: (state,action) => {            
            state.push(action.payload)
            localStorage.setItem('todos',JSON.stringify([...state]));
        },
        deltodo: (state,action) => {
            const _newtxt = state.filter((item)=> item.id !== action.payload)
            localStorage.setItem('todos',JSON.stringify(_newtxt));
            return _newtxt
        },
        updatetodo: (state,action) => {
            state.map((item)=>{
                if(item.id === action.payload.id){
                    item.title = action.payload.title
                }
            })
            
            localStorage.setItem('todos',JSON.stringify([...state]));
        },
        checkedTodo: (state,action) => {
            state.map((item)=> {
                if(item.id === action.payload.id){
                    item.status = action.payload.status
                }
            })
            localStorage.setItem('todos',JSON.stringify([...state]));
        }
    }
})

export const { addtodo,deltodo,updatetodo,checkedTodo } = todoSlice.actions

export default todoSlice.reducer