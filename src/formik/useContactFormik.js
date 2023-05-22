'use client'

import {useEffect, useState} from "react";

export const useContactFormik = (validationSchema, formik) => {

    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState({state: false, message: ""})
    const [initialValidation, setInitialValidation] = useState(false);

    const cardValidateForm = async () => {

        setSuccess(false)

        try
        {
            await validationSchema.validate(formik.values, {abortEarly: false});
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

    }, [formik.values]);

    return {loading, error, success, initialValidation, setError, setSuccess, setInitialValidation, setLoading}
}