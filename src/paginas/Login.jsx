import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chad Chat</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <button>Entrar</button>
            </form>
            <p>Ainda não possui uma conta? Registrar</p>
        </div>
    </div>
  )
}

export default Login