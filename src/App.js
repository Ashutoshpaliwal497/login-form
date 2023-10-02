import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Body from './components/Body';
import SignupForm from './components/SignupForm';
import BodyTwo from './components/BodyTwo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginForm/>}/>
          <Route path='/Body' element={<Body/>}/>
          <Route path='/SignupForm' element={<SignupForm/>}/>
          <Route path='/BodyTwo' element={<BodyTwo/>}></Route>
          <Route path='/LoginForm' element={<LoginForm/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;