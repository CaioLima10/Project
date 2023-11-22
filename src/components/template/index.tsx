import React from 'react'
import Menu from './Menu'
import Header from './Header'
import Content from './Content'

interface ITemplateLayoutProps{
    title: string
    subtitle: string
    children?: React.ReactNode
}

export default function TemplateLayout(props : ITemplateLayoutProps) {
  return (
    <div className={`flex h-screen w-screen`}>
        <Menu/>
        <div className={`flex flex-col p-7 w-full bg-gray-400`}>
          <Header title={props.title} subtitle={props.subtitle}/>
          <Content>
              { props.children }
          </Content>
        </div>
    </div>
  )
}
