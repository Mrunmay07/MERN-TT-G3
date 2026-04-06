import {useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [products , setProducts] = useState([])


  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  async function getProducts(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data.products)
  }
  useEffect(() => {
    getProducts()
  } , [])


  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>INCREMENT</button>
      <button onClick={handleDecrement}>DECREMENT</button>
    </>
  );
}

export default Counter;
