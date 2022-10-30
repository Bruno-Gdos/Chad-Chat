import React from 'react'
import Add from "../img/addAvatar.png"

export const Registrar = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chad Chat</span>
            <span className='title'>Registrar</span>
            <form>
                <input type="text" placeholder='Nome'/>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Adicione uma imagem de perfil</span>
                </label>
                <button>Registrar</button>
            </form>
            <p>Já tem uma conta? Fazer Login</p>
        </div>
    </div>
  )
}