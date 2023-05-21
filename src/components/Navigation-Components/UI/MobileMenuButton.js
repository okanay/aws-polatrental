'use client'


import {Bars3Icon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {changeMobileMenuState} from "@/redux/slice/mobileMenuSlice";

export const MobileMenuButton = () => {

    const dispatch = useDispatch()

    return <button
        onClick={() => {dispatch(changeMobileMenuState())}}
        className={'px-2 py-1 sm:px-4 sm:py-2 hover hover:bg-skin-font-700/10 rounded transition-colors duration-500'}>
        <span className={'text-sm sm:text-base text-skin-font-500 hover:text-skin-font-200'}><Bars3Icon className={'w-6 h-6 text-gray-800'}/></span>
    </button>
}