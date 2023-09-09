// vite.config.js
export default {
    // Other Vite config options...
    base: '',
    plugins : [],
    build: {
      rollupOptions: {
        // Specify multiple entry points for HTML files
        input: {
          main: 'index.html',     // Your main entry point (default)
          loha: 'loha.html',
          sakha: 'sakha.html',
          pola: 'pola.html',
          bala: 'bala.html',
          chur: 'chur.html',
          mantasa: 'mantasa.html',
          bracelet: 'bracelet.html',
          necklace: 'necklace.html',
          wristlet: 'wristlet.html',
          contact: 'contact.html', // Additional entry point for the contact page
          about: 'about.html',   // Additional entry point for the about page
          // Add more entry points as needed
        },
      },
    },
  };
