'use client'

export const ContactInput = ({label, name, inputRef, type, placeholder, required}) => {


    return <div>
        <label className={'px-1 text-[0.95rem] text-gray-900/90 font-semibold font-openSans'}
               htmlFor={"firstName"}>{label}</label>
        <input type={type} name={name} id={name} ref={inputRef} style={{outline:"none"}} placeholder={placeholder} required={required}
               className={'font-figtree placeholder:text-sm placeholder:font-base mt-2 outline-skin-body-600 text-sm font-semibold text-gray-500 w-full px-2 py-[22px] rounded h-10 border-[0.12rem] border-gray-600/90 focus:outline-skin-theme-400'}/>
    </div>
}