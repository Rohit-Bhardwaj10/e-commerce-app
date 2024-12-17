import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase/FireBaseConfig'
import { toast } from 'react-toastify'
import { useState } from 'react'

function Login() {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const navigate=useNavigate()

   const handleLogin = async (e) => {
    e.preventDefault()
    try {
        const res= await signInWithEmailAndPassword(auth,email,password)
        toast.success("sigin succesfully")
        localStorage.setItem('user',JSON.stringify(res))
        navigate('/')
    } catch (error) {
        toast.error("sign-in failed")
    }
   }
    return (
        <div className=' flex justify-center items-center h-screen'>
            <div className=' bg-gray-800 px-10 py-10 rounded-xl '>
                <div className="">
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Login</h1>
                </div>
                <div>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        name='email'
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Email'
                    />
                </div>
                <div>
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className=' bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                        placeholder='Password'
                    />
                </div>
                <div className=' flex justify-center mb-3'>
                    <button
                    onClick={handleLogin}
                        className=' bg-yellow-500 w-full text-black font-bold  px-2 py-2 rounded-lg'>
                        Login
                    </button>
                </div>
                <div>
                    <h2 className='text-white'>Don't have an account <Link className=' text-yellow-500 font-bold' to={'/signup'}>Signup</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default Login
