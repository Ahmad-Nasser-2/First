import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';



export default defineConfig({
    plugins: [
        laravel({
            input:   [
                'resources/js/app.jsx',  // Your JS entry point
                'resources/css/app.css', // Add this line
              ],
            refresh: true,
        }),
        tailwindcss(),
        react(),
    ],
});
