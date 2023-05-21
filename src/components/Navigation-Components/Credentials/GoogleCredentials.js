import Image from "next/image";
import GoogleSVG from "../../../../public/SocialMedia/Google.svg";

export const GoogleCredentials = () => {

    const handleGoogleCredentials = () => {

    }

    return <button onClick={handleGoogleCredentials} className={'px-1 h-10 w-full rounded border border-gray-600/40 text-gray-800 text-[0.9rem] font-semibold bg-white'}>
        <span className={'flex justify-center items-center gap-2'}>
            <Image src={GoogleSVG} alt={"Google Provider"} className={'w-5 h-5'} priority/>
            <div className={'border-l border-gray-400 h-5'}/>
            Google ile Devam Et
        </span>
    </button>
}