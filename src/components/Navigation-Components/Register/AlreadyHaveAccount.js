import {LoginMenuButton} from "@/components/Navigation-Components/Login/LoginMenuButton";

export const AlreadyHaveAccount = () => {

    return <div className={'flex flex-col justify-center items-center text-center w-full gap-1 text-sm'}>
        <p>Hesabınız var mı?</p>
        <LoginMenuButton>
            <button className={'text-skin-theme-600 underline font-semibold'}>Giriş Yap</button>
        </LoginMenuButton>
    </div>
}