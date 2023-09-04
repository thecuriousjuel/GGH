let wristlet = [{'name': 'Gold Wristlet 1', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet1.jpg'},
{'name': 'Gold Wristlet 2', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet2.jpg'},
{'name': 'Gold Wristlet 3', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet3.jpg'},
{'name': 'Gold Wristlet 4', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet4.jpg'},
{'name': 'Gold Wristlet 5', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet5.jpg'},
{'name': 'Gold Wristlet 6', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet6.jpg'},
{'name': 'Gold Wristlet 7', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet7.jpg'},
{'name': 'Gold Wristlet 8', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet8.jpg'},
{'name': 'Gold Wristlet 9', 'weight': 2, 'imageFileLocation': 'img/wristlet/wristlet9.jpg'},]

let templateString = '';

for (let i = 0; i < wristlet.length; i += 1)
{
  templateString += `<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${wristlet[i].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${wristlet[i].name}
      </h5>
    </a>
  
    <div class="flex items-center justify-between">
      <span class="text-xl font-bold text-gray-900 dark:text-white"
        >Weight : 2 grams (Approx)</span
      >
      <a
        href="#"
        class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Contact</a
      >
    </div>
  </div>
  </div>`
}

class Wristlet extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    this.innerHTML = templateString;
  }
}

customElements.define('wristlet-component', Wristlet);

