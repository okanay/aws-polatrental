'use client'

import {ContactMenuButton} from "@/components/Cars-Components/Cars-Contact-Components/ContactMenuButton";
import {useEffect, useRef, useState} from "react";
import {useSelector} from "react-redux";
import {sendCardContactForm, sendContactForm} from "@/lib/api";
import {ContactInput} from "@/components/Index-Components/ContactUS-Components/ContactInput";
import * as Yup from "yup";
import {useFormik} from "formik";
import {CardContactInput} from "@/components/Cars-Components/Cars-Contact-Components/CardContactInput";

export const CardContactForm = () => {

    const carsContact = useSelector(state => state.carsContact.value)

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({state: false, message: ""})
    const [initialValidation, setInitialValidation] = useState(false);

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
    });
    const contactFormik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            tel: '',
        },
        validationSchema: validationSchema,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: async (values, {resetForm, setSubmitting}) => {

            if (loading) return
            setSuccess(false)


            if (error.state)
            {
                setSubmitting(false);
            }
            else
            {
                if (!loading) setLoading(true)

                const cardContactFormData = {
                    email: contactFormik.values.email,
                    tel: contactFormik.values.tel,
                    firstName: contactFormik.values.firstName,
                    lastName: contactFormik.values.lastName,
                    data: {...carsContact.data}
                }
                const data = await sendCardContactForm(cardContactFormData)
                const status = data.status

                if (status === 200) {
                    resetForm()

                    setSuccess(true)
                    setError({state: false, message: ""})
                    setInitialValidation(false);

                }
                else if (status !== 200)
                {
                    setError({state: false, message: "Bir hata meydana geldi"})
                }

                setLoading(false)
            }
        },
    });
    const cardValidateForm = async () => {

        setSuccess(false)

        try
        {
            await validationSchema.validate(contactFormik.values, {abortEarly: false});
            setError({state: false, message: ''});
        }
        catch (error)
        {
            const firstError = error.inner[0].message;
            setError({state: true, message: firstError});
        }
    };

    useEffect(() => {
        if (initialValidation)
        {
            cardValidateForm();
        }
        else
        {
            setInitialValidation(true);
        }

    }, [contactFormik.values]);

    return <>
        <form onSubmit={contactFormik.handleSubmit} className={'w-full'}>
            <div className={'grid grid-cols-1 tablet:grid-cols-2 tablet:gap-4 w-full mt-4'}>
                <CardContactInput
                    error={contactFormik.errors.firstName}
                    value={contactFormik.values.firstName}
                    onChange={contactFormik.handleChange}
                    onBlur={contactFormik.handleBlur}
                    type={"text"}
                    id={'firstName'}
                    name={'firstName'}
                    label={'Adınız'}
                    placeholder={'Adınız'}/>

                <CardContactInput
                    error={contactFormik.errors.lastName}
                    value={contactFormik.values.lastName}
                    onChange={contactFormik.handleChange}
                    onBlur={contactFormik.handleBlur}
                    type={"text"}
                    id={'lastName'}
                    name={'lastName'}
                    label={'Soyadınız'}
                    placeholder={'Soyadınız'}/>
            </div>
            <CardContactInput
                error={contactFormik.errors.email}
                value={contactFormik.values.email}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                type={"email"}
                id={'email'}
                name={'email'}
                label={'Email Adresiniz'}
                placeholder={'Email Adresiniz'}/>
            <CardContactInput
                error={contactFormik.errors.tel}
                value={contactFormik.values.tel}
                onChange={contactFormik.handleChange}
                onBlur={contactFormik.handleBlur}
                type={"tel"}
                id={'tel'}
                name={'tel'}
                label={'Telefon Numaranız'}
                placeholder={'532-XXX-XX-XX'}/>

            {error.state && <>
                <div className={'w-full h-auto flex items-center justify-center mt-3'}>
                    <div className={'w-full text-center py-1.5 bg-rose-100 border border-rose-300 rounded px-6'}>
                        <p className={'text-rose-400 font-figtree text-xs basePhone:text-sm font-medium'}>{error.message}</p>
                    </div>
                </div>
            </>}

            {success && <>
                <div className={'w-full h-auto flex items-center justify-center mt-3'}>
                    <div className={'w-full text-center py-1.5 bg-emerald-100 border border-emerald-200 rounded px-6'}>
                        <p className={'text-emerald-400 font-figtree text-xs basePhone:text-sm font-medium'}>Mesajınız
                            başarıyla gönderildi.</p>
                    </div>
                </div>
            </>}

            <div className={'flex flex-row justify-end items-center w-full mt-5 pb-3'}>
                <button
                    disabled={loading}
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