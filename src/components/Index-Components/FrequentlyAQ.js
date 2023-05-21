'use client'

import FaqSVG from "../../../public/Illustrations/FAQ.svg"
import Image from "next/image";

export const FrequentlyAQ = () => {

    const handleContactText = () => {
        setTimeout(() => {
            const scrollOptions = {
                top: 1400,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        }, 250)
    }
    const Questions = [
        {
            key : "Questions-1-Key",
            question : "Araç teslim edilirken benzin durumu ne olmalı?",
            answer : "Lütfen aracı teslim aldığınız yakıt seviyesi ile teslim ediniz. Aracın eksik yakıt ile teslim edilmesi durumunda, eksik olan yakıt bedeli tahsil edilecektir."
        },
        {
            key : "Questions-2-Key",
            question : "Trafik cezaları durumunda ne olmakta?",
            answer : "Trafik kurallarına uyulmaması sonucu ortaya çıkacak her tür trafik cezasının (köprü ve otoyollarda hatalı gişe kullanılması da dâhil olmak üzere) ödemesi ve hizmet bedeli sözleşmede ismi geçen kiracıya ait kredi kartından yapılacaktır."
        },
        {
            key : "Questions-3-Key",
            question : "Kaza sonrası hangi raporları tutmalıyım?",
            answer : "Kaza sonrasında talep edilen evraklar: Ehliyet, ruhsat, trafik sigorta poliçesi, kaza tespit tutanağı (her aracımızda mevcuttur), kazanın oluş yeri ve aracın resimleri, alkol tespit tutanağı şeklindedir."
        },
        {
            key : "Questions-4-Key",
            question : "HGS ödemeleri ve geçişleri durumunda ne olmakta?",
            answer : "HGS etiketleri plakalara tanımlıdır. Yolculuğunuz sırasında ödeme yapmanız gerekmemektedir. Aracı iade ettiğiniz ofis kiralama sonrası HGS kontrolü sağlayıp ödeme yaptığınız kart üzerinden tahsilatı gerçekleştirecektir."
        }
    ]

    return <div id={'sss'}
        className={'grid grid-cols-1 laptop:grid-cols-2 max-w-7xl w-full h-full mx-auto gap-10 px-6 lg:px-8 laptop:gap-32 mt-10 mb-16 sm:mb-32'}>
        <div className={'space-y-3'}>
            <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800'}>
                <dd className={'text-3xl sm:text-4xl leading-8 text-transparent font-semibold pb-0.5 font-openSans'}>Sıkça Sorulan Sorular</dd>
            </div>
            <dt className={'text-gray-600 font-figtree'}>
                Aradığınız sorunun cevabını bulamadınız mı? İletişim geçmekten çekinmeyin <span onClick={handleContactText} className={'font-bold text-skin-theme-600 underline cursor-pointer font-openSans'}>müşteri hizmetlerimiz</span> sizinle iletişime geçmek için hazır.
            </dt>
            <div className={'h-full items-center justify-center flex-col hidden laptop:flex'}>
                <Image src={FaqSVG} alt={"../"} className={'mb-12 w-[24rem]'} priority/>
            </div>

        </div>
        <div className={'flex flex-col gap-12'}>
            {Questions.map(question => <div key={question.key} className={'space-y-3'}>
                    <h5 className={'font-openSans text-skin-theme-600 font-bold'}>{question.question}</h5>
                    <p className={'text-gray-600 font-figtree'}>{question.answer}</p>
                </div>
                )}
        </div>
    </div>
}