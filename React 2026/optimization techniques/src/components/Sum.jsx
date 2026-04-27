import { memo } from "react";

function Sum(){

    function calculateSum(){
        let sum = 0;
        for(let i = 0 ; i<=100 ; i++){
            sum += i ;
        }
        return sum
    }

    console.log('Sum component rendered')
    const total = calculateSum()

    return(
        <h1>Sum is : {total}</h1>
    )
}

export default memo(Sum)