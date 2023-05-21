import {DevicePhoneMobileIcon, EnvelopeIcon, MapPinIcon} from "@heroicons/react/20/solid";

export const ContactInformation = () => {

    return <div className={'w-full h-full  flex flex-col gap-2 font-figtree'}>
        <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800'}>
            <dd className={'text-3xl sm:text-4xl leading-8 text-transparent font-openSans font-semibold pb-0.5'}>İletişime Geç</dd>
        </div>
        <p className={'pt-2 pb-5 max-w-[800px] text-lg text-gray-600'}>
            Sizin için doğru aracı seçmenize yardımcı olmak için buradayız.
            bizimle iletişime geçerek daha fazla bilgi alabilirsiniz. Uzman ekibimiz size en
            iyi çözümü sunmak için hazır.
        </p>
        <div className={'flex flex-col gap-9'}>
            <div className={'flex justify-start items-start gap-4 text-base text-gray-600'}>
                <MapPinIcon className={'w-6 h-6 text-skin-theme-400'}/>
                <p className={'max-w-[160px]'}>
                    34488 İstanbul, Başakşehir
                    Turgut Özal Bulvarı
                </p>
            </div>
            <div className={'flex justify-start items-start gap-4 text-base text-gray-600'}>
                <EnvelopeIcon className={'w-6 h-6 text-skin-theme-400'}/>
                <p className={'max-w-[160px]'}>
                    info@polatrental.com
                </p>
            </div>
            <div className={'flex justify-start items-start gap-4 text-base text-gray-600'}>
                <DevicePhoneMobileIcon className={'w-6 h-6 text-skin-theme-400'}/>
                <p className={'max-w-[160px]'}>
                    +90 (532) 280 66 16
                </p>
            </div>
        </div>
    </div>
}