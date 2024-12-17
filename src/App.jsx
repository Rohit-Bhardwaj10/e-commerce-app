import './App.css'
import {BrowserRouter as Router , Route,Routes, Navigate} from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Order from './pages/Order'
import Cart from './pages/Cart'
import DashBoard from './pages/DashBoard'
import AllProducts from './pages/AllProducts'
import NoPage from './pages/NoPage'
import ContextProvider from './context/ContextProvider'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import ProductInfo from './pages/ProductInfo'
import AddProduct from './pages/AddProduct'
import UpdateProduct from './pages/UpdateProduct'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
    <ContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/order' element={
          <ProtectedRouteForUser>
            <Order/>
          </ProtectedRouteForUser>
        }/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/dashboard' element={
          <ProtectedRouteForAdmin>
            <DashBoard/>
          </ProtectedRouteForAdmin>
        }/>
        <Route path='/allproducts' element={<AllProducts/>}/>
        <Route path='/*' element={<NoPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signUp' element={<Signup/>}/>
        <Route path='/productInfo/:id' element={<ProductInfo/>}/>
        <Route path='/addproduct' element={
          <ProtectedRouteForAdmin>
            <AddProduct/>
          </ProtectedRouteForAdmin>
        }/>
        <Route path='/updateproduct' element={<UpdateProduct/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    </ContextProvider>

    </>
  )
}

export default App

// protected routes
export const ProtectedRouteForUser = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }
  else{
    <Navigate to={"/login"}/>
  }
 }

//  protected rute for admin
export const ProtectedRouteForAdmin = ({children}) => {
  const user = JSON.parse(localStorage.getItem('user'))
  if(user.user.email === "rb8329563@gmail.com"){
    return children
  }
  else{
    <Navigate to={"/login"}/>
  }
 }
