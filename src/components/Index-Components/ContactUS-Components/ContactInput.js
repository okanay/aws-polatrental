'use client'

export const ContactInput = ({id,label, name, type, placeholder, required, onChange, value, error, onBlur}) => {

    return <div>
        <label className={'px-1 text-[0.95rem] text-gray-900/90 font-semibold font-openSans'}
               htmlFor={"firstName"}>{label}</label>
        <input type={type}
               name={name}
               id={id}
               style={{outline:"none"}}
               placeholder={placeholder}
               required={required}
               onChange={onChange}
               autoComplete={'off'}
               onBlur={onBlur}
               value={value}
               className={`
               ${
                   error !== undefined &&
                   value.length > 0
                   ? 'border-rose-400' 
                   : 'border-slate-500/75'
               } 
               duration-500 transition-colors
               font-figtree font-semibold text-gray-500 text-sm
               placeholder:text-sm placeholder:font-base
               my-2 px-2 py-[22px] rounded h-10 w-full
               border-[0.12rem] `}/>
    </div>
}