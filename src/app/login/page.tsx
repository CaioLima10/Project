"use client"

import AuthInput from "@/components/auth/AuthInput";
import { Attention } from "@/components/icons";
import { useState } from "react";
import { UseAuth } from "@/data/hooks/UseAuth";

export default function Login() {

    const { user , loginGoogle } = UseAuth()
    const [ error , setError ] = useState(null)
    const [ email , setEmail ] = useState('')
    const [ password , setPassword ] = useState('')
    const [ mode , setMode ] = useState<'login' | 'register'>()

    const IsError = (msg: any , timeSeconds = 5) => {
        setError(msg)
        setTimeout(() => {
            setError(null)
        }, timeSeconds * 1000)
    }

    const handleClick = () => {
        if(mode === 'login'){
            console.log('login')
            IsError("Ocorreu erro no login!")
        }else{
            console.log('register')
            IsError("Ocorreu erro no Cadastro!")
        }
    }

    
  return (

    <main className="flex h-screen  itens-center justify-center">
        <div className={`hidden md:block w-1/2 lg:w-2/3`}>
            <img 
                src="https://source.unsplash.com/random"  
                alt="Image" 
                className={`h-screen w-full object-cover`}
            />

        </div>
    <div className={` flex  flex-col m-10 w-full md:w-1/2 lg:w-1/3`}>
        <div>
                <span className={` text-2xlfont-bold mb-5 `}>
                    { mode === 'login' ? 'Entre com a sua conta' : 'Cadastre sua conta' }
                </span>

                { error ? (
                    <div className={` h-8 w-full bg-red-400 flex gap-2 items-center justify-center text-zinc-100 `}>
                    <span>{ Attention }</span> {error}
                    </div>
                ): false }

            <AuthInput 
                type="email"
                label="email"
                value={email}
                valueChanged={setEmail}
            />
            <AuthInput 
                type="password"
                label="password"
                value={password}
                valueChanged={setPassword}
            />
            <button 
                onClick={handleClick}
                className={` 
                    w-full bg-indigo-500 hover:bg-indigo-400 
                    text-zinc-100 rounded-lg px-4 py-3 mt-6
                `}
                >
                { mode === 'login' ? 'Entrar' : 'Cadastrar' }
            </button>

                <div className={` flex items-center gap-5 `}>
                    <hr className={`my-6 border-gray-300 w-full`}/>
                    <span>ou</span>
                    <hr className={`my-6 border-gray-300 w-full`}/>
                </div>

            <button 
                onClick={loginGoogle}
                className={` 
                    w-full bg-red-500 hover:bg-red-400 
                    text-zinc-100 rounded-lg px-4 py-3 mt-6
                `}
                >
                    Entrar com Google   
            </button>
        </div>

        { mode === 'login' ? (
            <div  className={` text-sm mt-2`}>
                    Novo por aqui?
                <a onClick={() => setMode('register')}
                className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer text-sm
                `}
                >
                    Entre com suas Credenciais?
                </a>
            </div>
        ): (
            <div className={` text-sm mt-2`}>
                    Já faz parte da nossa comunidade?
                <a onClick={() => setMode('login')} 
                    className={`
                    text-blue-500 hover:text-blue-700 font-semibold
                    cursor-pointer text-sm 
                `}>
                    Crie um conta gratuitamente?
                </a>
            </div>
        ) }

    </div>
    </main>
)
}