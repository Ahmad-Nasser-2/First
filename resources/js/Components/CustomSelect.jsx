import React, { useState, useId, useEffect, useRef } from "react";
/*
CustomSelect Component

Props:
- label: string, the label for the select input.
- options: array of strings, list of selectable options.
*/

const CustomSelect = ({ label, options }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const id = useId();
    const wrapperRef = useRef(null);

    // Filter the options based on the search term (case-insensitive)
    const filteredOptions = options.filter((option) =>
        option.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleOptionClick = (option) => {
        setSearchTerm(option);
        setShowDropdown(false);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={wrapperRef}>
            <input
                type="text"
                id={id}
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-slate-50 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
            />
            <label
                htmlFor={id}
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-gray-200 dark:bg-stone-800 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-slate-50 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
                {label}
            </label>

            {showDropdown && filteredOptions.length > 0 && (
                <ul className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-slate-50 py-1 text-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm dark:bg-stone-800 dark:ring-white dark:text-white">
                    {filteredOptions.map((option, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionClick(option)}
                            className="cursor-pointer px-4 py-2 hover:bg-gray-200 dark:hover:bg-stone-600"
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
