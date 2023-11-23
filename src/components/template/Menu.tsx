'use client'

import React from 'react'
import MenuItem from './MenuItem'
import { Home, Settings, Bell, Logout } from '../icons'

export default function Menu() {
  return (
    <aside className={`flex flex-col `}>
      <ul className={` flex-1 `}>
        <MenuItem icon={Home} url='/' text='Inicio'/>
        <MenuItem icon={Settings} url='/settings' text='config'/>
        <MenuItem icon={Bell} url='/notifications' text='notificações'/>
      </ul>
      <ul >
        <MenuItem 
          icon={Logout} 
          onClick={() => console.log('logout')} 
          text='Sair'
          className={` text-red-600 hover:bg-red-600 hover:text-zinc-100 p-3 `}
          />
      </ul>
    </aside>
  )
}
