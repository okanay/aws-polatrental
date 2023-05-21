import keyIcon from "@heroicons/react/20/solid/KeyIcon";
import cogIcon from "@heroicons/react/20/solid/CogIcon";
import banknotesIcon from "@heroicons/react/20/solid/esm/BanknotesIcon";
import {DevicePhoneMobileIcon} from "@heroicons/react/20/solid";

export const Features = () => {

    return <div className="mt-8 sm:mb-24 sm:mt-20 sm:mb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
                <p className="text-base font-semibold leading-7 text-skin-theme-600 font-plexSerif">Bizimle çalışmaya
                    başlamadan önce.</p>
                <div className={'bg-clip-text bg-gradient-to-tr from-slate-600 to-slate-800'}>
                    <h2 className="font-openSans mt-2 text-3xl sm:text-4xl font-openSans font-semibold tracking-tight text-transparent">
                        Neden bizi tercih etmelisiniz?
                    </h2>
                </div>
                <p className="mt-6 text-lg leading-8 text-gray-600 font-figtree">
                    Sizler için güvenilir, kaliteli ve uygun fiyatlı bir hizmet sunuyoruz. Müşterilerimiz için en iyi en
                    mükemmel deneyimi sunmak için sürekli olarak çalışıyoruz.
                </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-16 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-16">
                            <dt className="text-base font-semibold leading-7 text-gray-900">
                                <div
                                    className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-tr from-skin-theme-500 via-skin-theme-300/65 to-skin-theme-400">
                                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true"/>
                                </div>
                                <h2 className={'font-openSans'}>
                                    {feature.name}
                                </h2>
                            </dt>
                            <dd className="mt-2 text-base leading-7 text-gray-600 font-figtree">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
        </div>
    </div>
}

const features = [
    {
        name: 'Yeni ve Bakımlı Kiralık Araçlar',
        description:
            'Araç filomuz sürekli güncelleniyor ve en yeni modelleri de dahil ediyoruz. Var olan araçlarımızın bakımlarını düzenli yapıyoruz. Şimdi kiralamak için bizimle iletişime geçebilirsiniz.',
        icon: keyIcon,
    },
    {
        name: 'Ekonomik Kiralık Araçlar',
        description:
            'Uygun fiyatlarla kaliteli bir araç kiralama hizmeti sunuyoruz. Bütçenizi zorlamadan kaliteli bir araç kiralayabilirsiniz. Siz de ekonomik çözümlerimizden yararlanmak için hemen bize ulaşın.',
        icon: banknotesIcon,
    },
    {
        name: 'Özelleştirilmiş Araç Hizmetleri',
        description:
            'Size özel hizmetler sunuyoruz. Kiralama süreciniz boyunca ihtiyaç duyabileceğiniz her konuda size destek veriyoruz. Size özel tekliflerimiz ve esnek kiralama seçeneklerimizle hayalinizdeki aracı kiralamak artık çok kolay.',
        icon: cogIcon,
    },
    {
        name: '7/24 Kiralık Araç Hizmeti',
        description:
            'Kiralama süreciniz boyunca her türlü sorunuz ve ihtiyacınız için 7/24 destek ekibimizle iletişime geçebilirsiniz. Size hızlı ve etkili bir şekilde yanıt veriyoruz ve size en iyi hizmeti sunmak için çalışıyoruz.',
        icon: DevicePhoneMobileIcon,
    },
]
