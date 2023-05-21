import {ArrowLeftIcon} from "@heroicons/react/20/solid";

export const CloseTextButton = () => {

    return <button className={'text-gray-600 font-semibold'}>
        <span className={'flex justify-center items-center gap-2'}>
            <ArrowLeftIcon className={'w-4 h-4'}/>
            Kapat
        </span>
    </button>
}