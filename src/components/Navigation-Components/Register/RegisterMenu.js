'use client'

import {useSelector} from "react-redux";
import {MenuCloseButton} from "@/components/Navigation-Components/UI/MenuCloseButton";
import {RegisterMenuButton} from "@/components/Navigation-Components/Register/RegisterMenuButton";
import {CloseTextButton} from "@/components/Navigation-Components/UI/CloseTextButton";
import {CompanyLogo} from "@/components/Navigation-Components/CompanyLogo";
import {GoogleCredentials} from "@/components/Navigation-Components/Credentials/GoogleCredentials";
import {EmailRegisterButton} from "@/components/Navigation-Components/Register/EmailRegisterButton";
import {OrText} from "@/components/Navigation-Components/UI/OrText";
import {LoginMenuButton} from "@/components/Navigation-Components/Login/LoginMenuButton";
import {RegisterForm} from "@/components/Navigation-Components/Register/RegisterForm";
import {RegisterPrevStep} from "@/components/Navigation-Components/Register/RegisterPrevStep";
import {CloseOrBackButton} from "@/components/Navigation-Components/Register/CloseOrBackButton";
import {RegisterMenuNavigationText} from "@/components/Navigation-Components/Register/RegisterMenuNavigationText";
import {RegisterMenuLayers} from "@/components/Navigation-Components/Register/RegisterMenuLayers";
import {AlreadyHaveAccount} from "@/components/Navigation-Components/Register/AlreadyHaveAccount";

export const RegisterMenu = () => {

    const formState = useSelector(state => state.registerSlice.value)
    if (!formState.formVisible) return

    return <div className={'w-screen h-screen bg-slate-800/40 fixed z-50 tablet:z-40 font-radio'}>
        <div className={'w-full h-full flex flex-col justify-center items-center px-2 scale-95 tablet:scale-100'}>
            <div className={'flex flex-col justify-start items-start text-start mx-auto w-full h-auto max-w-[480px] px-8 py-6 gap-2 rounded-lg bg-white border border-gray-300/50 shadow shadow-gray-300/50 relative'}>
                <div className={'absolute top-1 right-3 ring-0 cursor-pointer'}>
                    <MenuCloseButton/>
                </div>
                <div className={'my-4 w-full flex justify-between items-center'}>
                    <CloseOrBackButton formState={formState}/>
                    <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800 font-medium'}>
                        <h4
                            className={"font-plexSerif text-xl sm:text-2xl text-transparent mb-1"}>
                            Polat Rental
                        </h4>
                    </div>
                </div>
                <RegisterMenuNavigationText formState={formState}/>
                <div className={'flex flex-col justify-center items-center text-start mx-auto mt-8 gap-4 w-full'}>
                    <RegisterMenuLayers formState={formState}/>
                    <OrText/>
                    <AlreadyHaveAccount/>
                </div>
            </div>
        </div>
    </div>
}