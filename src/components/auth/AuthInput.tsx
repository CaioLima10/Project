import React from 'react'


interface AuthInput{
    label: string
    type: string
    value: any
    mandatory?: boolean
    render?: boolean
    valueChanged: ( newValue: any) => void
}

export default function AuthInput(props: AuthInput) {
  return props.render ? null : (
    <div className={` flex flex-col mt-4`}>
        <label>{props.label}</label>
        <input 
            type={props.type}
            value={props.value}
            onChange={event => props.valueChanged?.(event.target.value)}
            className={`
                px-4 py-3 rounded-xl bg-slate-600/10 mt-2
                border focus:border-blue-500 focus:outline-none
                focus:bg-zinc-50
                `}
        />
    </div>
  )
}
