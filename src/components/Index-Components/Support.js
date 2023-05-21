import phoneIcon from "@heroicons/react/20/solid/PhoneIcon";
import cogIcon from "@heroicons/react/20/solid/CogIcon";

export const Support = () => {

    const supportTopics = [
        {
            key: "support-2",
            name: 'Teknik Destek',
            description:
                'Araçta herhangi bir teknik sorunla karşılaştığınızda yardım alabileceğiniz teknik destek hizmetimiz hakkında bilgi alın.',
            icon: cogIcon,
        },
        {
            key: "support-3",
            name: 'Sigorta ve Kaza',
            description:
                'Olası kaza durumlarında ve araçta hasar oluşması durumunda neler yapmanız gerektiği hakkında bilgilendirme alın.',
            icon: phoneIcon,
        },
        {
            key: "support-1",
            name: 'Kiralamaya Başlayın',
            description:
                'Hızlı ve kolay bir şekilde araç kiralamak için bizimle iletişime geçin.',
            icon: phoneIcon,
        },
    ]

    return <div className={'mx-auto max-w-7xl h-full relative bg-support-bg laptop:bg-cover bg-center bg-cover my-16 sm:mb-32 laptop:rounded-lg'}>
            <div className={'laptop:px-4 shadow laptop:shadow-neutral-400/20 border border-neutral-400/30 laptop:rounded-lg'}>
                <div className={'w-full h-full'}>
                    <div className={'flex flex-col justify-start items-start gap-4 w-full h-full py-16 px-6 laptop:py-32 laptop:px-8'}>
                        <dd className={'text-5xl basePhone:text-6xl lg:text-8xl font-bold bg-clip-text bg-gradient-to-br from-slate-900 via-slate-700 to-slate-900 text-transparent font-plexSerif'}>
                            Destek Merkezi
                        </dd>
                        <p className={'font-figtree text-base tablet:text-lg text-gray-600 font-roboto max-w-[600px] tablet:p-2 tablet:rounded-md tablet:border-white/80 tablet:bg-white/80'}>
                            Aracınızı kiraladıktan sonra dilediğiniz zaman bizi arayabilir, kaza durumunda yolda
                            kalmanız durumunda destek alabilirsiniz.
                        </p>
                        <div className={'w-full grid grid-row-3 laptop:grid-cols-3 gap-16 mt-16'}>

                            {supportTopics.map(item => <div key={item.key}
                                                            className={'shadow laptop:shadow-neutral-300/20 border border-neutral-300/30 border-[0.15rem] bg-white/80 w-full flex flex-col justify-start items-start rounded-lg px-6 py-8 laptop:px-8 laptop:py-12 gap-4'}>
                                <div className={'space-y-1'}>
                                    <h6 className={'font-bold text-black font-openSans'}>{item.name}</h6>
                                    <p className={'text-gray-950/80 font-figtree'}>{item.description}</p>
                                </div>
                            </div>)}
                        </div>
                    </div>
                    <div className={'absolute w-full h-full bg-sky-200/10 top-0 left-0'}/>
                </div>
            </div>
        </div>
}