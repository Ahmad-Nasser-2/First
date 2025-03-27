import React, { useState, useEffect, useRef } from "react";

/*
Sidebar Component

Props:
- data: an array with two elements:
  - data[0]: Array of labels (strings) for the span text.
  - data[1]: Array of image URLs (strings); if an image URL is "none", it indicates that no image should be displayed.
*/
const Sidebar = ({ data }) => {
    // data[0]: Array of labels (for the span text)
    // data[1]: Array of image URLs ("none" means no image)
    const [labels, images] = data;
    // Sidebar is open by default (for mobile/tablet)
    const [sidebarOpen, setSidebarOpen] = useState(true);
    // Determine if the screen is large (≥1024px)
    const [isLargeScreen, setIsLargeScreen] = useState(
        window.innerWidth >= 1024
    );

    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    // Update screen size state on resize
    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };
        window.addEventListener("resize", handleResize);
        // Call immediately to set the state based on the current window size
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // On small/medium screens, close sidebar when clicking outside
    useEffect(() => {
        if (isLargeScreen) return; // Do not attach handler on large screens

        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, [isLargeScreen]);

    // Toggle sidebar only affects small/medium screens;
    // on large screens, sidebar remains open.
    const toggleSidebar = () => {
        setSidebarOpen((prev) => !prev);
    };

    // On large screens, always show sidebar; otherwise, rely on toggle state.
    const transformClass =
        isLargeScreen || sidebarOpen ? "translate-x-0" : "-translate-x-full";

    return (
        <>
            {/* Toggle button is hidden on large screens */}
            <button
                ref={buttonRef}
                onClick={toggleSidebar}
                aria-controls="default-sidebar"
                type="button"
                className="absolute top-5 left-5 items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
                <span className="sr-only">Open sidebar</span>
                <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        clipRule="evenodd"
                        fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside
                ref={sidebarRef}
                id="default-sidebar"
                className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform ${transformClass}`}
                aria-label="Sidebar"
            >
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {labels.map((label, index) => (
                            <li
                                key={index}
                                className="hover:scale-115 transition-all duration-200"
                            >
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-stone-200 dark:hover:bg-gray-700 group"
                                >
                                    {images[index] !== "none" && (
                                        <img
                                            src={images[index]}
                                            alt={label}
                                            className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                                        />
                                    )}
                                    <span className="flex-1 ms-3 whitespace-nowrap">
                                        {label}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
