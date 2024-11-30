import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebade_init_';

export const AuthContext=createContext(null)
const Authprovider = ({children}) => {
   const [user,setUser]=useState(null)
   const[lodeing,setLodeing]=useState(true)

   const handleCreateEmail=(email,password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
   }
   const handleLogin=(email,password)=>{
      return signInWithEmailAndPassword(auth, email, password)
   }

   const userInfo={
      user,
      lodeing,
      handleCreateEmail,
      handleLogin
   }
   return (
      <AuthContext.Provider value={userInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default Authprovider;