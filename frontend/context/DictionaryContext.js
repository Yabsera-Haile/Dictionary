import {createContext,useState } from 'react'

export const 

DictionaryContext = createContext();



export const DictionaryContextProvider = ({children}) => {
       
    const [lang,setLang]=useState("1777aed8-5d0d-4762-9cb6-4bca9671ee44")
    const [change,setChange]=useState(false)
            
        

    return(
    <DictionaryContext.Provider value={{lang,setLang,change,setChange}}>
        {children}
    </DictionaryContext.Provider>
    )
}
