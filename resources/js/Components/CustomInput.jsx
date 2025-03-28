import React from "react";

/*
CustomInput Component

Props:
- id: string, text for the input label.
- name: string, name attribute for the input.
- label: string, unique id for the input.
- type: string, input type (default is "text").
- addon: string, optional element displayed at the left side of the input.
- value: string, current value of the input.
- onChange: function, callback invoked on input change.
*/
const CustomInput = ({
    id,
    name,
    label,
    type = "text",
    addon = "",
    value = "",
    onChange = "",
}) => {
    return (
        <div className="relative">
            {addon && (
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-gray-500">
                    {addon}
                </span>
            )}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={`block ${addon ? "pl-7 pr-2.5" : "px-2.5"}
        ${type === "color" ? "h-12" : ""}
        pb-2.5 pt-4 w-full text-sm text-black bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-50 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
                placeholder=" "
            />
            <label
                htmlFor={id}
                className="absolute rounded-xl text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-100 dark:bg-stone-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-slate-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
                {label}
            </label>
        </div>
    );
};

export default CustomInput;
