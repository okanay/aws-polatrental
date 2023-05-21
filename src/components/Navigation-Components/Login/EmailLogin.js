export const EmailLogin = () => {


    return <form action={''} className={'w-full space-y-3'}>
        <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
            <label htmlFor="email" className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Email</label>
            <input type="email" id="email"
                   style={{outline: "none"}}
                   className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
        </div>
        <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
            <label htmlFor="password"
                   className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Şifre</label>
            <input type="password" id="password"
                   style={{outline: "none"}}
                   className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
        </div>
        <div className={'flex flex-row justify-end items-center w-full mt-1.5'}>
            <button
                className={'w-full py-[0.45rem] rounded border border-gray-400 text-[1.05rem] text-white bg-gradient-to-tr from-skin-theme-500 via-skin-theme-300/65 to-skin-theme-400 '}>
                Giriş Yap
            </button>
        </div>
    </form>
}
