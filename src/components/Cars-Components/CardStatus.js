export const CardStatus = ({available}) => {

    if (available === 0)
    {
       return <div className={'flex justify-start items-center gap-4'}>
            <div className={'relative bg-gray-300 p-[0.20rem] rounded-full z-20 ml-2'}>
                <div className="absolute p-0.5 -inset-1 bg-gradient-to-r from-gray-200 to-gray-200 opacity-85 blur z-10"></div>
            </div>
            <p className={'text-sm font-plexSerif text-gray-600'}>Serviste</p>
        </div>
    }
    else if (available === 1)
    {
        return <div className={'flex justify-start items-center gap-4'}>
            <div className={'relative bg-green-300 p-[0.20rem] rounded-full z-20 ml-2'}>
                <div className="absolute p-0.5 -inset-1 bg-gradient-to-r from-emerald-200 to-emerald-200 opacity-85 blur z-10"></div>
            </div>
            <p className={'text-sm font-plexSerif text-gray-600'}>Müsait</p>
        </div>
    }

    else if (available === 2)
    {
        return <div className={'flex justify-start items-center gap-4'}>
            <div className={'relative bg-rose-300 p-[0.20rem] rounded-full z-20 ml-2'}>
                <div className="absolute p-0.5 -inset-1 bg-gradient-to-r from-rose-200 to-rose-200 opacity-85 blur z-10"></div>
            </div>
            <p className={'text-sm font-plexSerif text-gray-600'}>Kirada</p>
        </div>
    }

    else if (available === 3)
    {
        return <div className={'flex justify-start items-center gap-4'}>
            <div className={'relative bg-skin-theme-300 p-[0.20rem] rounded-full z-20 ml-2'}>
                <div className="absolute p-0.5 -inset-1 bg-gradient-to-r from-skin-theme-300 to-skin-theme-300 opacity-85 blur z-10"></div>
            </div>
            <p className={'text-sm font-plexSerif text-gray-600'}>Yakında</p>
        </div>
    }
    else
    {
        return <></>
    }
}