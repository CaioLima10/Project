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
    <div>
        <Menu/>
        <Header title={props.title} subtitle={props.subtitle}/>
        <Content>
            { props.children }
        </Content>
    </div>
  )
}
