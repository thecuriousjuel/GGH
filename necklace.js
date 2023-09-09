let necklace = [{'name': 'Gold Necklace 1', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace1.jpg'},
{'name': 'Gold Necklace 2', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace2.jpg'},
{'name': 'Gold Necklace 3', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace3.jpg'},
{'name': 'Gold Necklace 4', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace4.jpg'},
{'name': 'Gold Necklace 5', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace5.jpg'},
{'name': 'Gold Necklace 6', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace6.jpg'},
{'name': 'Gold Necklace 7', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace7.jpg'},
{'name': 'Gold Necklace 8', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace8.jpg'},
{'name': 'Gold Necklace 9', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace9.jpg'},
{'name': 'Gold Necklace 10', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace10.jpg'},
{'name': 'Gold Necklace 11', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace11.jpg'},
{'name': 'Gold Necklace 12', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace12.jpg'},
{'name': 'Gold Necklace 13', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace13.jpg'},
{'name': 'Gold Necklace 14', 'weight': 2, 'imageFileLocation': 'img/necklace/necklace14.jpg'},]

let templateString = '';

for (let i = 0; i < necklace.length; i += 1)
{
  templateString += `<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${necklace[i].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${necklace[i].name}
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

class Necklace extends HTMLElement
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

customElements.define('necklace-component', Necklace);

