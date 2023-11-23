import Link from "next/link"

interface IMenuItemProps{
    url?: string
    className?: string
    text: string
    icon: React.ReactNode
    onClick?: (event: any) => void
}

export default function MenuItem(props: IMenuItemProps) {

  const RenderContentLink = () => {
    return(
        <li className={` 
            flex flex-col items-center 
            justify-center cursor-pointer
            ${props.className}
            `}>
          { props.icon }
        <span className={`text-xs`}>
          { props.text }
        </span>
        </li>
    )
  }
  return (
    <li onClick={props.onClick}>
      { props.url ? (
        <Link href={props.url} 
          className={`
            hover:bg-gray-200 flex flex-col  
              items-center justify-center h-20 w-20`
          }
          >
            {RenderContentLink()}
        </Link>
      ): (
            RenderContentLink()
      ) }
    </li>
  )
}
