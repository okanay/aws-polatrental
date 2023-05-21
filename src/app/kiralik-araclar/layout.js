import {ContactMenu} from "@/components/Cars-Components/Cars-Contact-Components/ContactMenu";

export default function CarsLayout({children}) {


    return <>
        <ContactMenu/>
        {children}
    </>
}