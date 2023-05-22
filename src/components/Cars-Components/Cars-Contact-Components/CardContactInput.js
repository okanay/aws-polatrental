export const CardContactInput = ({type, name, id, placeholder, onChange, onBlur, value, label, error, min, max}) => {


    return <>
        <div className={'w-full'}>
            <label
                className={'text-[0.95rem] text-skin-theme-600 font-bold font-openSans'}
                htmlFor={id}>{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                min={min || undefined}
                max={max || undefined}
                style={{outline: "none"}}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                autoComplete={'off'}
                required={true}
                className={`${error !== undefined ? 'border-rose-400' : 'border-gray-600/90'} duration-500 transition-colors
                       font-figtree font-semibold text-gray-500 text-sm
                       placeholder:text-sm placeholder:font-base
                       my-2 px-2 py-[22px] rounded h-10 w-full
                       border-[0.12rem] `}/>
        </div>
    </>
}