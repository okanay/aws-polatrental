'use client'

import {useDispatch} from "react-redux";
import {changeCarsContactVisible} from "@/redux/slice/carsContactSlice";

export const ContactMenuButton = ({children, w}) => {

    const dispatch = useDispatch()
    const handleContactButton = () => {
        dispatch(changeCarsContactVisible())
    }

    return <div onClick={handleContactButton} className={`${w !== undefined ? w : 'w-auto'} inline-block`}>
        {children}
    </div>

}