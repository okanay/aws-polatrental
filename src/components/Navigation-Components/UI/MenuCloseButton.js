'use client'

import {XMarkIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {setLoginState} from "@/redux/slice/loginSlice";
import {setRegisterSlice} from "@/redux/slice/registerSlice";
import {setCarsContactVisible} from "@/redux/slice/carsContactSlice";

export const MenuCloseButton = () => {

    const dispatch = useDispatch()
    const handleMenuCloseIconButton = () => {

        const registerFormSet = {
            formState: 0,
            formVisible : false
        }

        dispatch(setRegisterSlice(registerFormSet))
        dispatch(setLoginState(false))
        dispatch(setCarsContactVisible(false))

    }



    return <button onClick={handleMenuCloseIconButton}>
        <XMarkIcon className={'w-5 h-5 border border-skin-gray-200 rounded'}/>
    </button>
}