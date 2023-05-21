'use client'

import {useDispatch} from "react-redux";
import {changeRegisterState} from "@/redux/slice/registerSlice";
import {setLoginState} from "@/redux/slice/loginSlice";
import {changeMobileMenuState, setMobileMenuState} from "@/redux/slice/mobileMenuSlice";

export const RegisterMenuButton = ({children}) => {

    const dispatch = useDispatch()
    const handleRegisterButton = () => {


        dispatch(changeRegisterState(true))
        dispatch(setLoginState(false))
        dispatch(setMobileMenuState(false))
    }

    return <div onClick={handleRegisterButton} className={'inline-block'}>
        {children}
    </div>

}