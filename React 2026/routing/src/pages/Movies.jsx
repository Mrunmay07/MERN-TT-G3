import { useLoaderData } from "react-router-dom"
import Card from "../components/ui/Card"

function Movies(){

   const moviesData = useLoaderData()
   console.log(moviesData.Search)

    return(
        <ul>
            {
                moviesData.Search.map((currMovie) => {
                    return <Card currMovie={currMovie}/>
                })
            }
        </ul>
    )
}

export default Movies