import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Todos from "./component/Todos";
import Footer from "./component/Footer";
import AddTodo from "./component/AddTodo";
import About from "./component/About";
import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";

function App() {
  const onDelete = (todo)=>
  {
    setTodos(todos.filter((e)=>{

      return e !== todo;
    }))
  }

  const addtodo = (title,des)=>
  {
    let id = 0;
    if(todos.length == 0)
    {
      id = 1;
    }
    else
    {
     id = todos[todos.length - 1].id + 1;
    }
    const mytodo = {
     id:id,
     title:title,
     description:des,
   }
   title ='';
   des ='';
    setTodos([...todos,mytodo]);
  }

  const [todos, setTodos] = useState([
   {
     id:1,
     title:"My first todo title",
     description:"First todo descripion"
   },


 ]);
  return (
    <>
     <Router>
    <Header title="Todo list"/>
    <Switch>
    <Route exact path="/" render={()=>{
      return(
        <>
        <AddTodo addtodo={addtodo}/>
        <Todos todos={todos} onDelete={ onDelete } />
        </>
      )
    }}>
    </Route>
          <Route exact  path="/about">
            <About />
          </Route>

        </Switch>

    <Footer/>
     </Router>
    </>
  );
}

export default App;
