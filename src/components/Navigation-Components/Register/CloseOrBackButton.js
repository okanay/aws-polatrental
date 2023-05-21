import {RegisterMenuButton} from "@/components/Navigation-Components/Register/RegisterMenuButton";
import {CloseTextButton} from "@/components/Navigation-Components/UI/CloseTextButton";
import {RegisterPrevStep} from "@/components/Navigation-Components/Register/RegisterPrevStep";

export const CloseOrBackButton = ({formState}) => {

    return formState.formState === 0 ? (
            <RegisterMenuButton>
                <CloseTextButton/>
            </RegisterMenuButton>
        ) : <RegisterPrevStep formState={formState}/>
}