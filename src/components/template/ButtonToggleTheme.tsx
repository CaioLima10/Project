import Image from "next/image"
import Moon from "../../assets/moon.svg"
import Sun from "../../assets/sun.svg"

interface IButtonToggleThemeProps{
    theme?: string
    toggleTheme?: () => void
    className?: string
}

export default function ButtonToggleTheme( props: IButtonToggleThemeProps ) {
  return (
    <div className={` flex w-20 h-8 rounded-2xl dark:bg-blue-100/50 bg-yellow-200 cursor-pointer `}
        onClick={props.toggleTheme}
    >
        {  props.theme === 'dark' ? (
        <div className={` flex items-center justify-start bg-slate-300 border-2 border-slate-300 rounded-full  text-zinc-300`} onClick={props.toggleTheme}>
            <Image src={Moon} alt="Lua"/>
        </div>        
        ) : (
        <div className={` flex items-center justify-end w-full `} onClick={props.toggleTheme}>
            <Image src={Sun} alt="Sol"/>
        </div>    
        ) }
    </div>
  )

}
