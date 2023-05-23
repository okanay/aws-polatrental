'use client'

export const ContactTextarea = ({label, name, placeholder, required, onChange, value, error, onBlur}) => {

    return <div>
        <label className={'px-1 text-[0.95rem] text-gray-900/90 font-semibold font-openSans'}
               htmlFor={"message"}>{label}</label>
        <textarea name={name}
                  id={name}
                  style={{outline: "none"}}
                  placeholder={placeholder}
                  required={required}
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                  autoComplete={'off'}
                  className={`${
                      error !== undefined &&
                      value.length > 0
                          ? 'border-rose-400'
                          : 'border-slate-500/75'
                  } 
                  duration-500 transition-colors
                  font-figtree text-sm font-semibold text-gray-500 
                  placeholder:text-sm placeholder:font-base
                  px-2 py-[10px] h-36 w-full my-2 rounded border-[0.11rem]`}/>
    </div>
}