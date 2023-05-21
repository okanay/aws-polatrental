'use client'

import {CardItem} from "@/components/Cars-Components/CardItem";
import {useGetFilteredData} from "@/components/Cars-Components/useGetFilteredData";

export const CardItems = ({Data, maxShowedCardCount}) => {

    const filteredData = useGetFilteredData(Data, maxShowedCardCount)
    if (filteredData === undefined) return <><p>Loading..</p></>

    return <div className={'flex justify-center items-center my-6'}>
        <div className="grid grid-cols-1 sm:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4 gap-10 max-w-[88rem] mx-auto">
            {filteredData.map((cardData, index) => <CardItem key={cardData.id + index} cardData={cardData}/>)}
        </div>
    </div>
}

