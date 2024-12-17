import { Link } from "react-router-dom";
import { useState } from "react";
import {toast} from 'react-toastify'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth ,fireDB } from "../firebase/FireBaseConfig";
import { addDoc, collection, Timestamp } from "firebase/firestore";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup=async ()=>{
    if(username==="" | email==="" | password===""){
        return toast.error("all feilds must be filled correctly")
    }
    try {
      const users= await createUserWithEmailAndPassword(auth,email,password)
      console.log(users);
      const user ={
        name:username,
        email:email,
        uid:users.user.uid,
        time:Timestamp.now(),
      }
      const userref=collection(fireDB,"users")
      await addDoc(userref,user)
      toast.success("signUp successfull !!")
      setEmail("")
      setPassword("")
      setUsername("")
    } catch (error) {
      console.log(error);
    }

  }
  return (
    <div className=" flex justify-center items-center h-screen">
      <div className=" bg-gray-800 px-10 py-10 rounded-xl ">
        <div className="">
          <h1 className="text-center text-white text-xl mb-4 font-bold">
            Signup
          </h1>
        </div>
        <div>
          <input
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            type="text"
            name="name"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Name.."
          />
        </div>
        <div>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            type="email"
            name="email"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Email"
          />
        </div>
        <div>
          <input
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
            type="password"
            className=" bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none"
            placeholder="Password"
          />
        </div>
        <div className=" flex justify-center mb-3">
          <button 
          className=" bg-red-500 w-full text-white font-bold  px-2 py-2 rounded-lg"
          onClick={signup}
          >
            Signup
          </button>
        </div>
        <div>
          <h2 className="text-white">
            Have an account{" "}
            <Link className=" text-red-500 font-bold" to={"/login"}>
              Login
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Signup;
