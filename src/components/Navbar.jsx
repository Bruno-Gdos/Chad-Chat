import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>Chad Chat</span>
      <div className='user'>
        <img src="https://2.bp.blogspot.com/_r1kMibaacEs/TLVQgzYP33I/AAAAAAAAJXk/j8T-F70lTQ8/s320/Windows+Live+Messenger+2011+v15.4.3502.922+FINAL+%28Espa%C3%B1ol%29.jpg" alt="" />
        <span>Kleber</span>
        <button onClick={()=>signOut(auth)}>Sair</button>
      </div>
    </div>
  )
}

export default Navbar