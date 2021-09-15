import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import React, { useState } from 'react';

function App() {
  const onDelete = (todo)=>
  {
    setTodos(todos.filter((e)=>{

      return e !== todo;
    }))
  }

  const [todos, setTodos] = useState([
   {
     id:1,
     title:"My first todo title",
     description:"First todo descripion"
   },
   {
     id:2,
     title:"ddsdsf fsdfsfsf",
     description:"dsadadsad asdsa dfsdfd fsdf sdf dsf sfssgsggs"
   },
   {
     id:3,
     title:"ddsdsf fsdfsfsf",
     description:"dsadadsad asdsa dfsdfd fsdf sdf dsf sfssgsggs"
   },
 ]);
  return (
    <>
    <Header title="Todo list"/>
    <Todos todos={todos} onDelete={ onDelete } />
    <Footer/>
    </>
  );
}

export default App;
