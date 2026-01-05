// question : [3 , 4 , 5 , 6 , 7]

/* const newArr = numbers.map((num) => {
    return num+2 // [3, 4 , 5 , 6 ,  7 ]
    })
    console.log(newArr)
    */
   // map 
   // newArray array 
   // saare element ko transform karna ho
   
   // ['PRATHAM' ,'AKASH' , 'ANSH']
   /* const capitalArr = names.map((name) => {
    return name.toUpperCase()
    })
    console.log(capitalArr) */



    
    /* // [ 4 ,5]
    const names = ['pratham' , 'akash' , 'ansh']
    // ['akash' , 'ansh'].map((val) => val.toUpperCase()) 
    // ['AKASH' , 'ANSH']
    const filterName = names.filter((name) => name.startsWith('a')).map((val) => val.toUpperCase())
    console.log(filterName)

    const filterNums = numbers.filter((num) => num > 3)
    console.log(filterNums) */
    

    const numbers = [1 , 2 , 3 , 4 , 5]

    // accumulator , current
    const sumArr = numbers.reduce((acc , curr) => {
        return acc + curr
    } , 0)

    console.log(sumArr)