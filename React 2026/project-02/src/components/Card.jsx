import '../styles/Card.css'

function Card({title , image , description , rating}) {
  return (
    <div className='card'>
      <img src={image} alt="" />
      <h2 style={{color:"red", fontSize:"3rem" }}>{title}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      <button>Watch Now</button>
    </div>
  );
}

export default Card;
