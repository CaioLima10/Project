'use client'
import { UseAuth } from "@/data/hooks/UseAuth"
import Link from "next/link"

export default function UserAvatar() {

    const { user } = UseAuth()

  return (
    <Link href="/profile">
        <img src={ user?.imageUrl ?? '' } 
        alt="imagem-do-usuario"
        className="h-10 w-10 rounded-full cursor-pointer"
        />
    </Link>
  )
}
