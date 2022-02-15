import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { UserContext } from './components/context';
import NavBar from './components/navbar';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Login from './components/login';
import Deposit from './components/deposit';
import AllData from './components/alldata';
import Withdraw from './components/withdraw';
import { HashRouter, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Spa() {
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[], actions:[], session:{}}}>
        <div className="container" style={{padding: "20px"}}>
          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/CreateAccount/" element={<CreateAccount/>} />
          <Route path="/login/" element={<Login/>} />
          <Route path="/deposit/" element={<Deposit/>} />
          <Route path="/withdraw/" element={<Withdraw/>} />
          <Route path="/alldata/" element={<AllData/>} />
          </Routes>
        </div>          
      </UserContext.Provider>      
    </HashRouter>
  ); 
}
ReactDOM.render(<Spa/>, document.getElementById('root')
);


ReactDOM.render(<React.StrictMode><Spa /></React.StrictMode>,document.getElementById('root'));