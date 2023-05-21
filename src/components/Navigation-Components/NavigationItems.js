'use client'

import Link from "next/link";

export const NavigationItems = ({navigationItems}) => {

    function scrollLocation(navigation) {

        if (navigation.scrollY.scroll === false) return

        setTimeout(() => {
            const scrollOptions = {
                top: navigation.scrollY.y,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        }, 250)
    }


    return <>
        {navigationItems.map(navigation => {
            return (
                <Link
                    onClick={() => {scrollLocation(navigation)}}
                    key={navigation.key}
                    href={navigation.href}
                    className={'text-[1.05rem] laptop:text-[1.15rem] text-skin-font-500 hover:bg-skin-font-700/10 rounded px-2 py-2 hover:text-skin-font-200 transition-colors duration-500 font-plexSerif'}>
                    {navigation.name}
                </Link>
            )
        })}
    </>

}