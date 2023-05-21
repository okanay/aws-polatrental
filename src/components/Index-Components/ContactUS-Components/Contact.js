import {ContactForm} from "@/components/Index-Components/ContactUS-Components/Contact-Form";
import {ContactInformation} from "@/components/Index-Components/ContactUS-Components/ContactInformation";

export const Contact = () => {

    return <div id={'iletisim'}
        className={'grid grid-cols-1 laptop:grid-cols-2 max-w-7xl w-full h-full mx-auto gap-10 px-6 lg:px-8 laptop:gap-32 my-10 sm:mb-32'}>
        <ContactInformation/>
        <ContactForm/>
    </div>
}