import React from 'react'
import { Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Route path="/" exact component={Home}></Route>
      <Route path="/register" exact component={Register}></Route>
      <Route path="/login" exact component={Login}></Route>
    </>
  );
}

export default App;
