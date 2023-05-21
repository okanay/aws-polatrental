import Image from "next/image";
import Citroen from "../../../public/BrandLogos/Citroen.png"
import Peugeot from "../../../public/BrandLogos/Peugeot.png"
import Renault from "../../../public/BrandLogos/Renault.png"
import BMW from "../../../public/BrandLogos/BMW.png"
import Mercedes from "../../../public/BrandLogos/Mercedes.png"
import Volkswagen from "../../../public/BrandLogos/Volkswagen.png";

export default function BrandsLogos() {
    return (
        <div className="my-12 sm:mb-32 scroll-mb-[250px]" id={'markalar'} style={{scrollMarginBottom: 1000}}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800'}>
                    <h2 className="text-center text-2xl sm:text-3xl leading-8 text-transparent font-openSans mb-10"
                        title={"Polat Rental Marka Kütüphanesi"}>
                        En güvenilir ve en prestijli otomobil markalarının var olduğu bir kütüphane.
                    </h2>
                </div>
                <div
                    className="mx-auto grid max-w-lg grid-cols-4 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 items-center justify-center content-center align-center">

                    <Image
                        className="col-span-2 col-start-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1"
                        src={Mercedes}
                        alt="Polat Rental Kiralık Araç Markaları - Mercedes Logo"
                        priority
                        width={248}
                        height={124}
                    />
                    <Image
                        className="col-span-2 max-h-28 w-full object-contain lg:col-span-1"
                        src={Peugeot}
                        alt="Polat Rental Kiralık Araç Markaları - Peugeot Logo"
                        priority
                        width={248}
                        height={124}
                    />
                    <Image
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                        src={Volkswagen}
                        alt="Polat Rental Kiralık Araç Markaları - Volkswagen Logo"
                        priority
                        width={248}
                        height={124}
                    />
                    <Image
                        className="col-span-2 max-h-24 w-full object-contain lg:col-span-1"
                        src={BMW}
                        alt="Polat Rental Kiralık Araç Markaları - BMW Logo"
                        priority
                        width={248}
                        height={124}
                    />
                    <Image
                        className="col-span-2 max-h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
                        src={Citroen}
                        alt="Polat Rental Kiralık Araç Markaları - Citroen Logo"
                        priority
                        width={248}
                        height={124}
                    />

                </div>
            </div>
        </div>
    )
}