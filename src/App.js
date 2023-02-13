import './App.css';
import React, { useState } from "react";
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import LogIn from './components/LogIn';
import UserHome from './components/UserHome';
import TempPage from './components/TempPage';
import CardEdit from './components/CardEdit';
import ShowStack from './components/ShowStack';

function App() {
  const[cardToUpdate, setCardToUpdate] = useState()

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={ <Home/> } exact />
        <Route path="/login" element={ <LogIn/> } exact />
        <Route path="/user" element={ <UserHome/> } exact />
        <Route path="/user/1" element={<TempPage/>} exact />
        <Route path={"/card/" + cardToUpdate.id} element={<CardEdit cardToUpdate={cardToUpdate}/>} exact />
        <Route path="/stack" element={<ShowStack/>} exact />
      </Routes>

    </div>
  );
}

export default App;
