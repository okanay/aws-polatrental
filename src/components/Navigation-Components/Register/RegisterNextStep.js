'use client'

import {setRegisterSlice} from "@/redux/slice/registerSlice";

export const RegisterNextStep = (dispatch,formState) => {

    const registerFormSet = {
        formState: formState.formState !== 4 ? formState.formState + 1 : formState.formState,
        formVisible: true
    }

    dispatch(setRegisterSlice(registerFormSet))
}