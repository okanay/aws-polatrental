'use client'

export const ContactButton = ({onClick, btnText, type, ref, loading}) => {

    return <div className={'w-full flex items-end justify-end'}>
        <button
            value={""}
            type={type}
            onClick={onClick}
            ref={ref}
            disabled={loading}
            className={`disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed
            relative text-gray-900/90 font-semibold font-openSans text-sm w-[175px] h-[50px] 
            bg-white border-[0.11rem] border-slate-500/75 rounded text-gray-600
            hover:bg-skin-theme-400 hover:border-skin-theme-200/40 hover:text-white
            transition-colors duration-500 mt-3`}>
            <span className={`${loading === false ? "block" : "hidden"}`}>
                {btnText}
            </span>
            <span className={`${loading === true ? "block" : "hidden"} relative`}>
                Gönderiliyor..
            </span>
        </button>
    </div>
}

