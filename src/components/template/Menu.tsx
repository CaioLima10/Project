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
        <MenuItem icon={Logout} url='/' text='Sair'/>
      </ul>
    </aside>
  )
}
