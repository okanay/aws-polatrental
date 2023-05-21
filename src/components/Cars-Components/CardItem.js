'use client'

import Image from "next/image";
import PeopleSVG from "../../../public/CardIcons/people.svg";
import DoorSVG from "../../../public/CardIcons/door.svg";
import GasSVG from "../../../public/CardIcons/gas.svg";
import GearSVG from "../../../public/CardIcons/gear.svg";
import AcSVG from "../../../public/CardIcons/AC.svg";
import IdSVG from "../../../public/CardIcons/id.svg";
import spinner from "../../../public/SVG/spinner.svg"
import {CardStatus} from "@/components/Cars-Components/CardStatus";
import {CardContactButton} from "@/components/Cars-Components/Cars-Contact-Components/CardContactButton";
import {useState} from "react";

export const CardItem = ({cardData}) => {

    const defaultImageSrc = `/CarImages/${cardData.brand}/${cardData.name}/${cardData.year}/default.webp`
    const [loading, setLoading] = useState(true)

    return <div
        className="group max-w-[375px] lg:max-w-[360px] w-full bg-white border border-slate-100 shadow-neutral-300/25 shadow-md rounded-lg hover:border-slate-200 transition-colors duration-500 overflow-hidden relative">
        <div className={`flex flex-col justify-center items-center absolute min-h-[185px] max-h-[185px] w-full z-[99] ${!loading ? 'hidden' : 'block'}`}>
            <Image priority
                   className="w-14 h-14 absolute"
                   src={spinner} alt={"Yükleniyor."}
            />
        </div>
        <Image priority
               onLoadingComplete={() => {setLoading(false)}}
               className="group-hover:scale-110 transition-all duration-500 rounded-t-lg min-h-[185px] max-h-[185px] object-center object-scale-down bg-gradient-to-t from-white via-skin-theme-950/20 to-skin-theme-950/10  max-h-[175px]"
               src={defaultImageSrc} alt={cardData.image[0].imageAlt}
               width={1200} height={1200}/>
        <div className="pt-3 pb-6 sm:pt-6 sm:pb-8 font-figtree bg-gradient-to-t from-gray-50 via-gray-50 to-gray-10">
            <div className={'flex-wrap flex justify-between items-center px-4 items-center'}>
                <h5 className="text-[1.45rem] font-bold tracking-tight text-gray-900 font-openSans">{cardData.brand + " " + cardData.name}</h5>
                <div className={'hidden smPhone:flex flex-col justify-end items-end text-end text-gray-600'}>
                    <p className={'text-sm font-semibold'}>{cardData.model}</p>
                    <p className={'text-sm'}>{cardData.type}</p>
                </div>
            </div>
            <div
                className={'flex flex-row flex-wrap items-start justify-center max-w-[340px] mx-auto text-gray-600 py-10 gap-4 px-8'}>
                <div className={'flex flex-row justify-start gap-1 items-center'}>
                    <Image src={PeopleSVG} alt={"Araç maksimum kişi kapasitesi"} priority
                           className={'w-4 h-4'}/>
                    <p className={'text-sm'}><span className={'font-bold'}>{cardData.capacity}</span> Kişi</p>
                </div>
                <div className={'flex flex-row justify-start gap-1 items-center'}>
                    <Image src={DoorSVG} alt={"Araç maksimum kişi kapasitesi"} priority
                           className={'w-4 h-4'}/>
                    <p className={'text-sm'}><span className={'font-bold'}>{cardData.doorCount}</span> Kapı</p>

                </div>
                <div className={'flex flex-row justify-start gap-1 items-center'}>
                    <Image src={GasSVG} alt={"Araç maksimum kişi kapasitesi"} priority
                           className={'w-4 h-4'}/>
                    <p className={'text-sm'}>{cardData.gas}</p>

                </div>
                <div className={'flex flex-row justify-start gap-1 items-center'}>
                    <Image src={GearSVG} alt={"Araç maksimum kişi kapasitesi"} priority
                           className={'w-4 h-4'}/>
                    <p className={'text-sm'}>{cardData.gear}</p>

                </div>
                <div className={'flex flex-row justify-start gap-1 items-center'}>
                    <Image src={AcSVG} alt={"Araç maksimum kişi kapasitesi"} priority
                           className={'w-4 h-4'}/>
                    <p className={'text-sm'}>{cardData.ac}</p>

                </div>
                <div className={'flex flex-row justify-start gap-1 items-center'}>
                    <Image src={IdSVG} alt={"Araç maksimum kişi kapasitesi"} priority
                           className={'w-4 h-4'}/>
                    <p className={'text-sm'}>Min. <span className={'font-bold'}>{cardData.minAge}</span> Yaş</p>
                </div>
            </div>
            <div className={'w-full flex justify-between items-center px-4'}>
                <CardStatus available={cardData.available}/>
                <CardContactButton cardData={cardData}/>
            </div>
        </div>
    </div>

}