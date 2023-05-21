import Image from "next/image";
import BMW from "../../../public/BrandLogos/BMW.png";
import Renault from "../../../public/BrandLogos/Renault.png";
import Peugeot from "../../../public/BrandLogos/Peugeot.png";
import Citroen from "../../../public/BrandLogos/Citroen.png";
import Mercedes from "../../../public/BrandLogos/Mercedes.png";
import Volkswagen from "../../../public/BrandLogos/Volkswagen.png";

export const PageTitle = () => {

    return <div className="gap-2 max-w-[80rem] mx-auto flex flex-row flex-wrap-reverse content-center justify-between items-center w-full mt-4 bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800">
        <h2 className="text-3xl font-plexSerif font-semibold tracking-tight sm:text-4xl text-transparent pb-0.5">
            Araç Seçenekleri
        </h2>
        <div className={'flex justify-end items-center gap-4 basePhone:gap-8'}>
            <Image src={Mercedes} alt={"Mercedes"} priority className={'w-8'}/>
            <Image src={Peugeot} alt={"Peugeot"} priority className={'w-12'}/>
            <Image src={BMW} alt={"BMW"} priority className={'w-8'}/>
            <Image src={Citroen} alt={"Citroen"} priority className={'w-12'}/>
            <Image src={Volkswagen} alt={'Volkswagen'} priority className={'w-9'}/>
        </div>
    </div>
}