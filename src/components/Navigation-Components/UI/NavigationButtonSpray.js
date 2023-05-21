export const NavigationButtonSpray = ({onClick, btnText}) => {


    return <button
        onClick={onClick}
        className={'px-2.5 py-1.5 sm:px-4 sm:py-2 bg-gray-200/80 rounded'}>
        <span className={'text-sm sm:text-base text-gray-500 font-medium font-openSans'}>{btnText}</span>
    </button>
}