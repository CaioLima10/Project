import Link from "next/link"

interface IMenuItemProps{
    url: string
    text: string
    icon: React.ReactNode
}

export default function MenuItem(props: IMenuItemProps) {
  return (
    <li>
      <Link href={props.url} 
        className={`
        hover:bg-gray-200 flex flex-col 
        items-center justify-center h-20 w-20`
        }
        >
          { props.icon }
          <span className={`text-xs`}>
            { props.text }
          </span>
      </Link>
    </li>
  )
}
