import './App.css';
// import Login from './Login.js'
import Com from './ComponentDidmound.js'
import './Login.css'
function App() {
  return (
    <div>
      {/* <Login/> */}
      <Com/>
   
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
