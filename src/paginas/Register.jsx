import React from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 

const Registrar = () => {
  const [err, setErr] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)

      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            })
          });
        }
      );

    } catch (err) {
      setErr(true);
    }
      
  }

  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Chad Chat</span>
            <span className='title'>Registrar</span>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nome'/>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Senha'/>
                <input style={{display:"none"}} type="file" id='file' />
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Adicione uma imagem de perfil</span>
                </label>
                <button>Registrar</button>
                {err && <span>Algo deu errado</span>}
            </form>
            <p>Já tem uma conta? Fazer Login</p>
        </div>
    </div>
  )
}

export default Registrar