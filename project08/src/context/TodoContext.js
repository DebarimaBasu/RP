import { createContext,useContext } from "react";
export const TodoContext=createContext({// creating array here
    todos:[{
        id:1,
        todo:"Todo massage",
        completed:"false"
    }
],
 addTodo:(todo)=>{},//for add todo
 updateTodo:(id,todo)=>{},//for update todo
 deleteTodo:(id)=>{},//for delete todo
 toggleTodo:(id)=>{}//toggle todo
})
export const useTodo=()=>{
    return useContext(TodoContext)//need to give a context
}
export const Todoprovider=TodoContext.Provider //storing it in a variable that's why don't need to
//  declare it again and again 