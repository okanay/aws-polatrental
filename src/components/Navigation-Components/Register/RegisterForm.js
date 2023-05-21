'use client'

import {RegisterFormButton} from "@/components/Navigation-Components/Register/RegisterFormButton";
import {RegisterNextStep} from "@/components/Navigation-Components/Register/RegisterNextStep";
import {useDispatch} from "react-redux";
export const RegisterForm = ({formState}) => {

    const dispatch = useDispatch()
    const handleRegisterFormBtn = () => {
        RegisterNextStep(dispatch, formState)
    }

    return <div className={'w-full flex flex-col gap-4'}>


        {formState.formState === 1 &&
            <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
                <label htmlFor="email"
                       className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Email Adresiniz:</label>
                <input type="email" id="email"
                       style={{outline: "none"}}
                       className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
            </div>}

        {formState.formState === 2 &&
            <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
                <label htmlFor="firstName"
                       className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Adınız:</label>
                <input type="text" id="firstName"
                       style={{outline: "none"}}
                       className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
            </div>}

        {formState.formState === 2 &&
            <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
                <label htmlFor="lastName"
                       className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Soyadınız:</label>
                <input type="text" id="lastName"
                       style={{outline: "none"}}
                       className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
            </div>}

        {formState.formState === 3 &&
            <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
                <label htmlFor="tel"
                       className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Telefon Numaranız:</label>
                <input type="tel" id="tel"
                       style={{outline: "none"}}
                       className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
            </div>}

        {formState.formState === 4 &&
            <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
                <label htmlFor="password"
                       className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Şifreniz:</label>
                <input type="password" id="password"
                       style={{outline: "none"}}
                       className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
            </div>}

        {formState.formState === 4 &&
            <div className={'flex flex-col justify-start items-start text-start gap-2 w-full'}>
                <label htmlFor="confirmPassword"
                       className={'text-[0.9rem] text-skin-theme-600 font-bold'}>Tekrar Şifreniz:</label>
                <input type="password" id="confirmPassword"
                       style={{outline: "none"}}
                       className={'px-1 h-10 w-full rounded border border-gray-400 text-[0.9rem] text-gray-600 font-semibold'}/>
            </div>}

        <RegisterFormButton formState={formState} handleRegisterFormBtn={handleRegisterFormBtn}/>
    </div>
}