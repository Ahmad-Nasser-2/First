import './bootstrap';
import '../css/app.css';

// ===== 1. MOCK INERTIA (Development Only) ===== //
if (import.meta.env.DEV) {
  try {
    // Optional: Only include if you need to mock Inertia
    await import('./fakeInertia.js');
  } catch (e) {
    console.warn('Inertia mock failed to load', e);
  }
}

// ===== 2. MSW MOCK API (Development Only) ===== //
if (import.meta.env.DEV) {
  try {
    const { worker } = await import('./mocks/browser');
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: '/mockServiceWorker.js',
      },
    });
    console.log('[MSW] Mocking enabled');
  } catch (e) {
    console.warn('API mocking failed to start', e);
  }
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
