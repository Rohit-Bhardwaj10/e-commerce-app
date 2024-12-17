import React, { useState } from 'react'
import context from './MyContext'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { fireDB } from '../firebase/FireBaseConfig'

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


   const [productDesc,setProductDesc]=useState({
    title:null,
    price:null,
    imageURL:null,
    category:null,
    description:null,
    time:Timestamp.now(),
    date:new Date().toLocaleString(
      "en-US",
      {
        month:"short",
        day:"2-digit",
        year:"numeric",
      }
    )
   })

   const addProduct= async ()=>{
    if(productDesc.category==null || productDesc.price==null || productDesc.imageURL==null || productDesc.category == null ||  productDesc.description == null){
      return toast.error("All Feilds Are Required!!")
    }
    setLoading(true)
    try {
      const productRef =collection(fireDB,"products")
      await addDoc(productRef,productDesc)
      toast.success("Product Added Successfully !")
      setLoading(false)
    } catch (error) {
      console.log(error);
      toast.error(error)
      setLoading(false)
    }
   }

   const [product,setProduct]=useState([])
   
  return (
    <context.Provider value={{mode,toggleMode,loading,setLoading}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider

