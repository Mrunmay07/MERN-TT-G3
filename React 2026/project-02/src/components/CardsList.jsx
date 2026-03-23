import seriesData from "../api/seriesData.json";
import Card from "./Card";
import '../styles/CardsList.css'

function CardsList() {
  console.log(seriesData);
  return (
    <div className="container">
      {seriesData.map((currSeries) => (
        <Card
          title={currSeries.title}
          description={currSeries.description}
          rating={currSeries.rating}
          image={currSeries.image}
        />
      ))}
    </div>
  );
}
export default CardsList;
