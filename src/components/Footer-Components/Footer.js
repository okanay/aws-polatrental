import {SocialIcons} from "@/components/Footer-Components/SocialMediaAccounts/SocialIcons";

export const Footer = () => {

    return <footer className={'bg-white border-t-[0.15rem] border-gray-100 mb-8'}>
        <div className={'flex flex-col tablet:flex-row tablet:justify-between justify-center items-center max-w-7xl mx-auto mt-8 px-6 lg:px-8 flex-wrap gap-4'}>
            <p className={'font-figtree text-gray-600 text-sm'}>
                © 2023 Polat Rental. Tüm hakları saklıdır.
            </p>
            <div className={'flex flex-wrap gap-3'}>
                <SocialIcons/>
            </div>
        </div>
    </footer>
}
