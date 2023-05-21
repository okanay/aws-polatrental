export const RegisterMenuNavigationText = ({formState}) => {

    const altTitles = {
        text1: "Polat Rental hesabınıza oluşturmak için aşağıdaki yöntemlerden birini tercih edebilirsiniz:",
        text2: "Polat Rental hesabınıza oluşturabilmemiz için aşağıda bulunan gerekli soruları lütfen doldurun:",
    }

    return <>
        <div className={'flex justify-between items-center w-full'}>
            <h1 className={'text-skin-theme-600 font-bold'}>Hesap Oluştur</h1>
            {formState.formState !== 0 && (<p className={'text-sm text-skin-theme-600 px-1.5 rounded-full border border-skin-theme-600 text-center'}>{formState.formState}</p>)}
        </div>
        <p>{formState.formState === 0 ? altTitles.text1 : altTitles.text2}</p>
    </>
}