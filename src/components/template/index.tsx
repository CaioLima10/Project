"use client"

import React from 'react'
import Menu from './Menu'
import Header from './Header'
import Content from './Content'
import { UseAppData } from '@/data/hooks/UseAppData'

interface ITemplateLayoutProps{
    title: string
    subtitle: string
    children?: React.ReactNode
}

export default function TemplateLayout(props : ITemplateLayoutProps) {

  const { theme } = UseAppData()

  return (
    <div className={`${theme} flex h-screen w-screen`}>
        <Menu/>
        <div className={`flex flex-col p-7 w-full dark:bg-gray-900 bg-gray-400`}>
          <Header title={props.title} subtitle={props.subtitle}/>
          <Content>
              { props.children }
          </Content>
        </div>
    </div>
  )
}
