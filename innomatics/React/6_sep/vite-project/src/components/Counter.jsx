import { useState } from "react"

const Counter= ()=>{
  //syntax
  //const[variable,setterFunction]=useState(initialState);

  const[count,setCount]=useState(0)
  const increment=(e)=>{
    setCount(count + 1)
  }
  const decrement=(e)=>{
    setCount(count - 1)
  }


  return(
    <div>
      <h3>Count:{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter