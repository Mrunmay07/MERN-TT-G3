import { NavLink } from "react-router-dom"

function Card({currMovie}){
    return(
        <div className="card">
            <img src={currMovie.Poster} alt="" />
            <h1>{currMovie.Title}</h1>
            <h2>{currMovie.Year}</h2>
            <p>{currMovie.imdbID}</p>
            
            <NavLink to={`/movies/${currMovie.imdbID}`}>
                <button>Watch Now</button>
            </NavLink>
        </div>
    )
}

export default Card