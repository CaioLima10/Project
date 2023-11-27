"use client"

import TemplateLayout from '@/components/template'
import UserAvatar from '@/components/template/Avatar'
import { UseAuth } from '@/data/hooks/UseAuth'

export default function Home() {

  const { user } = UseAuth()

  console.log(user?.name)

  return (
    <main>
      <TemplateLayout 
        title='Página Inicial' 
        subtitle='estamos construindo um template admin'
      >
      <UserAvatar/>

      </TemplateLayout>
    </main>
  )
} 
