import React from 'react'
import MenuItem from './MenuItem'
import { Home, Settings, Bell } from '../icons'

export default function Menu() {
  return (
    <aside>
      <ul>
        <MenuItem icon={Home} url='/' text='Inicio'/>
        <MenuItem icon={Settings} url='/settings' text='config'/>
        <MenuItem icon={Bell} url='/notifications' text='notificações'/>
      </ul>
    </aside>
  )
}
