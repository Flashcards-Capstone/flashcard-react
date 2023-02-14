import './App.css';
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import LogIn from './components/LogIn';
import UserHome from './components/UserHome';
import CardEdit from './components/CardEdit';
import ShowStack from './components/ShowStack';
import Login from './components/LogIn';
import AddCard from './components/AddCard';
import {useParams} from "react-router-dom";
          

function App() {
  const[cardToUpdate, setCardToUpdate] = useState()
  const[propsUser, setUser] = useState("")
  const[stackProp, setStackProp] = useState("")

  const getUser = (user) => {
    console.log("USER IN APP.JS: ", user)
    setUser(user)
  }

  const getStack = (stack) => {
    console.log("STACK IN APP.JS: ", stack)
    setStackProp(stack)
  }

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/login" element={ <LogIn getUser={getUser}/>} exact />
        <Route path="/user/:id" element={ <UserHome user={propsUser} getStack={getStack} setCardToUpdate={setCardToUpdate}/>} exact />
        <Route path="/user/:userId/stack/:stackId/add" element={ <AddCard stack={stackProp} user={propsUser}/> } exact />
        <Route path="/stack/:id" element={<ShowStack stack={stackProp}/>} exact />
        <Route path="/card/:id" element={<CardEdit cardToUpdate={cardToUpdate} user={propsUser} />} />
      </Routes>

    </div>
  );
}

export default App;
