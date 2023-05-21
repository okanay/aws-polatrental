'use client'

import {ContactMenuButton} from "@/components/Cars-Components/Cars-Contact-Components/ContactMenuButton";
import {useDispatch} from "react-redux";
import {changeCarsContactData} from "@/redux/slice/carsContactSlice";

export const CardContactButton = ({cardData}) => {

    const dispatch = useDispatch()
    const handleContact = (cardData) => {
        dispatch(changeCarsContactData({...cardData}))
    }

    return <ContactMenuButton>
        <button
            onClick={() => {
                handleContact(cardData)
            }}
            disabled={cardData.available !== 1}
            className={'text-gray-900/90 font-semibold font-openSans text-sm px-5 py-2.5 shadow shadow-skin-theme-100/60 bg-skin-theme-50 border-[0.11rem] border-skin-theme-500/50 rounded text-skin-theme-500 hover:bg-skin-theme-400 hover:border-skin-theme-200/40 hover:text-white transition-colors duration-500 disabled:shadow-gray-100 disabled:border-gray-100/40 disabled:bg-gray-200 disabled:text-gray-400 transition-colors duration-500'}>
            İletişime Geç
        </button>
    </ContactMenuButton>
}