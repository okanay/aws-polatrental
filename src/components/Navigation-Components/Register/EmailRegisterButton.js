'use client'

import {EnvelopeIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {changeRegisterState, setRegisterSlice} from "@/redux/slice/registerSlice";
import {setLoginState} from "@/redux/slice/loginSlice";

export const EmailRegisterButton = () => {

    const dispatch = useDispatch()
    const handleEmailRegister = () => {

        const registerFormSet = {
            formState: 1,
            formVisible : true
        }

        dispatch(setRegisterSlice(registerFormSet))
        dispatch(setLoginState(false))
    }

    return <button onClick={handleEmailRegister} className={'px-1 h-10 w-full rounded border border-gray-600/40 text-gray-800 text-[0.9rem] font-semibold bg-white'}>
        <span className={'flex justify-center items-center gap-2 pr-2'}>
            <EnvelopeIcon className={'w-5 h-5 text-skin-theme-600'}/>
            <div className={'border-l border-gray-400 h-5'}/>
            Email ile Devam Et
        </span>
    </button>
}
