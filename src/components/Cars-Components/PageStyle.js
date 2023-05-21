'use client'
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setPage} from "@/redux/slice/carsPageNavigationSlice";

export const PageStyle = ({children}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPage(1))
    }, [])

    return <main className={'max-w-[80rem] laptop:max-w-[140rem] px-6'}>
        {children}
    </main>
}