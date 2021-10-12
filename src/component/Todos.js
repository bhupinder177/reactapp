import React from 'react'
import TodoItem from "../component/TodoItem";


export default function Todos(props){

           return(
             <div className="container">
             <h3 className="text-center">Todos List</h3>
             <div className="container">
              <div className="row">
             {
               props.todos.map((todo)=>
               {
                return <TodoItem todo={todo} key={ todo.id } onDelete={ props.onDelete } />
               }
              )
            }
             </div>
             </div>
             </div>
           )
}
