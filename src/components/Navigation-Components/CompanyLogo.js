'use client'

import Image from "next/image";
import BrandImage from "../../../public/CompanyImages/PolatRental.svg"
import Link from "next/link";
export const CompanyLogo = () => {

    function scrollLocation() {

        setTimeout(() => {
            const scrollOptions = {
                top: 0,
            };
            window.scrollTo(scrollOptions);
        }, 10)
    }

    return <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800 font-medium'}>
        <Link
            onClick={() => {scrollLocation()}}
            href={'#anasayfa'}
            className={"font-plexSerif text-3xl tablet:text-2xl laptop:text-4xl text-transparent"}>
            Polat Rental
        </Link>
    </div>
}