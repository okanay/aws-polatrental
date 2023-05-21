import {Features} from "@/components/Index-Components/Features";
import {Support} from "@/components/Index-Components/Support";
import {MainSplash} from "@/components/Index-Components/MainSplash";
import {Stats} from "@/components/Index-Components/Stats";
import BrandsLogos from "@/components/Index-Components/BrandsLogos";
import {Contact} from "@/components/Index-Components/ContactUS-Components/Contact";
import {FrequentlyAQ} from "@/components/Index-Components/FrequentlyAQ";

export default function Home() {

  return (<main>
    <MainSplash/>
    <Features/>
    <BrandsLogos/>
    <Stats/>
    <Contact/>
    <Support/>
    <FrequentlyAQ/>
  </main>)
}
