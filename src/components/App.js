
import React from "react";
import './../styles/App.css';
import { useSelector,useDispatch } from "react-redux";
import { incNumber,decNumber } from "../actions";

const App = () => {

  const myState = useSelector((state)=> state.update);
  const dispatch = useDispatch();
  return (
    <div className="counter">
        <button onClick={()=>dispatch(incNumber())}>+</button>
        <input type="number" readOnly value={myState}></input>
        <button onClick={()=>dispatch(decNumber())}>-</button>
    </div>
  )
}

export default App
