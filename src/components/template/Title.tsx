import React from 'react'

interface ITitleProps{
    title: string
    subtitle: string
}

export default function Title(props : ITitleProps) {
  return (
    <div>
        <h1 className={` font-black text-3xl `}>{props.title}</h1>
        <h1 className={` font-light text-sm text-gray-800 `}>{props.subtitle}</h1>
    </div>
  )
}