'use client'

export const ContactTextarea = ({label, name, inputRef, placeholder, required}) => {

    return  <div>
        <label className={'px-1 text-[0.95rem] text-gray-900/90 font-semibold font-openSans'}
               htmlFor={"message"}>{label}</label>
        <textarea name={name} id={name} ref={inputRef} style={{outline:"none"}} placeholder={placeholder} required={required}
                  className={'font-figtree placeholder:text-sm placeholder:font-base text-sm font-semibold text-gray-500 w-full px-2 py-[10px] h-36 mt-2 rounded border-[0.11rem] border-gray-600 focus:outline-skin-theme-400'}/>
    </div>
}