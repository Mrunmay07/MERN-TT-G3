import { useLoaderData } from "react-router-dom"

function MovieDetails(){

    const movieData = useLoaderData() // Object

    const {Title , Poster , Actors , Runtime , Awards} = movieData

    return(
       <>
        <h1>{Title}</h1>
        <img src={Poster} alt="" />
        <h2>{Actors}</h2>
        <b>{Runtime}</b>
        <h2>{Awards}</h2>
       </>
    )
}

export default MovieDetails