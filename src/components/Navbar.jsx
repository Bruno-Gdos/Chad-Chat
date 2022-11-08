import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chad Chat</span>
      <div className='user'>
        <img src="https://2.bp.blogspot.com/_r1kMibaacEs/TLVQgzYP33I/AAAAAAAAJXk/j8T-F70lTQ8/s320/Windows+Live+Messenger+2011+v15.4.3502.922+FINAL+%28Espa%C3%B1ol%29.jpg" alt="" />
        <span>Kleber</span>
        <button>Sair</button>
      </div>
    </div>
  )
}

export default Navbar