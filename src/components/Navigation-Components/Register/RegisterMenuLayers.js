import {GoogleCredentials} from "@/components/Navigation-Components/Credentials/GoogleCredentials";
import {EmailRegisterButton} from "@/components/Navigation-Components/Register/EmailRegisterButton";
import {RegisterForm} from "@/components/Navigation-Components/Register/RegisterForm";

export const RegisterMenuLayers = ({formState}) => {

    return formState.formState === 0 ? (
            <div className={'flex flex-col justify-center items-center gap-2 w-full'}>
                <GoogleCredentials/>
                <EmailRegisterButton/>
            </div>
        ) : <RegisterForm formState={formState}/>
}