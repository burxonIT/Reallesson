import './App.css';
// import Login from './Login.js'
import Com from './ComponentDidmound.js'
import './Login.css'
import {  BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './Login.js';
import Map from './Map.js'
import Carusel from './Carusel.js'
import Card from './Card.js'
import Table from './Table.js'
import Acordion from './Acordion.js'
import Tepa from './Tepa.js'
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Button, Container, Form, Nav, Navbar, NavDropdown} from 'react-bootstrap'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Tepa/>
    <Routes>
      <Route path='/carusel' element={<Carusel/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/card' element={<Card/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='/acordion' element={<Acordion/>}/>
      <Route path='/map' element={<Map/>}/>

    </Routes>
    </BrowserRouter>
   
    </div>
  );
}
export default App;
// import React, { useState } from 'react'

// export default function App() {
//   const [count,setCount]=useState(0)
//   const plus=()=>{
//     setCount(count+1)
//   }
//   const minus=()=>{
//     if(count>0){
//     setCount(count-1)}
//   }
//   return (
//     <div>
//       <button onClick={()=>minus()}>minus</button>
//       {count}
//       <button onClick={()=>plus()}>plus</button>
//       {count===1?(<div><img src="https://media.tenor.com/yIWsA_YgyiMAAAAM/sarhosternal-ronaldo.gif" alt="" /></div>):(<div>sd</div>)}
//     </div>
//   )
// }
