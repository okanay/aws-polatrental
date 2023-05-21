import {ArrowLeftIcon} from "@heroicons/react/20/solid";
import {useDispatch} from "react-redux";
import {setRegisterSlice} from "@/redux/slice/registerSlice";

export const RegisterPrevStep = ({formState}) => {

    const dispatch = useDispatch()
    const setPrevStep = () => {

        const registerFormSet = {
            formState: formState.formState - 1,
            formVisible : true
        }

        dispatch(setRegisterSlice(registerFormSet))
    }


    return <button onClick={setPrevStep} className={'text-gray-600 font-semibold'}>
        <span className={'flex justify-center items-center gap-2'}>
            <ArrowLeftIcon className={'w-4 h-4'}/>
            Geri
        </span>
    </button>
}