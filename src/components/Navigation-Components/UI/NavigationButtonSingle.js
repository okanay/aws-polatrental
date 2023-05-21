export const NavigationButtonSingle = ({onClick, btnText}) => {

    // Kayıt Ol

    return <button
        onClick={onClick}
        className={'px-2.5 py-1.5 sm:px-4 sm:py-2 hover hover:bg-skin-font-700/10 rounded transition-colors duration-500'}>
        <span className={'text-sm sm:text-base text-skin-font-500 hover:text-skin-font-200 font-medium font-plexSerif'}>{btnText}</span>
    </button>
}