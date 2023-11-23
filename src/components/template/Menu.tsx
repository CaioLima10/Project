
import React from 'react'
import MenuItem from './MenuItem'
import { Home, Settings, Bell, Logout } from '../icons'

export default function Menu() {
  return (
    <aside className={`flex flex-col dark:bg-gray-600 dark:text-zinc-200`}>
      <ul className={` flex-1 `}>
        <MenuItem icon={Home} url='/' text='Inicio'/>
        <MenuItem icon={Settings} url='/settings' text='config'/>
        <MenuItem icon={Bell} url='/notifications' text='notificações'/>
      </ul>
      <ul >
        <li className=
        {`dark:text-zinc-200 dark:hover:text-zinc-900 text-red-700
         dark:hover:bg-red-400 hover:bg-red-500 hover:text-zinc-200 p-3`}
         >
          <MenuItem 
            icon={Logout} 
            onClick={() => console.log('logout')} 
            text='Sair'
            />    
        </li>
      </ul>
    </aside>
  )
}
