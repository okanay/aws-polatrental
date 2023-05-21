import {useDispatch} from "react-redux";

export const RegisterFormButton = ({formState, handleRegisterFormBtn}) => {

    const buttonName = formState.formState !== 4 ? "Devam Et" : "Hesabı Oluştur"

    return <button
        onClick={handleRegisterFormBtn}
        className={'w-full py-[0.45rem] rounded border border-gray-400 text-[1.05rem] text-white bg-gradient-to-tr from-skin-theme-500 via-skin-theme-300/65 to-skin-theme-400 '}>
        {buttonName}
    </button>
}