import { createContext, useState } from "react";

export const Context = createContext()

function ContextProvider({children}){

  const [name , setName] = useState('Akash')
  const [age , setAge ] = useState(20)


    return <Context.Provider value={{age , name}}>
        {children}
    </Context.Provider>
}

export default ContextProvider