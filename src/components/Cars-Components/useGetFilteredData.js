'use client'

import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
function filterByAvailable(data) {
    const availableFirst = data.filter(car => car.available === 1);
    const availableSecond = data.filter(car => car.available === 0);
    const availableThird = data.filter(car => car.available === 2);
    const comingSoonFourth = data.filter(car => car.available === 3);
    return [...availableFirst, ...availableSecond, ...availableThird, ...comingSoonFourth];
}
function filterByPage(data, pageCount) {
    let copyData = [...data]
    copyData = [...filterByAvailable(copyData)]
    copyData = [...copyData.slice((pageCount - 1) * 4, pageCount * 4)]
    return [...copyData]
}
export const useGetFilteredData = (Data, maxShowedCardCount) => {

    let pageCount = useSelector(state => state.carsPageNavigation.value)
    let [filteredData, setFilteredData] = useState([])

    useEffect(() => {
        let copyDummyData = [...Data]
        copyDummyData = filterByAvailable(copyDummyData)
        setFilteredData(copyDummyData.slice(0, maxShowedCardCount))

        return () => {
            setFilteredData([])
        }
    }, [])

    useEffect(() => {
        let copyDummyData = [...Data]
        copyDummyData = filterByAvailable(copyDummyData)
        setFilteredData(copyDummyData.slice((pageCount - 1) * maxShowedCardCount, pageCount * maxShowedCardCount))
    }, [pageCount])


    return filteredData
}

