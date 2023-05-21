import Link from "next/link";

export const MobileNavItem = ({data}) => {

    function scrollLocation(navigation) {

        if (navigation.scrollY.scroll === false) return

        setTimeout(() => {
            const scrollOptions = {
                top: navigation.scrollY.yMobile,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        }, 250)
    }

    return <>
        <Link
            onClick={() => {scrollLocation(data)}}
            href={data.href}
            className={'font-plexSerif text-[1.05rem] laptop:text-[1.1rem] text-skin-font-500 hover:bg-skin-font-700/10 rounded px-3 py-2 hover:text-skin-font-200 transition-colors duration-500'}>
            {data.name}
        </Link>
    </>
}