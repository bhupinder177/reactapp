import React,{ useState } from 'react';

export default function AddTodo({addtodo}){
 const [title,settitle] = useState("");
 const [des,setdes] = useState("");
 const submit =(e)=>{
   e.preventDefault();
   if(!title || !des)
   {
     alert("all field is required");
   }
   else
   {
   addtodo(title,des);
   settitle("");
   setdes("");
   }

 }
           return(
             <div className="container my-3">
             <h3>Add A Todo</h3>
             <form onSubmit={ submit }>
             <div className="form-group">
             <label >Title</label>
             <input type="text" value={ title } onChange={ (e)=>{settitle(e.target.value)} } className="form-control" />
             </div>
             <div className="form-group">
             <label >descripion</label>
             <input type="text" value={ des } onChange={ (e)=>{setdes(e.target.value)} } className="form-control"  />
             </div>
             <button type="submit" className="btn btn-sm btn-success">Add todo</button>
             </form>
             </div>
           )
}
