import React from 'react'

interface ITitleProps{
    title: string
    subtitle: string
}

export default function Title(props : ITitleProps) {
  return (
    <div>
        <h1>{props.title}</h1>
        <h1>{props.subtitle}</h1>
    </div>
  )
}