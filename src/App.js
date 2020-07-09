import React from 'react';
import './App.css';
import  Homepage from './pages/Homepage'
import {Switch,Route} from 'react-router-dom'
import Header from './components/header/Header'
import Shop from './components/shop/Shop'
function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
    </>
  );
}

export default App;
