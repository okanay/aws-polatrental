export const NavigationButtonGradient = ({onClick, btnText}) => {

    return <button
        onClick={onClick}
        className={'px-2.5 py-1.5 sm:px-4 bg-gradient-to-tr from-skin-theme-500 via-skin-theme-300/65 to-skin-theme-400 rounded'}>
        <span className={'text-sm sm:text-base text-skin-font-950 font-medium font-plexSerif'}>{btnText}</span>
    </button>
}