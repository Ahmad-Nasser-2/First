/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php", // Laravel Blade templates
        "./resources/js/**/*.{js,jsx}", // React files inside Laravel
    ],
    theme: {
        extend: {
            colors: {
                light: {
                    primary: "#FF6F61", // Light theme primary color
                    secondary: "#FFB6B9", // Light theme secondary color
                },
                dark: {
                    primary: "#1E3A8A", // Dark theme primary color
                    secondary: "#4B5563", // Dark theme secondary color
                },
            },
            fontFamily: {
                // Example custom font
            },
            spacing: {
                // Example of adding custom spacing
            },
        },
    },
    plugins: [],
};
