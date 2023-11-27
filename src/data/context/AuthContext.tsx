"use client"

import User from "@/model/User";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider , onIdTokenChanged, signInWithPopup } from "firebase/auth";
import { auth } from "@/services/firebase";
import firebase from "firebase/compat/app";
import IUser from "@/model/User";
import Cookie from "js-cookie"


interface IAuthContextProps {
  user?: User;
  loginGoogle?: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextProps);

export function AuthProvider(props: any) {
    const route = useRouter()

  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User>();

  async function userData(userFirebase: firebase.User): Promise<IUser> {
    const token = await userFirebase.getIdToken();
  
    return {
      uid: userFirebase.uid,
      email: userFirebase.email,
      name: userFirebase.displayName,
      token,
      imageUrl: userFirebase.photoURL,
    };
  }

  const manageCookie = (login: Boolean  ) => {
    if(login){
      Cookie.set('admin-template-auth' , 'true' , {
        expires: 7
      })
    }else{
      Cookie.remove('admin-template-auth')
    }
  } 
  

  async function loginGoogle() {
    const provider = new GoogleAuthProvider();

    const configSection = async(userFirebase: any) => {
      if(userFirebase?.email){

        const user = await userData(userFirebase)
        setUser(user)
        manageCookie(true)
        setLoading(false)
        return userFirebase.email
      }else{
        setUser(undefined)
        manageCookie(false)
        setLoading(false)
        return false
      }
    }
  
    try {
      const result = await signInWithPopup(auth, provider);
      const userFirebase  = await result.user;
  
        configSection(userFirebase);

        route.push("/");

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginGoogle }}>
      {props.children}
    </AuthContext.Provider>
  );
}
