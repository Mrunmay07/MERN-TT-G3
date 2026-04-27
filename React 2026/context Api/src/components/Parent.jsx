import { useContext } from "react"
import Child from "./Child"
import { Context } from "../context/ContextProvider"

function Parent(){
    const {name , age} = useContext(Context)

    return(
        <Child/>
    )
}

export default Parent