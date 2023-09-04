// vite.config.js
export default {
    // Other Vite config options...
    build: {
      rollupOptions: {
        // Specify multiple entry points for HTML files
        input: {
          main: 'index.html',     // Your main entry point (default)
          bracelet: 'bracelet.html',
          chur: 'chur.html',
          loha: 'loha.html',
          pola: 'pola.html',
          about: 'about.html',   // Additional entry point for the about page
          contact: 'contact.html', // Additional entry point for the contact page
          // Add more entry points as needed
        },
      },
    },
  };
  