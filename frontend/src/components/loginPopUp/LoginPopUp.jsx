import React, {useState} from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets';

const LoginPopUp = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState('Login');
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-pop-title">
            <h2>{currentState}</h2>
            <img onClick={()=> setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login"?<></>:<input type="text" placeholder='Name' required />}
            <input type="email" placeholder='Email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{currentState==="Sign Up"?"Create Account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required />
            <p>By continuing, You agree to the Terms of Use & Privacy Policy.</p>
        </div>
        {currentState==="Login"
        ?<p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p>}
        
        
      </form>
    </div>
  )
}

export default LoginPopUp
