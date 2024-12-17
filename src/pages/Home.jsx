import React, { useContext } from 'react'
import Layout from '../components/layout/Layout'
import context from '../context/MyContext'
import HeroSection from '../components/heroSection/HeroSection'
import Filter from '../components/filter/Filter'
import LatestProducts from '../components/LatestProducts/LatestProducts'
import Testimonials from '../components/testimonials/Testimonials'
import Footer from '../components/footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../redux/CartSlice'

const Home = () => {

  const dispatch=useDispatch()
  const CartItem=useSelector((state)=>state.cart)

  const addcart=()=>{
    dispatch(addToCart("shirt"))
  }

  const deleteprods=()=>{
    dispatch(deleteFromCart("shirt"))
  }

  return (
    <div>
        <Layout>
            <HeroSection/> 
            <Filter/>
            <LatestProducts/>
            <Testimonials/>
        </Layout>
    </div>
  )
}

export default Home
