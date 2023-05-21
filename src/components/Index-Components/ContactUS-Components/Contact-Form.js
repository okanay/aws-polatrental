'use client'

import {ContactInput} from "@/components/Index-Components/ContactUS-Components/ContactInput";
import {useRef, useState} from "react";
import {ContactTextarea} from "@/components/Index-Components/ContactUS-Components/ContactTextarea";
import {ContactButton} from "@/components/Index-Components/ContactUS-Components/ContactButton";
import {sendContactForm} from "@/lib/api";

export const ContactForm = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const emailRef = useRef(null)
    const telRef = useRef(null)
    const messageRef = useRef(null)

    const handleGetInputData = () => {
        return {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            email: emailRef.current.value,
            tel: telRef.current.value,
            message: messageRef.current.value,
        }
    }
    const handleResetInput = () => {
        firstNameRef.current.value = '';
        lastNameRef.current.value = '';
        emailRef.current.value = '';
        telRef.current.value = '';
        messageRef.current.value = '';
    }
    const handleOnClick = async (event) => {

        event.preventDefault()

        if (loading) return
        if (!loading) setLoading(true)

        setSuccess(false)

        const data = await sendContactForm(handleGetInputData())
        const status = data.status

        if (status === 200)
        {
            handleResetInput()
            setSuccess(true)
            setError(false)
        }

        else if (status !== 200)
        {
            setError(true)

        }

        setLoading(false)
    }

    return <div className={'w-full h-full font-radio'}>
        <form action="" className={'flex flex-col gap-4'}>
            <div className={'grid grid-cols-1 tablet:grid-cols-2 gap-4 tablet:gap-6 w-full'}>
                <ContactInput name={'firstName'} type={'text'} label={"Adınız"} inputRef={firstNameRef}
                              placeholder={'Adınız'} required={true}/>
                <ContactInput name={'lastName'} type={'text'} label={"Soyadınız"} inputRef={lastNameRef}
                              placeholder={'Soyadınız'} required={true}/>
            </div>
            <ContactInput name={'email'} type={'email'} label={'Email Adresiniz'} inputRef={emailRef}
                          placeholder={'Email adresiniz'} required={true}/>
            <ContactInput name={'phone'} type={'tel'} label={'Telefon Numaranız'} inputRef={telRef}
                          placeholder={'Telefon numaranız (5XX-XXX-XX-XX)'} required={true}/>
            <ContactTextarea name={'message'} label={'Mesajınız'} inputRef={messageRef}
                             placeholder={'Bizimle iletişime geçmek istediğiniz durum hakkında bilgi verin.'}
                             required={true}/>
            {error && <>
                <div className={'w-full h-auto flex items-center justify-center mb-0.5'}>
                    <div className={'w-full text-center py-1.5 bg-rose-100 border border-rose-300 rounded px-6'}>
                        <p className={'text-rose-400 font-figtree text-xs basePhone:text-sm font-medium'}>Lütfen formu eksiksiz bir şekilde doldurdun.</p>
                    </div>
                </div>
            </>}

            {success && <>
                <div className={'w-full h-auto flex items-center justify-center mb-0.5'}>
                    <div className={'w-full text-center py-1.5 bg-emerald-100 border border-emerald-200 rounded px-6'}>
                        <p className={'text-emerald-400 font-figtree text-xs basePhone:text-sm font-medium'}>Mesajınız başarıyla gönderildi.</p>
                    </div>
                </div>
            </>}
            <ContactButton type={'submit'} btnText={'Mesajı Gönder'} onClick={handleOnClick} loading={loading}/>
        </form>
    </div>
}