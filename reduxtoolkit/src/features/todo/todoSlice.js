import { createSlice,nanoid } from "@reduxjs/toolkit";
//nanoid provide unique id
const initialState={
    todos:[{id:1,
        text:"hello world"
    }]
}
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
          state.todos=state.todos.filter((todo)=>todo.id!==action.payload)  //the id which will not match 
          // the action payload will filter out and return 
        },
        updateTodo:(state,action)=>{
            state.todos=state.todos.map((todo)=>todo.id===action.payload.id?{...todo,text:action.payload.text}
            :todo.text)
        }
        }
})
export const{addTodo,removeTodo,updateTodo}=todoSlice.actions //exporting individual components
export default todoSlice.reducer