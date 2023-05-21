
import {NavigationButtonGradient} from "./UI/NavigationButtonGradient";
import {NavigationButtonSingle} from "./UI/NavigationButtonSingle";
import {NavigationItems} from "../Navigation-Components/NavigationItems";
import {CompanyLogo} from "./CompanyLogo";
import {LoginMenu} from "@/components/Navigation-Components/Login/LoginMenu";
import {LoginMenuButton} from "@/components/Navigation-Components/Login/LoginMenuButton";
import {RegisterMenuButton} from "@/components/Navigation-Components/Register/RegisterMenuButton";
import {RegisterMenu} from "@/components/Navigation-Components/Register/RegisterMenu";
import {MobileMenuButton} from "@/components/Navigation-Components/UI/MobileMenuButton";
import {MobileNavigationMenu} from "@/components/Navigation-Components/MobileNavigationMenu";


const navigationItems = [
    {
        key: "navigation-1",
        name: "Araçlar",
        href: "/kiralik-araclar",
        scrollY: {
            scroll : false,
            y : 0,
            yMobile : 0
        }
    },
    {
        key: "navigation-2",
        name: "Markalar",
        href: "#markalar",
        scrollY: {
            scroll : true,
            y : 1000,
            yMobile : 1600
        }
    },
    {
        key: "navigation-3",
        name: "İletişim",
        href: "#iletisim",
        scrollY: {
            scroll : true,
            y : 1400,
            yMobile : 2610
        }
    },
    {
        key: "navigation-4",
        name: "Blog",
        href: "#",
        scrollY: {
            scroll : true,
            y : 0,
            yMobile : 0
        }

    },
    {
        key: "navigation-5",
        name: "SSS",
        href: "#sss",
        scrollY: {
            scroll : true,
            y : 3000,
            yMobile : 4970
        }
    }
]

export const Navigation = () => {


    return <>
        <header className={'bg-white fixed z-40 mx-auto w-full border-b-[0.15rem] border-gray-100'}>
            <nav className={'mx-auto max-w-[90rem] font-openSans text-skin-font-400 px-3 smPhone:px-4 laptop:px-12 py-5 lg:py-6'} id={'anasayfa'}>
                <ul className={'flex justify-between items-center'}>
                    <li className={'flex justify-start gap-8 items-center'}>
                      <CompanyLogo/>
                    </li>
                    <li className={'space-x-2 laptop:space-x-8 text-lg hidden tablet:block font-montserrat'}>
                        <NavigationItems navigationItems={navigationItems}/>
                    </li>
                    <li className={'space-x-3 font-montserrat hidden'}>
                        <LoginMenuButton>
                            <NavigationButtonSingle btnText={'Giriş Yap'}/>
                        </LoginMenuButton>
                        <RegisterMenuButton>
                            <NavigationButtonGradient btnText={'Kayıt Ol'}/>
                        </RegisterMenuButton>
                    </li>
                    <li className={'space-x-3 block tablet:hidden relative overflow-hidden'}>
                        <MobileMenuButton/>
                        <MobileNavigationMenu navigationItems={navigationItems}/>
                    </li>
                </ul>
            </nav>
        </header>

        <LoginMenu/>
        <RegisterMenu/>

        <div className={'bg-white w-full h-full pb-[4.4rem] sm:pb-[5rem] laptop:pb-[5.4rem] box-border-0'} />
    </>

}

