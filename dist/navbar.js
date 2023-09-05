class Navbar extends HTMLElement
{
    constructor()
    {
        super();
    }

    connectedCallback()
    {
        this.innerHTML = `  
        <nav class="bg-white p-5 shadow md:flex md:items-center md:justify-between">
          <div class="flex items-center justify-between">
            <span class="cursor-pointer font-[Poppins] text-2xl">
              <div class="flex items-center justify-center">
                <!-- <img class="inline h-10"
                  src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" /> -->
                <p class="text-4xl font-bold text-red-600">গৌরী গিণি হাউস</p>
              </div>
            </span>
      
            <span class="mx-2 block cursor-pointer text-3xl md:hidden">
              <ion-icon name="menu" onclick="import('./navbar-helper.js').then(module => module.Menu(this))"></ion-icon>
            </span>
          </div>
      
          <ul
          class="absolute left-0 top-[-400px] z-[-1] w-full bg-white py-4 pl-7 opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:py-0 md:pl-0 md:opacity-100">
          <li class="mx-4 my-6 md:my-0">
            <a href="index.html" class="text-xl duration-500 hover:text-red-500">HOME</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="loha.html" class="text-xl duration-500 hover:text-red-500">LOHA</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="sakha.html" class="text-xl duration-500 hover:text-red-500">SAKHA</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="pola.html" class="text-xl duration-500 hover:text-red-500">POLA</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="bala.html" class="text-xl duration-500 hover:text-red-500">BALA</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="chur.html" class="text-xl duration-500 hover:text-red-500">CHUR</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="mantasa.html" class="text-xl duration-500 hover:text-red-500">MANTASA</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="bracelet.html" class="text-xl duration-500 hover:text-red-500">BRACELET</a>
          </li>
          <li class="mx-4 my-6 md:my-0">
            <a href="wristlet.html" class="text-xl duration-500 hover:text-red-500">WRISTLET</a>
          </li>
    
          <li class="mx-4 my-6 md:my-0">
            <a href="contact.html" class="text-xl duration-500 hover:text-red-500">CONTACT</a>
          </li>
    
          <li class="mx-4 my-6 md:my-0">
            <a href="about.html" class="text-xl duration-500 hover:text-red-500">ABOUT</a>
          </li>
    
          <h2 class=""></h2>
        </ul>
        </nav>`;
    }
}

customElements.define('nav-component', Navbar);

