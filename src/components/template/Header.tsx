import React from 'react'
import Title from './Title'

interface IHeaderProps{
    title: string
    subtitle: string
}

export default function Header(props : IHeaderProps) {
  return (
    <div>
        <Title title={props.title} subtitle={props.subtitle} />
    </div>
  )
}