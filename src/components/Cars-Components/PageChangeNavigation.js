'use client'

import {ArrowLeftIcon, ArrowRightIcon} from "@heroicons/react/20/solid";
import {useDispatch, useSelector} from "react-redux";
import {nextPage, prevPage} from "@/redux/slice/carsPageNavigationSlice";

export const PageChangeNavigation = ({cardCount, maxShowedCardCount}) => {

    const dispatch = useDispatch()
    const pageValue = useSelector(state => state.carsPageNavigation.value)

    const handleOnNextPage = () => {
        scrollToTop()
        dispatch(nextPage({totalCarsCount: cardCount, singleShowCount: maxShowedCardCount}))
    }

    const handleOnPrevPage = () => {
        scrollToTop()
        dispatch(prevPage({totalCarsCount: cardCount, singleShowCount: maxShowedCardCount}))
    }

    function scrollToTop() {
        setTimeout(() => {
            const scrollOptions = {
                top: 0,
                behavior: 'smooth'
            };
            window.scrollTo(scrollOptions);
        }, 250)
    }
// flex flex-wrap items-center justify-center gap-2 tablet:flex-row tablet:justify-between tablet:flex-wrap sm:gap-4 pt-4 pb-3 mx-auto max-w-7xl
    return <div
        className={'flex flex-row flex-wrap justify-between gap-3 pt-4 pb-3 items-center text-center mx-auto max-w-7xl font-openSans'}>
        <button
            disabled={pageValue <= 1}
            onClick={handleOnPrevPage}
            className="group disabled:bg-gray-100 group-disabled:bg-gray-100 disabled:text-gray-400 group-disabled:text-gray-400 tablet:order-1 flex px-4 py-2 gap-2 items-center px-4 py-2 text-xs font-medium text-gray-500 bg-white border border-gray-200/60 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-500">
            <ArrowLeftIcon className={'w-4 h-4 text-skin-theme-600 disabled:text-gray-100 group-disabled:text-gray-400'}/>
            Önceki
        </button>
        <div className={'order-3 tablet:order-2 w-full tablet:w-fit text-center'}>
            <p className={'text-xs text-gray-500 text-center'}>Toplamda <span className={'text-skin-theme-600 font-bold'}>{cardCount}</span> araç arasından <span
                className={'font-bold text-skin-theme-600'}>{pageValue * maxShowedCardCount - maxShowedCardCount + 1} </span>ile <span
                className={'font-bold text-skin-theme-600'}>{(pageValue * maxShowedCardCount > cardCount ? cardCount : pageValue * maxShowedCardCount)}</span> araç arasında gösterim yapılıyor.</p>
        </div>
        <button
            disabled={Math.ceil(cardCount / maxShowedCardCount) === pageValue}
            onClick={handleOnNextPage}
            className="tablet:order-3 group disabled:bg-gray-100 group-disabled:bg-gray-100 disabled:text-gray-400 group-disabled:text-gray-400 flex px-4 py-2 gap-2 items-center text-xs font-medium text-gray-500 bg-white border border-gray-200/60 rounded hover:bg-gray-100 hover:text-gray-700 transition-colors duration-500">
            Sonraki
            <ArrowRightIcon className={'w-4 h-4 text-skin-theme-600 disabled:text-gray-100 group-disabled:text-gray-400'}/>
        </button>
    </div>
}