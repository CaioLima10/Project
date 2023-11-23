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
    <div>
      <ButtonToggleTheme 
        theme={theme} 
        toggleTheme={toggleTheme} 
        />
        <Title title={props.title} subtitle={props.subtitle} />
    </div>
  )
}