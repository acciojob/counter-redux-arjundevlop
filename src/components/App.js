
import React from "react";
import './../styles/App.css';
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "../actions";

const App = () => {

  const myState = useSelector((state)=> state.update);
  const dispatch = useDispatch();
  return (
    <div className="counter">
        <button onClick={()=>dispatch(incNumber())}>increment</button>
        <h1>{myState}</h1>
        <button onClick={()=>dispatch(decNumber())}>decrement</button>
    </div>
  )
}

export default App
