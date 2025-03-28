import React, { useState, useEffect, useRef } from "react";
/*
CustomTable Component

Props:
- query: string, initial search query value.
- filterEnabled: boolean, flag indicating whether the filter dropdown is enabled.
- filterOptions: array of objects, each with at least 'label' and 'value' properties representing filter options.
- titles: array of strings, representing the header titles for the table columns.
- data: array of arrays, where each inner array represents a row of data in the table.
- onQueryChange: function, callback function invoked when the search query changes.
- onFilterChange: function, callback function invoked when the filter selection changes.
*/

const CustomTable = ({
    query = "",
    filterEnabled = true,
    filterOptions = [],
    titles = [],
    data = [],
    onQueryChange,
    onFilterChange,
}) => {
    // State for search input and selected filter option.
    const [searchQuery, setSearchQuery] = useState(query);
    const [selectedFilter, setSelectedFilter] = useState(
        filterOptions.length > 0 ? filterOptions[0] : null
    );
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Ref to handle clicks outside the dropdown.
    const dropdownRef = useRef();

    // Close dropdown if clicked outside.
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleDropdown = () => {
        if (filterEnabled) {
            setDropdownOpen((prev) => !prev);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        if (onQueryChange) onQueryChange(e.target.value);
    };

    const handleFilterSelect = (option) => {
        setSelectedFilter(option);
        if (onFilterChange) onFilterChange(option);
        setDropdownOpen(false);
    };

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            {/* Header: Filter dropdown & search input */}
            <div className="flex flex-col sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">
                <div className="relative" ref={dropdownRef}>
                    <button
                        id="dropdownRadioButton"
                        type="button"
                        onClick={toggleDropdown}
                        disabled={!filterEnabled}
                        className={`inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 ${
                            !filterEnabled
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                        }`}
                    >
                        <svg
                            className="w-3 h-3 text-gray-500 dark:text-gray-400 me-3"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                        </svg>
                        {selectedFilter
                            ? selectedFilter.label
                            : "Select Filter"}
                        <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m1 1 4 4 4-4"
                            />
                        </svg>
                    </button>
                    {dropdownOpen && filterEnabled && (
                        <div
                            id="dropdownRadio"
                            className="absolute z-10 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 mt-2"
                        >
                            <ul
                                className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                                aria-labelledby="dropdownRadioButton"
                            >
                                {filterOptions.map((option, index) => (
                                    <li key={index}>
                                        <div className="flex items-center p-2 rounded-sm hover:bg-gray-100 dark:hover:bg-gray-600">
                                            <input
                                                id={`filter-radio-example-${index}`}
                                                type="radio"
                                                name="filter-radio"
                                                checked={
                                                    selectedFilter &&
                                                    selectedFilter.value ===
                                                        option.value
                                                }
                                                onChange={() =>
                                                    handleFilterSelect(option)
                                                }
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                            />
                                            <label
                                                htmlFor={`filter-radio-example-${index}`}
                                                className="w-full ms-2 text-sm font-medium text-gray-900 rounded-sm dark:text-gray-300"
                                            >
                                                {option.label}
                                            </label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <label htmlFor="table-search" className="sr-only">
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        id="table-search"
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search for items"
                    />
                </div>
            </div>

            {/* Table */}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="p-4">
                            <div className="flex items-center">
                                <input
                                    id="checkbox-all-search"
                                    type="checkbox"
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <label
                                    htmlFor="checkbox-all-search"
                                    className="sr-only"
                                >
                                    checkbox
                                </label>
                            </div>
                        </th>
                        {titles.map((title, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-stone-200 dark:hover:bg-gray-600"
                        >
                            <td className="w-4 p-4">
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-table-search-${rowIndex}`}
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor={`checkbox-table-search-${rowIndex}`}
                                        className="sr-only"
                                    >
                                        checkbox
                                    </label>
                                </div>
                            </td>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} className="px-6 py-4">
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomTable;
