import React from 'react'

interface IContentProps{
    children?: React.ReactNode
}

export default function Content(props : IContentProps) {
  return (
    <div className={` flex flex-col mt-7 `}>
        { props.children }
    </div>
  )
}