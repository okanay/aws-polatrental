'use client'

import {ContactInput} from "@/components/Index-Components/ContactUS-Components/ContactInput";
import {useEffect, useRef, useState} from "react";
import {ContactTextarea} from "@/components/Index-Components/ContactUS-Components/ContactTextarea";
import {ContactButton} from "@/components/Index-Components/ContactUS-Components/ContactButton";
import {sendCardContactForm, sendContactForm} from "@/lib/api";
import {useFormik} from "formik";
import * as Yup from "yup";
import {log} from "next/dist/server/typescript/utils";
import {useFormValidate} from "@/formik/useFormValidate";

export const ContactForm = () => {

    const validationSchema = Yup.object({
        firstName: Yup.string()
            .required("Lütfen adınızı girin.")
            .matches(/^[a-zA-Z\s]*$/, "Adınızın içeriğinde sadece harfler kullanılmalıdır.")
            .max(40, "Adınız için maksimum karakter sayısı 40'dır")
            .min(3, "Adınız için minimum karakter sayısı 3 olmalıdır.")
        ,
        lastName: Yup.string()
            .required("Lütfen soyadınızı girin.")
            .matches(/^[a-zA-Z\s]*$/, "Soyadınızın içeriğinde sadece harfler kullanılmalıdır.")
            .max(40, "Soyadınız için maksimum karakter sayısı 40'dır")
            .min(2, "Soyadınız için minimum karakter sayısı 2 olmalıdır.")
        ,
        email: Yup.string()
            .email("Girdiğiniz email adresi geçersiz.")
            .required("Lütfen aktif kullandığınız bir email adresi girin.")
            .max(40, "Email adresiniz için maksimum karakter sayısı 40'dır")
        ,
        tel: Yup.string()
            .required("Lütfen telefon numaranızı girin.")
            .min(10, "Örnek telefon numarası || 532-XXX-XX-XX")
            .max(10, "Örnek telefon numarası || 532-XXX-XX-XX")
        ,
        message: Yup.string()
            .required("Lütfen iletişime geçmek istediğiniz konuyu detaylandırın.")
            .max(260, "Mesajınız için maksimum karakter sayısı 260'dir")
            .min(10, "Mesajınız için minimum karakter sayısı 10'dur.")
        ,

    });
    const contactFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
            message: '',
        },
        validationSchema: validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values, {resetForm, setSubmitting}) => {

            if (loading) return

            setSuccess(false)
            setLoading(true)
            setError({state: false, message: ""})

            if (error.state)
            {
                setSubmitting(false);
            }
            else
            {
                const data = await sendContactForm(contactFormik.values)
                const status = data.status

                if (status === 200)
                {
                    resetForm()

                    setSuccess(true)
                    setError({state: false, message: ""})
                    setInitialValidation(false);

                }
                else if (status !== 200)
                {
                    setError({state: false, message: "Sunucuda bir hata meydana geldi"})
                }

                setLoading(false)
            }
        },
    });

    const {
        error,
        success,
        loading,
        initialValidation,
        setError,
        setSuccess,
        setLoading,
        setInitialValidation
    } = useFormValidate(validationSchema, contactFormik)


    return <div className={'w-full h-full font-radio'}>
        <form className={'flex flex-col gap-1'} onSubmit={contactFormik.handleSubmit}>
            <div className={'grid grid-cols-1 tablet:grid-cols-2 w-full gap-1 sm:gap-6'}>
                <ContactInput name={'firstName'}
                              type={'text'}
                              label={"Adınız"}
                              onChange={contactFormik.handleChange}
                              onBlur={contactFormik.handleBlur}
                              value={contactFormik.values.firstName}
                              placeholder={'Adınız'}
                              error={contactFormik.errors.firstName}
                              required={true}/>
                <ContactInput name={'lastName'}
                              type={'text'}
                              label={"Soyadınız"}
                              onChange={contactFormik.handleChange}
                              onBlur={contactFormik.handleBlur}
                              value={contactFormik.values.lastName}
                              placeholder={'Soyadınız'}
                              error={contactFormik.errors.lastName}
                              required={true}/>

            </div>
            <ContactInput name={'email'}
                          type={'email'}
                          label={'Email Adresiniz'}
                          onChange={contactFormik.handleChange}
                          onBlur={contactFormik.handleBlur}
                          value={contactFormik.values.email}
                          placeholder={'Email adresiniz'}
                          error={contactFormik.errors.email}
                          required={true}/>
            <ContactInput name={'tel'}
                          type={'tel'}
                          label={'Telefon Numaranız'}
                          onChange={contactFormik.handleChange}
                          onBlur={contactFormik.handleBlur}
                          value={contactFormik.values.tel}
                          error={contactFormik.errors.tel}
                          placeholder={'Telefon numaranız (5XX-XXX-XX-XX)'}
                          required={true}/>
            <ContactTextarea name={'message'}
                             label={'Mesajınız'}
                             onChange={contactFormik.handleChange}
                             onBlur={contactFormik.handleBlur}
                             value={contactFormik.values.message}
                             error={contactFormik.errors.message}
                             placeholder={'Bizimle iletişime geçmek istediğiniz durum hakkında bilgi verin.'}
                             required={true}/>
            {error.state && <>
                <div className={'w-full h-auto flex items-center justify-center '}>
                    <div className={'w-full text-center py-1.5 bg-rose-100 border border-rose-300 rounded px-6'}>
                        <p className={'text-rose-400 font-figtree text-xs basePhone:text-sm font-medium'}>{error.message}</p>
                    </div>
                </div>
            </>}
            {success && <>
                <div className={'w-full h-auto flex items-center justify-center '}>
                    <div className={'w-full text-center py-1.5 bg-emerald-100 border border-emerald-200 rounded px-6'}>
                        <p className={'text-emerald-400 font-figtree text-xs basePhone:text-sm font-medium'}>Mesajınız
                            başarıyla gönderildi.</p>
                    </div>
                </div>
            </>}
            <ContactButton
                type={'submit'}
                btnText={'Mesajı Gönder'}
                loading={loading}/>
        </form>
    </div>
}