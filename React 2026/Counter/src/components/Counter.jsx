import { useState } from "react";

function Counter() {

  const [count , setCount] = useState(0)

  const handleIncrement = () => {
   setCount(count +1  )
   setCount(count +1  )
   setCount(count +1  )
  }

  const handleDecrement = () => {
   setCount(count - 1)
  }
    
  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </>
  );
}

export default Counter;
