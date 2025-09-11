import React from 'react'
import { LOGO_URL } from '../utils/constants'
import { useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import useOnlinestatus from '../Hooks/useOnlinestatus'
import UserContext from '../utils/UserContext'
import { useSelector } from 'react-redux'
const Header = () => {
  const[btnName, setBtnName] = useState("Login")
 const {loggedInUser}= useContext(UserContext)
  const onlineStatus = useOnlinestatus()
  //Useffect hook:
  /*
  1. if no dependency array is passed, useEffect will be called on every render.
  2. if the dependency array is empty, useEffect will be called only once in the initial render.    
  3. if the dependency array is passed, useEffect will be called on every render
  when the values in the dependency array change.
  */

  //subscribIng to the store using useSelector
  const cartItems = useSelector((store) => store.cart.items);
    return(
        <div className="flex justify-between shadow-lg sm:bg-slate-100">
         <div className="logo-container">
           <img className = "w-24" 
           src={LOGO_URL}
           alt="img-logo"/>
           <h5 className='text-sm'>Fork & Flame</h5>
           </div>
           
         <div className="flex items-center">
         <ul className='flex p-4 m-4'>
          <li className='px-4'>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
           <li>
             {/*Link tag is used to create hyperlinks and navigate to another page 
            without reloading the page like <a></a> tag.*/} 
            <Link to="/">Home</Link></li>
           <li className='px-4'>
            <Link to="/about">About Us</Link></li>
           <li className='px-4'>
            <Link to="/contact">Contact Us</Link>
            </li>  
           <li className='px-4'>
            <Link to="/grocery">Grocery</Link></li>  
           <li className='px-4'>
            <Link to="/cart">Cart-({cartItems.length} items)</Link></li>
           <button className="px-4"
           onClick={() => { 
            btnName === "Login" ? setBtnName("Logout") :
             setBtnName("Login")} }>{btnName}</button>
             <li className='px-4 font-bold'>{loggedInUser}</li>
         </ul>
        </div>       
        </div>
       )
}

export default Header

