const app = document.getElementById('app');
const drawer = document.getElementById('nav-drawer');
const overlay = document.getElementById('overlay');

// Data
const categories = ['bracelet', 'chur', 'loha', 'pola'];
const productData = {
    bracelet: {
        title: "Gold Bracelet",
        weight: "2 gram (Approx)",
        images: Array.from({length: 4}, (_, i) => `img/bracelet/bracelet${i+1}.jpg`)
    },
    chur: {
        title: "Gold Chur",
        weight: "20 gram (Approx)",
        images: Array.from({length: 3}, (_, i) => `img/chur/pola${i+1}.jpg`)
    },
    loha: {
        title: "Gold Loha Badhano",
        weight: "2 gram (Approx)",
        images: Array.from({length: 3}, (_, i) => `img/loha/loha${i+1}.jpg`)
    },
    pola: {
        title: "Gold Chur Pola",
        weight: "20 gram (Approx)",
        images: Array.from({length: 2}, (_, i) => `img/pola/pola${i+1}.jpg`)
    }
};

// Routing
const routes = {
    '': renderHome,
    'home': renderHome,
    'bracelet': () => renderProducts('bracelet'),
    'chur': () => renderProducts('chur'),
    'loha': () => renderProducts('loha'),
    'pola': () => renderProducts('pola'),
    'contact': renderContact,
    'about': renderAbout
};

function navigate(hash) {
    const route = hash.replace('#', '') || 'home';
    if (routes[route]) {
        app.style.opacity = 0;
        setTimeout(() => {
            routes[route]();
            app.style.opacity = 1;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 150); // M3 standard transition time for opacity
    } else {
        renderHome();
        app.style.opacity = 1;
    }
    updateNavSelection(route);
    closeDrawer(); // close mobile drawer on navigate
}

function updateNavSelection(route) {
    document.querySelectorAll('.nav-link').forEach(el => {
        el.classList.remove('active');
        if(el.getAttribute('href') === `#${route}` || (route === '' && el.getAttribute('href') === '#home')) {
            el.classList.add('active');
        }
    });
}

// Renderers
function renderHome() {
    // Dynamic generation of cards using JS templates
    app.innerHTML = `
        <div class="hero-container">
            <img src="img/banner.jpg" class="hero-img" alt="Banner showcasing beautiful gold jewellery" />
            <div class="hero-content page-animate">
                <h1>গৌরী গিনি হাউস</h1>
                <p>Elegant and Pure Gold Jewellery</p>
                <div class="hero-actions">
                    <a href="#bracelet" class="m3-button filled">Explore Collection</a>
                </div>
            </div>
        </div>
        <div class="category-showcase container page-animate">
             <h2 class="display-title">Our Collections</h2>
             <div class="grid">
                 ${categories.map(cat => `
                     <a href="#${cat}" class="m3-card category-card surface-container-low card-hover">
                         <img src="${productData[cat].images[0]}" alt="${productData[cat].title}" />
                         <div class="card-body">
                             <h3>${productData[cat].title}</h3>
                         </div>
                     </a>
                 `).join('')}
             </div>
        </div>
    `;
}

function renderProducts(cat) {
    const data = productData[cat];
    app.innerHTML = `
        <div class="container container-padding page-animate">
            <header class="section-header">
                <h2>${data.title}</h2>
                <p>Browse our exquisite collection</p>
            </header>
            <div class="product-grid">
                ${data.images.map(img => `
                    <div class="m3-card product-card surface-container-low card-hover">
                        <div class="card-img-wrapper">
                            <img src="${img}" alt="${data.title}" loading="lazy"/>
                        </div>
                        <div class="card-body">
                            <h3 class="product-title">${data.title}</h3>
                            <p class="product-weight">Weight: ${data.weight}</p>
                            <a href="tel:+919434000984" class="m3-button tonal full-width">
                               <svg viewBox="0 0 24 24" class="icon" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.5-.4-1-1-1zM19 12h2a9 9 0 0 0-9-9v2c3.9 0 7.1 3.2 7.1 7.1zm-4 0h2c0-2.8-2.2-5-5-5v2c1.7 0 3.1 1.4 3.1 3.1z"/></svg> 
                               Contact to Purchase
                            </a>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderContact() {
    app.innerHTML = `
        <div class="container container-padding page-animate">
            <div class="contact-card m3-card surface-container-low">
                <h2>Contact Us</h2>
                <div class="contact-option">
                    <div class="icon-circle">
                       <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M17 19.2c-4 0-7.7-1.5-10.5-4.3C3.6 12.2 2 8.4 2 4.4 2 4 2.2 3.8 2.6 3.8h4.6c.3 0 .7.2.8.5l1 3.4c0 .3 0 .6-.2.8L6.5 10.8c2.2 4.3 5.4 7.5 9.7 9.7l2.1-2.4c.2-.2.5-.3.8-.2l3.4 1c.3.1.5.5.5.8v4.6c0 .4-.2.6-.6.6z"/></svg>
                    </div>
                    <div>
                        <h3>Mobile</h3>
                        <a href="tel:+919434000984">+91 9434000984</a>
                    </div>
                </div>

                <div class="contact-option">
                    <div class="icon-circle">
                        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.4-1.2-.6-2.4-.6-3.6 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.5-.4-1-1-1z"/></svg>
                    </div>
                    <div>
                        <h3>Landline</h3>
                        <a href="tel:+03482254723">(03482) 254723</a>
                    </div>
                </div>

                <div class="map-container">
                    <h3>Location</h3>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.947249178003!2d88.24903217594279!3d24.103350475133766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f97ddbe5f731a1%3A0xae7cb288573a4c10!2sGouri%20Guinea%20House!5e0!3m2!1sen!2sin!4v1692969611912!5m2!1sen!2sin" width="100%" height="300" style="border:0; border-radius: 16px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    `;
}

function renderAbout() {
    app.innerHTML = `
        <div class="container container-padding page-animate text-center">
             <h2 class="display-title">About Us</h2>
             <div class="m3-card surface-container-low" style="max-width: 600px; margin: 0 auto; padding: 32px">
                 <h3 style="margin-bottom: 16px; font: var(--md-sys-typescale-headline);">গৌরী গিনি হাউস</h3>
                 <p style="line-height: 1.6; color: var(--md-sys-color-on-surface-variant); font: var(--md-sys-typescale-body);">
                     Welcome to Gouri Guinea House. We have been serving you with pure and exquisite gold jewellery. 
                     Our commitment to quality, trust, and exceptional craftsmanship has made us a preferred destination for gold shopping.
                 </p>
             </div>
        </div>
    `;
}

// Initial hydration
window.addEventListener('hashchange', () => navigate(window.location.hash));
window.addEventListener('DOMContentLoaded', () => navigate(window.location.hash));

// Drawer controls
function toggleDrawer() {
    drawer.classList.toggle('open');
    overlay.classList.toggle('show');
}
function closeDrawer() {
    drawer.classList.remove('open');
    overlay.classList.remove('show');
}
document.getElementById('menu-btn').addEventListener('click', toggleDrawer);
overlay.addEventListener('click', closeDrawer);
