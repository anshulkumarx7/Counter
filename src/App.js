import React from 'react';
import { useState } from "react";
function App() {  
  var [count,setCount]=useState(0);
  function increase(){
    setCount(count+1);
  }
  function decrease(){
    setCount(count-1);
  }
  return (
    <div className="App">
      <h1 className='counter'>{count}</h1>
      <div className='buttons'>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
