import { useState } from "react"
import Sum from "./Sum"

function Counter(){
    const [count , setCount] = useState(0)

    console.log('Counter component rendered')

    function sayHello(){
        console.log('Hello world')
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>

            <Sum/>
        </>
    )
}

export default Counter