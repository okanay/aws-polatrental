export const NavigationButtonBorder = ({onClick, btnText}) => {

    // Kayıt Ol

    return <button
        onClick={onClick}
        className={'px-2.5 py-1.5 sm:px-4 border border-skin-theme-400 rounded'}>
        <span className={'text-sm sm:text-base font-medium text-skin-theme-400 font-openSans'}>{btnText}</span>
    </button>
}