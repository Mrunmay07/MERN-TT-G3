import { useContext } from "react"
import { Context } from "../context/ContextProvider"

function GrandChild(){

    const {name , age} = useContext(Context)

    return(
        <h1>Hello my name is {name}  and age is {age}</h1>
    )
}

export default GrandChild