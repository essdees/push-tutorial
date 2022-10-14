import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Events from './Events';
import MainPage from './MainPage';
import Messages from './Messages';

function App() {
  return (
   
    <Routes>
      <Route index path='/' element={<MainPage/>}/>
      <Route path='/messages' element={<Messages/>}/>
      <Route path='/events' element={<Events/>}/>
    </Routes>
  );
}

export default App;
