'use client'

import {LoginMenuButton} from "@/components/Navigation-Components/Login/LoginMenuButton";
import {NavigationButtonSingle} from "@/components/Navigation-Components/UI/NavigationButtonSingle";
import {RegisterMenuButton} from "@/components/Navigation-Components/Register/RegisterMenuButton";
import {NavigationButtonSpray} from "@/components/Navigation-Components/UI/NavigationButtonSpray";
import {MobileNavItem} from "@/components/Navigation-Components/UI/MobileNavItem";
import {useDispatch, useSelector} from "react-redux";
import {XMarkIcon} from "@heroicons/react/20/solid";
import {CompanyLogo} from "@/components/Navigation-Components/CompanyLogo";
import {changeMobileMenuState} from "@/redux/slice/mobileMenuSlice";
import {FacebookSVG} from "@/components/Footer-Components/SocialMediaAccounts/FacebookSVG";
import {TwitterSVG} from "@/components/Footer-Components/SocialMediaAccounts/TwitterSVG";
import {InstagramSVG} from "@/components/Footer-Components/SocialMediaAccounts/InstagramSVG";
import {YoutubeSVG} from "@/components/Footer-Components/SocialMediaAccounts/YoutubeSVG";
import {WhatsAppSVG} from "@/components/Footer-Components/SocialMediaAccounts/WhatsAppSVG";

export const MobileNavigationMenu = ({navigationItems}) => {

    const mobileMenuShown = useSelector(state => state.mobileMenu.value)
    const dispatch = useDispatch()

    if (!mobileMenuShown) return

    return <>
        <div className={'w-[110vh] h-screen bg-slate-400/60 bg-slate-800/90 fixed z-[37] top-0 -left-4'}/>
        <div className={'fixed z-[38] top-0 right-0 gap-4 min-w-[20rem] h-full bg-gray-50 border-l border-gray-200/40 rounded-l-lg'}>
            <div className={'w-full h-full py-6'}>
                <div className={'flex flex-col justify-start w-full h-full px-4 items-start gap-4'}>
                    <div className={'w-full justify-between items-center flex'}>
                        <CompanyLogo/>
                        <button
                            onClick={() => {
                                dispatch(changeMobileMenuState())
                            }}
                        >
                            <XMarkIcon className={'w-8 h-8 text-gray-800'}/>
                        </button>
                    </div>
                    <hr className={'bg-gray-200/50 w-full h-0.5'}/>
                    {navigationItems.map(item => <MobileNavItem key={item.key + "mobile"} data={item}/>)}
                    <hr className={'bg-gray-200/50 w-full h-0.5 rounded-lg'}/>
                    <div className={'gap-4 flex flex-row justify-start'}>
                        <FacebookSVG href={"/"}/>
                        <TwitterSVG href={"/"}/>
                        <InstagramSVG href={"/"}/>
                        <YoutubeSVG href={"/"}/>
                        <WhatsAppSVG href={"/"}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}
