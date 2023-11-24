"use client"

import React from 'react'
import Title from './Title'
import { UseAppData } from '@/data/hooks/UseAppData'
import ButtonToggleTheme from './ButtonToggleTheme'

interface IHeaderProps{
    title: string
    subtitle: string
}

export default function Header(props : IHeaderProps) {

  const { toggleTheme , theme  } = UseAppData()

  return (
    <div className={` flex flex-col w-full `}>
      <div className={` flex w-full items-end justify-end `}>
      <ButtonToggleTheme 
        theme={theme} 
        toggleTheme={toggleTheme} 
        />
      </div>
        <Title title={props.title} subtitle={props.subtitle} />
    </div>
  )
}