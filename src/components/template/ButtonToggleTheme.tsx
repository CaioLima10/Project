import { Moon, Sun } from "../icons"


interface IButtonToggleThemeProps{
    theme?: string
    toggleTheme?: () => void
    className?: string
}

export default function ButtonToggleTheme( props: IButtonToggleThemeProps ) {
  return (
    <div className={` flex w-24 h-8 rounded-xl bg-red-400 `}>
        {  props.theme === 'dark' ? (
        <div className={` flex items-center justify-start w-full  `} onClick={props.toggleTheme}>
            {Moon}
        </div>        
        ) : (
            <div className={` flex items-center justify-end w-full  `} onClick={props.toggleTheme}>
                {Sun}
            </div>    
        ) }
    </div>
  )

}
