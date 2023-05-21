'use client'
import {useSelector} from "react-redux";
import {LoginMenuButton} from "@/components/Navigation-Components/Login/LoginMenuButton";
import {CompanyLogo} from "@/components/Navigation-Components/CompanyLogo";
import GoogleSVG from "../../../../public/SocialMedia/Google.svg"
import TwitterSVG from "../../../../public/SocialMedia/Twitter.svg"
import Image from "next/image";
import {RegisterMenuButton} from "@/components/Navigation-Components/Register/RegisterMenuButton";
import {ArrowLeftIcon, XMarkIcon} from "@heroicons/react/20/solid";
import {TwitterCredentials} from "@/components/Navigation-Components/Credentials/TwitterCredentials";
import {GoogleCredentials} from "@/components/Navigation-Components/Credentials/GoogleCredentials";
import {EmailLogin} from "@/components/Navigation-Components/Login/EmailLogin";
import {MenuCloseButton} from "@/components/Navigation-Components/UI/MenuCloseButton";
import {CloseTextButton} from "@/components/Navigation-Components/UI/CloseTextButton";
import {OrText} from "@/components/Navigation-Components/UI/OrText";
import Link from "next/link";

export const LoginMenu = () => {

    const shown = useSelector(state => state.loginSlice.value)

    if (!shown) return

    return <div className={'w-screen h-screen bg-slate-800/40 fixed z-50 tablet:z-40 font-radio'}>
        <div className={'w-full h-full flex flex-col justify-center items-center px-2 scale-95 tablet:scale-100 '}>
            <div className={'flex flex-col justify-start items-start text-start mx-auto w-full h-auto max-w-[480px] px-8 py-6 gap-2 rounded-lg bg-white border border-gray-300/50 shadow shadow-gray-300/50 relative'}>

                <div className={'absolute top-1 right-3 ring-0 cursor-pointer'}>
                    <MenuCloseButton/>
                </div>
                <div className={'my-4 w-full flex justify-between items-center'}>
                    <LoginMenuButton>
                        <CloseTextButton/>
                    </LoginMenuButton>
                    <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800 font-medium'}>
                        <h4
                            className={"font-plexSerif text-xl sm:text-2xl text-transparent mb-1"}>
                            Polat Rental
                        </h4>
                    </div>
                </div>

                <h1 className={'text-skin-theme-600 font-bold'}>Kullanıcı Girişi</h1>
                <p>Polat Rental hesabınıza giriş yapmak için aşağıdaki yöntemlerden birini tercih edebilirsiniz:</p>
                <div className={'flex flex-col justify-center items-center text-start mx-auto mt-8 gap-4 w-full'}>
                    <div className={'flex flex-col justify-center items-center gap-2 w-full'}>
                        <GoogleCredentials/>
                        {/*<TwitterCredentials/>*/}
                    </div>
                    <OrText/>
                    <EmailLogin/>
                    <div className={'flex flex-col justify-center items-center text-center w-full gap-1 text-sm'}>
                        <p>Hesabınız yok mu?</p>
                        <RegisterMenuButton>
                            <button className={'text-skin-theme-600 underline font-semibold'}>Kayıt Ol</button>
                        </RegisterMenuButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
}