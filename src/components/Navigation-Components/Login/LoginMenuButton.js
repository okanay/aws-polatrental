'use client'

import {useDispatch} from "react-redux";
import {changeLoginState} from "@/redux/slice/loginSlice";
import {changeRegisterState, setRegisterSlice} from "@/redux/slice/registerSlice";
import {changeMobileMenuState, setMobileMenuState} from "@/redux/slice/mobileMenuSlice";


export const LoginMenuButton = ({children}) => {

    const dispatch = useDispatch()
    const handleLoginButton = () => {

        const registerFormSet = {
            formState: 0,
            formVisible : false
        }

        dispatch(setRegisterSlice(registerFormSet))
        dispatch(changeLoginState())
        dispatch(setMobileMenuState(false))
    }

    return <div onClick={handleLoginButton} className={'inline-block'}>
        {children}
    </div>

}