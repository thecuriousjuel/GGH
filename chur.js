let chur = [{'name': 'Gold Chur 1', 'weight': 2, 'imageFileLocation': 'img/chur/chur1.jpg'},
{'name': 'Gold Chur 2', 'weight': 2, 'imageFileLocation': 'img/chur/chur2.jpg'},
{'name': 'Gold Chur 3', 'weight': 2, 'imageFileLocation': 'img/chur/chur3.jpg'},
{'name': 'Gold Chur 4', 'weight': 2, 'imageFileLocation': 'img/chur/chur4.jpg'},
{'name': 'Gold Chur 5', 'weight': 2, 'imageFileLocation': 'img/chur/chur5.jpg'},
{'name': 'Gold Chur 6', 'weight': 2, 'imageFileLocation': 'img/chur/chur6.jpg'},
{'name': 'Gold Chur 7', 'weight': 2, 'imageFileLocation': 'img/chur/chur7.jpg'},
{'name': 'Gold Chur 8', 'weight': 2, 'imageFileLocation': 'img/chur/chur8.jpg'},
{'name': 'Gold Chur 9', 'weight': 2, 'imageFileLocation': 'img/chur/chur9.jpg'},
{'name': 'Gold Chur 10', 'weight': 2, 'imageFileLocation': 'img/chur/chur10.jpg'},
{'name': 'Gold Chur 11', 'weight': 2, 'imageFileLocation': 'img/chur/chur11.jpg'},
{'name': 'Gold Chur 12', 'weight': 2, 'imageFileLocation': 'img/chur/chur12.jpg'},]

let templateString = '';

for (let i = 0; i < chur.length; i += 1)
{
  templateString += `<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${chur[i].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${chur[i].name}
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

class Chur extends HTMLElement
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

customElements.define('chur-component', Chur);

