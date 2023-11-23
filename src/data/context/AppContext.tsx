"use client"

import { createContext, useCallback, useState } from "react";

type  Theme =  'dark' | ''

interface IAppContextProps{
    children: React.ReactNode
    theme?: Theme
    toggleTheme?: () => void
}

export const AppContext = createContext<IAppContextProps>({} as IAppContextProps)

export function AppProvider({  children }: IAppContextProps){

    const [ theme , setTheme ] = useState<Theme>('')

    const toggleTheme = useCallback(() => {
        setTheme(theme === '' ? 'dark' : '')
    }, [ theme ])

    return(
        <AppContext.Provider value={{  children, theme , toggleTheme }}>
            { children }
        </AppContext.Provider>
    )
}