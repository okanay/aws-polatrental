import {FacebookSVG} from "@/components/Footer-Components/SocialMediaAccounts/FacebookSVG";
import {InstagramSVG} from "@/components/Footer-Components/SocialMediaAccounts/InstagramSVG";
import {TwitterSVG} from "@/components/Footer-Components/SocialMediaAccounts/TwitterSVG";
import {YoutubeSVG} from "@/components/Footer-Components/SocialMediaAccounts/YoutubeSVG";
import {WhatsAppSVG} from "@/components/Footer-Components/SocialMediaAccounts/WhatsAppSVG";

export const SocialIcons = () => {

    const SocialMediaAccounts = [
        {
            name : "Facebook",
            href : "#",
            component : FacebookSVG
        },
        {
            name : "Instagram",
            href : "#",
            component : InstagramSVG
        },
        {
            name : "Twitter",
            href : "#",
            component : TwitterSVG
        },
        {
            name : "Youtube",
            href : "#",
            component : YoutubeSVG
        },
        {
            name : "WhatsApp",
            href : "#",
            component : WhatsAppSVG
        },
    ]

    return SocialMediaAccounts.map(social => <social.component key={social.name} href={social.href}/>)
}