import {CardItems} from "@/components/Cars-Components/CardItems";
import {PageTitle} from "@/components/Cars-Components/PageTitle";
import {PageStyle} from "@/components/Cars-Components/PageStyle";
import {CustomHR} from "@/components/Cars-Components/CustomHR";
import {PageChangeNavigation} from "@/components/Cars-Components/PageChangeNavigation";

export default function Page() {

    const Data = [
        {
            id: "C1",
            brand: "Citreon",
            name: "C-Elysee",
            model: "Standart",
            year: 2020,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Sedan",
            capacity: 5,
            doorCount: 4,
            gas: "Benzin",
            gear: "Manuel",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Renault/Clio/2017/Nature4.webp",
                    imageAlt: "123",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "P1",
            brand: "Peugeot",
            name: "301",
            model: "Standart",
            year: 2023,
            available: 1, // dokanma 1 kalsin
            color: {
                colorFirst: "Gri", // arabanin dis rengi
                colorSecond: "Siyah" // arabanin ic rengi
            },
            type: "Sedan",
            capacity: 5,
            doorCount: 4,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C", // klima
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Peugeot/301/2017/Nature4.webp",
                    imageAlt: "",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "R1",
            brand: "Renault",
            name: "Clio",
            model: "Station",
            year: 2018,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Hatchback",
            capacity: 4,
            doorCount: 2,
            gas: "Benzin",
            gear: "Manuel",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Renault/Clio/2017/Nature4.webp",
                    imageAlt: "",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "R2",
            brand: "Renault",
            name: "Clio",
            model: "Station",
            year: 2019,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Hatchback",
            capacity: 4,
            doorCount: 2,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Renault/Clio/2017/Nature4.webp",
                    imageAlt: "123",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "R3",
            brand: "Renault",
            name: "Megane",
            model: "Standart",
            year: 2017,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Sedan",
            capacity: 6,
            doorCount: 4,
            gas: "Benzin",
            gear: "Manuel",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Fiat/Megane/2017/Nature4.webp",
                    imageAlt: "Kıralık Fiat Megane 2017 Model Kapak Görseli",
                    width: 838,
                    height: 471,
                }
            ],
        },
        {
            id: "R4",
            brand: "Renault",
            name: "Megane",
            model: "Standart",
            year: 2017,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Sedan",
            capacity: 6,
            doorCount: 4,
            gas: "Benzin",
            gear: "Manuel",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Fiat/Megane/2017/Nature4.webp",
                    imageAlt: "Kıralık Fiat Megane 2017 Model Kapak Görseli",
                    width: 838,
                    height: 471,
                }
            ],
        },
        {
            id: "R5",
            brand: "Renault",
            name: "Megane",
            model: "Standart",
            year: 2017,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Sedan",
            capacity: 6,
            doorCount: 4,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Fiat/Megane/2017/Nature4.webp",
                    imageAlt: "Kıralık Fiat Megane 2017 Model Kapak Görseli",
                    width: 838,
                    height: 471,
                }
            ],
        },
        {
            id: "R6",
            brand: "Renault",
            name: "Megane",
            model: "Standart",
            year: 2017,
            available: 1,
            color: {
                colorFirst: "Gri",
                colorSecond: "amber-400"
            },
            type: "Sedan",
            capacity: 6,
            doorCount: 4,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C",
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Fiat/Megane/2017/Nature4.webp",
                    imageAlt: "Kıralık Fiat Megane 2017 Model Kapak Görseli",
                    width: 838,
                    height: 471,
                }
            ],
        },
        {
            id: "V1",
            brand: "Volkswagen",
            name: "Passat",
            model: "Standart",
            year: 2023,
            available: 2,
            color: {
                colorFirst: "Gri", // arabanin dis rengi
                colorSecond: "Siyah" // arabanin ic rengi
            },
            type: "Sedan",
            capacity: 5,
            doorCount: 4,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C", // klima
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Peugeot/301/2017/Nature4.webp",
                    imageAlt: "",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "B1",
            brand: "BMW",
            name: "520i",
            model: "Standart",
            year: 2023,
            available: 2,
            color: {
                colorFirst: "Gri", // arabanin dis rengi
                colorSecond: "Siyah" // arabanin ic rengi
            },
            type: "Sedan",
            capacity: 5,
            doorCount: 4,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C", // klima
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Peugeot/301/2017/Nature4.webp",
                    imageAlt: "",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "M1",
            brand: "Mercedes",
            name: "C180",
            model: "Standart",
            year: 2023,
            available: 2,
            color: {
                colorFirst: "Gri", // arabanin dis rengi
                colorSecond: "Siyah" // arabanin ic rengi
            },
            type: "Sedan",
            capacity: 5,
            doorCount: 4,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C", // klima
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Peugeot/301/2017/Nature4.webp",
                    imageAlt: "",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
        {
            id: "M2",
            brand: "Mercedes",
            name: "Vito",
            model: "Standart",
            year: 2023,
            available: 2,
            color: {
                colorFirst: "Gri", // arabanin dis rengi
                colorSecond: "Siyah" // arabanin ic rengi
            },
            type: "Vito",
            capacity: 10,
            doorCount: 3,
            gas: "Benzin",
            gear: "Otomatik",
            ac: "A/C", // klima
            minAge: 25,
            image: [
                {
                    src: "/CarImages/Peugeot/301/2017/Nature4.webp",
                    imageAlt: "",
                    width: 2048,
                    height: 1067,
                }
            ],
        },
    ]
    const maxShowedCardCount = 8


    return (
        <PageStyle>
            <PageTitle/>
            <PageChangeNavigation cardCount={Data.length} maxShowedCardCount={maxShowedCardCount}/>
            <CustomHR/>
            <CardItems Data={Data} maxShowedCardCount={maxShowedCardCount} />
            <CustomHR/>
            <PageChangeNavigation cardCount={Data.length} maxShowedCardCount={maxShowedCardCount}/>
        </PageStyle>)
}