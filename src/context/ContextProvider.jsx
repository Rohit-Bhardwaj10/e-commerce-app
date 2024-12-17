import React, { useState } from 'react'
import context from './MyContext'

function ContextProvider({children}) {

   const [mode,setMode]=useState("light")
   const toggleMode=()=>{
    if(mode==="light"){
        setMode("dark")
        document.body.style.backgroundColor="rgb(17,24,39)"
    }
    else{
        setMode("light")
        document.body.style.backgroundColor="white"
    }
   }


   const [loading,setLoading]=useState(false)
  return (
    <context.Provider value={{mode,toggleMode,loading,setLoading}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider

