import React from 'react'

interface ITitleProps{
    title: string
    subtitle: string
}

export default function Title(props : ITitleProps) {
  return (
    <div>
        <h1 className={` font-black text-3xl dark:text-zinc-100 `}>{props.title}</h1>
        <h1 className={` font-light text-sm  dark:text-zinc-200 text-gray-800 `}>{props.subtitle}</h1>
    </div>
  )
}