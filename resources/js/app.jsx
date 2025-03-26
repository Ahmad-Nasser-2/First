import './bootstrap';
import '../css/app.css';

// ===== 1. MOCK INERTIA (if needed) ===== //
if (import.meta.env.DEV) {
  import('./fakeInertia.js');
}

// ===== 2. MSW MOCK API ===== //
if (import.meta.env.DEV) {
  const { worker } = await import('./mocks/browser');
  worker.start();
}

// ===== Original Inertia Setup ===== //
import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true });
    return pages[`./Pages/${name}.jsx`];
  },
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />);
  },
});
