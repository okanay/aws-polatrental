'use client'

import {useSelector} from "react-redux";
import {MenuCloseButton} from "@/components/Navigation-Components/UI/MenuCloseButton";
import {ContactMenuButton} from "@/components/Cars-Components/Cars-Contact-Components/ContactMenuButton";
import {CloseTextButton} from "@/components/Navigation-Components/UI/CloseTextButton";
import {GoogleCredentials} from "@/components/Navigation-Components/Credentials/GoogleCredentials";
import {OrText} from "@/components/Navigation-Components/UI/OrText";
import {EmailLogin} from "@/components/Navigation-Components/Login/EmailLogin";
import {RegisterMenuButton} from "@/components/Navigation-Components/Register/RegisterMenuButton";
import {Contact} from "@/components/Index-Components/ContactUS-Components/Contact";
import {ContactInput} from "@/components/Index-Components/ContactUS-Components/ContactInput";
import {useRef} from "react";
import {CardContactForm} from "@/components/Cars-Components/Cars-Contact-Components/CardContactForm";

export const ContactMenu = () => {

    const carsContact = useSelector(state => state.carsContact.value)
    if (!carsContact.formVisible) return

    return <>
        <div className="bg-black bg-opacity-50 z-[100] fixed inset-0 flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center px-2 scale-95 tablet:scale-100">
                <div className="max-h-screen overflow-y-auto flex flex-col justify-start items-start text-start mx-auto w-full h-auto max-w-[480px] px-8 py-6 gap-2 rounded-lg bg-white border border-gray-300/50 shadow shadow-gray-300/50 relative">

                    <div className="absolute top-1 right-3 ring-0 cursor-pointer">
                        <MenuCloseButton/>
                    </div>
                    <div className="my-4 w-full flex justify-between items-center">
                        <ContactMenuButton>
                            <CloseTextButton/>
                        </ContactMenuButton>
                        <div className="bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800 font-medium">
                            <h4 className="font-plexSerif text-xl sm:text-2xl text-transparent mb-1">
                                Polat Rental
                            </h4>
                        </div>
                    </div>

                    <h1 className="text-sm text-skin-theme-600 font-bold font-openSans">Kiralamaya Başla:</h1>
                    <p className="text-sm sm:text-base">
                        <span className="font-medium">Harika!</span> Seçtiğiniz modeli kiralamaya hemen başlayabilirsiniz. İletişim bilgilerinizi bize
                        ulaştırırsanız sizi en kısa sürede ulaşacağız.
                    </p>
                    <div className="flex flex-row flex-wrap justify-start items-center gap-1 smPhone:gap-2 sm:gap-4 text-gray-900 font-bold text-xs basePhone:text-sm sm:text-base">
                        <p>{carsContact.data.brand}</p>
                        <p>{carsContact.data.name}</p>
                        <p>{carsContact.data.type}</p>
                        <p>{carsContact.data.gear}</p>
                        <p>{carsContact.data.gas}</p>
                    </div>

                    <CardContactForm/>
                </div>
            </div>
        </div>
    </>

}