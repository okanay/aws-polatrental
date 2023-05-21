'use client'

import {ContactMenuButton} from "@/components/Cars-Components/Cars-Contact-Components/ContactMenuButton";
import {useRef, useState} from "react";
import {useSelector} from "react-redux";
import {sendCardContactForm, sendContactForm} from "@/lib/api";
import {ContactInput} from "@/components/Index-Components/ContactUS-Components/ContactInput";

export const CardContactForm = () => {

    const carsContact = useSelector(state => state.carsContact.value)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)
    const telRef = useRef(null)

    const handleGetInputData = () => {
        return {
            email: emailRef.current.value,
            tel: telRef.current.value,
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            data: {...carsContact.data}
        }
    }
    const handleResetInput = () => {
        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
        telRef.current.value = '';
    }
    const handleOnClick = async (event) => {

        event.preventDefault()

        if (loading) return
        if (!loading) setLoading(true)

        setSuccess(false)

        const data = await sendCardContactForm(handleGetInputData())
        const status = data.status

        if (status === 200) {
            handleResetInput()
            setSuccess(true)
            setError(false)
        } else if (status !== 200) {
            setError(true)

        }

        setLoading(false)
    }


    return <>
        <form action="" className={'w-full'}>
            <div className={'grid grid-cols-1 tablet:grid-cols-2 gap-2.5 w-full mt-4'}>
                <div className={'w-full'}>
                    <label className={'text-[0.95rem] text-skin-theme-600 font-bold font-openSans'}
                           htmlFor={"firstName"}>{'Adınız'}</label>
                    <input type={"firstName"} name={'firstName'} id={'firstName'} ref={firstNameRef}
                           style={{outline: "none"}}
                           placeholder={'Adınız'} required={true}
                           className={'font-figtree placeholder:text-sm placeholder:font-base mt-2 outline-skin-body-600 text-sm font-semibold text-gray-500 w-full px-2 py-[22px] rounded h-10 border-[0.12rem] border-gray-600/90 focus:outline-skin-theme-400'}/>
                </div>
                <div className={'w-full'}>
                    <label className={'text-[0.95rem] text-skin-theme-600 font-bold font-openSans'}
                           htmlFor={"lastName"}>{'Soyadınız'}</label>
                    <input type={"lastName"} name={'lastName'} id={'lastName'} ref={lastNameRef}
                           style={{outline: "none"}}
                           placeholder={'Soyadınız'} required={true}
                           className={'font-figtree placeholder:text-sm placeholder:font-base mt-2 outline-skin-body-600 text-sm font-semibold text-gray-500 w-full px-2 py-[22px] rounded h-10 border-[0.12rem] border-gray-600/90 focus:outline-skin-theme-400'}/>
                </div>
            </div>
            <div className={'w-full mt-3'}>
                <label className={'text-[0.95rem] text-skin-theme-600 font-bold font-openSans'}
                       htmlFor={"tel"}>{'Telefon Numaranız'}</label>
                <input type={"tel"} name={'tel'} id={'tel'} ref={telRef} style={{outline: "none"}} maxLength={10}
                       minLength={10}
                       placeholder={'532 XXX XX XX'} required={true}
                       className={'font-figtree placeholder:text-sm placeholder:font-base mt-2 outline-skin-body-600 text-sm font-semibold text-gray-500 w-full px-2 py-[22px] rounded h-10 border-[0.12rem] border-gray-600/90 focus:outline-skin-theme-400'}/>
            </div>
            <div className={'w-full mt-3'}>
                <label className={'text-[0.95rem] text-skin-theme-600 font-bold font-openSans'}
                       htmlFor={"email"}>{'Email adresiniz'}</label>
                <input type={"email"} name={'email'} id={'email'} ref={emailRef} style={{outline: "none"}}
                       placeholder={'Email adresiniz'} required={true}
                       className={'font-figtree placeholder:text-sm placeholder:font-base mt-2 outline-skin-body-600 text-sm font-semibold text-gray-500 w-full px-2 py-[22px] rounded h-10 border-[0.12rem] border-gray-600/90 focus:outline-skin-theme-400'}/>
            </div>

            {error && <>
                <div className={'w-full h-auto flex items-center justify-center mb-0.5 mt-4'}>
                    <div className={'w-full text-center py-1.5 bg-rose-100 border border-rose-300 rounded px-6'}>
                        <p className={'text-rose-400 font-figtree text-xs basePhone:text-sm font-medium'}>Lütfen formu
                            eksiksiz bir şekilde doldurdun.</p>
                    </div>
                </div>
            </>}

            {success && <>
                <div className={'w-full h-auto flex items-center justify-center mb-0.5 mt-4'}>
                    <div className={'w-full text-center py-1.5 bg-emerald-100 border border-emerald-200 rounded px-6'}>
                        <p className={'text-emerald-400 font-figtree text-xs basePhone:text-sm font-medium'}>Mesajınız
                            başarıyla gönderildi.</p>
                    </div>
                </div>
            </>}

            <div className={'flex flex-row justify-end items-center w-full mt-4 pb-3'}>
                <button
                    disabled={loading}
                    onClick={handleOnClick}
                    className={'w-full py-[0.65rem] rounded border border-gray-400 text-[1.05rem] text-white bg-gradient-to-tr from-skin-theme-500 via-skin-theme-300/65 to-skin-theme-400 disabled:from-gray-200 disabled:via-gray-300 disabled:to-gray-200 disabled:text-gray-400 disabled:border-gray-400 disabled:cursor-not-allowed'}>
                        <span className={`${loading === false ? "block" : "hidden font-openSans"}`}>
                            İletişime Geç
                        </span>
                        <span className={`${loading === true ? "block" : "hidden"} relative font-openSans`}>
                            Gönderiliyor..
                        </span>
                </button>
            </div>
        </form>

    </>
}