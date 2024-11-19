// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Make sure this path is correct
import couter from "./counter";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <counter />
  </React.StrictMode>
);

//! USESTATE //

// import {useState} from 'react';

// export default function(){
//     const [state,setState]=useState(0);

//     function increment(){
//           setState(score => score + 1);
//     }

// return (
//     <>
// <button onClick={() => increment()}>+1</button>
// <h1>Score:{state}</h1>
//         </>
// )
// }

//! Reversing the array of usesate

// import React, { useState } from 'react';

//   // Initial list of items
//   const initialitems=[
//       { name: 'Apple' },
//     {  name: 'Banana' },
//     {  name: 'Cherry' }
//   ];
// export default function Itemlist(){
//   const [items, setItems] = useState(initialitems);
//    function reverse (){
//         const lists=[...items];
//         lists.reverse();
//             setItems(lists);
//     }

//   return (
//     <div>
//       <h3>Items</h3>
//       <button onClick={reverse}>reveess</button>
//         <ul>
//             {items.map(item=>(
//         <li >{item.name}</li>
//     ))}
//       </ul>
//     </div>
//   );
// }

//! REDUCER EASY FUNCTION !//
//  import React, { useReducer } from "react";
// function counter(state,action) {
//     switch(action.type){
//     case "INCREAMENT":
//     return {count: state.count+1};
//              case "DECREAMENT":
//     return {count: state.count-1};
//           case "RESET":
//     return {count: 0};
//         default:
//             throw new Error( `action is unknown: ${action.type}`);

//     }
// }
// const initialstate=  {count:0};
// function CounterApp() {
//     const[state,dispatch]=useReducer(counter ,initialstate);
//     return(
//         <div>
//                  <h1>Counter: {state.count}</h1>
//         <button onClick={()=>dispatch({type:"INCREAMENT"})}> Increase</button>
//         <button onClick={()=>dispatch({type:"DECREAMENT"})}>Decrease</button>
//     <button onClick={()=>dispatch({type:"RESET"})}>REset</button>    </div>
//     );

// }
// export default CounterApp;

//! Context API //!

// import React, { createContext, useContext, useState } from "react";
// import "./App.css";
// //Create a context to hold the count state and updater functions
//  const CountContext = createContext();
// function CountProvider({children}){
//     const[count,setCount]=useState=('0');
//     const increament=()=>setcount(count+1);
//        const decreament=()=>setcount(count+1);
//     return(
//         <CountContext.Provider value{{count,increament,decreament}}>
//         {children}
//         </CountContext.Provider>
//     )
// }

// function CountProvider({ children }) {
//   const [count, setCount] = useState(0);
//   //Function to increment the count
//   const increment = () => setCount(count + 1);
//   //Function to decrement the count
//   const decrement = () => setCount(count - 1);

//   return (
//     <CountContext.Provider value={{ count, increment, decrement }}>
//       {children}
//     </CountContext.Provider>
//   );
// };

// funtion useCount(){
//     const use =useContext(useContext);
//     return use;
// }

// const Counter = () => {
//   const { count, increment, decrement } = useCount();
//   return (
//     <div className="counter-container">
//       <h1> {count}</h1>
//       <button className="button" onClick={increment}>
//         +
//       </button>
//       <button className="button" onClick={decrement}>
//         -
//       </button>
//     </div>
//   );
// };
// const App = () => {
//   return (
//     <div className="app-container">
//       <h1 className="title">React Counter</h1>
//       <p className="sub-description">
//         A simple counter application using Context API
//       </p>
//       <CountProvider>
//         <Counter />
//       </CountProvider>
//     </div>
//   );
// };

// export default App;

//! Creating FULLNAME
// import {useState} from 'react';
// export default function main(){
//     const [firstname,setFirstname]=useState('');
//     const [secondname,setSecondname]=useState('');

//     const Fullname=firstname+' '+secondname;

//     function changef(e) {
//         setFirstname(e.target.value);

//     }
//    function changes(e) {
//         setSecondname(e.target.value);

//     }
//     return (
//         <>
//         <label>
//              First name:{' '}
//         <input value={firstname}
//             onChange={changef}/>

//         </label>

//           <label>
//                secondname:{'  '}
//         <input value={secondname}
//             onChange={changes} />
//         </label>
//         <h1>The name is:{Fullname}</h1>
//         </>
//     );
// }

//! USE EFFECT  //
// import {useState,useEffect,useRef} from 'react';

// function videoplay({src,isplaying}){
//     const videoref=useRef(null);
//     useEffect(()=>{
//         if(isplaying){
//             videoref.current.play();
//         }
//         else{
//             videoref.current.pause();
//         }
//     });
//     return<video  ref={videoref} src={src} loop playinline/>
// }
//  export default function render(){
//     const[isPlaying,setIsPlaying]=useState(false);
//      return(
//          <>
//          <button onClick={()=>setIsPlaying(!isPlaying)}>
//          {isPlaying ? 'play' : 'pause'}</button>
//          <videoplayer
//              isPlaying={isPlaying}
//              src="https://youtube.com/shorts/RqqOo8i7xOY?si=vzU_HwLb8OG5KT9U"
//              />
//      </>
//      );
// }

//! BEST EXAMPLE OF USE EFFECT??
// import React, { useState, useEffect } from "react";

// const CounterWithEffect = () => {
//   const [count, setCount] = useState(0);
//   const [message, setMessage] = useState("");

//   // Update the message when the counter changes
//   useEffect(() => {
//     console.log("Counter changed!");
//     if (count % 2 === 0) {
//       setMessage("The count is even!");
//     } else {
//       setMessage("The count is odd!");
//     }
//   }, [count]); // Dependency: Only runs when 'count' changes

//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Count: {count}</h1>
//       <h2>{message}</h2>
//       <button onClick={() => setCount(count + 1)}>Increment Count</button>
//     </div>
//   );
// };

// export default CounterWithEffect;
