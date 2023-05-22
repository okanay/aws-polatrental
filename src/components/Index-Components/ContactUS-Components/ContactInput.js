'use client'

export const ContactInput = ({label, name, type, placeholder, required, onChange, value, error}) => {


    return <div>
        <label className={'px-1 text-[0.95rem] text-gray-900/90 font-semibold font-openSans'}
               htmlFor={"firstName"}>{label}</label>
        <input type={type} name={name} id={name} style={{outline:"none"}}
               placeholder={placeholder}
               required={required}
               onChange={onChange}
               value={value}
               autoComplete={'off'}
               className={`${error !== undefined && value.length > 0 ? 'border-rose-400' : 'border-gray-600/90'} duration-500 transition-colors
               font-figtree font-semibold text-gray-500 text-sm
               placeholder:text-sm placeholder:font-base
               mt-2 px-2 py-[22px] rounded h-10 w-full
               border-[0.12rem] `}/>
    </div>
}