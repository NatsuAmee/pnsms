import './App.css'
import { Route, Routes } from "react-router-dom"
import React from 'react';
import Login from 'layouts/Login';
import Main from 'layouts/Main';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Main/>} />
      </Routes>
    </div>
  );
}

export default App;
