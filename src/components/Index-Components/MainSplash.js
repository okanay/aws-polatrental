import Image from "next/image";
import Nature from "../../../public/BackgroundImages/Nature.webp"
import Link from "next/link";
import {MagnifyingGlassCircleIcon} from "@heroicons/react/20/solid";

export const MainSplash = () => {


    return <div className={'min-h-[240px] max-h-[240px] tablet:min-h-[265px] tablet:max-h-[265px] relative'}>

        <Image src={Nature}
               alt={"Yol"}
               quality={75}
               priority={true}
               className={"object-cover object-center object-contain w-full min-h-[240px] max-h-[240px] tablet:min-h-[265px] tablet:max-h-[265px] absolute"}/>
        <Link href={"/kiralik-araclar"}
              className={'absolute w-full h-full min-h-[240px] max-h-[240px] tablet:min-h-[265px] tablet:max-h-[265px] bg-black/20 flex flex-col items-center justify-center gap-4 border border-gray-300/40'}>
            <div className={'group'}>
                <button
                    className={`flex flex-row justify-center items-center space-x-2 px-3 py-1.5 text-[0.70rem] basePhone:text-xs sm:text-sm leading-6 text-skin-font-950
                     rounded-full bg-black/20 border-[0.10rem] border-white 
                     transition-colors duration-500 
                     group-hover:bg-white/40`}>
                    <span className={'font-figtree'}>Size en uygun kiralanabilir araçları görüntüleyin</span>
                    <span
                        className="font-bold bg-gradient-to-tr from-skin-theme-500 via-skin-theme-300/65 to-skin-theme-400 rounded-full  px-[0.175rem] py-[0.15rem] border border-skin-theme-400 group-hover:border-white transition-colors duration-500 flex justify-center items-center w-fit">
                       <MagnifyingGlassCircleIcon
                           className={'text-skin-theme-50 font-figtree transition-colors duration-500 sm:w-5 sm:h-5 h-4 w-4'}/>

                    </span>
                </button>
            </div>
            <h1 className="text-3xl smPhone:text-4xl xlPhone:text-5xl sm:text-6xl font-semibold tracking-tight text-white text-center font-openSans px-2">
                Gittiğiniz her yerde özel hissedin
            </h1>

        </Link>
    </div>
}