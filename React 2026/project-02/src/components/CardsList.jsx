import seriesData from "../api/seriesData.json";
import Card from "./Card";
import '../styles/CardsList.css'
import {  useEffect, useState } from "react";


function CardsList() {
  console.log(seriesData);

  const [products , setProducts] = useState([])

  async function getProducts(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    setProducts(data.products)
  }

  useEffect(() => {
    getProducts()
  } , [])

  return (
    <div className="container">
      {products.map((currSeries) => (
        <Card
          title={currSeries.title}
          description={currSeries.description}
          rating={currSeries.rating}
          image={currSeries.images[0]}
        />
      ))}
    </div>
  );
}
export default CardsList;
