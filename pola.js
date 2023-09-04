let pola = [{
  "name": "Gold Pola 1",
  "weight": 2,
  "imageFileLocation": "img/pola/pola1.jpg"
},
{
  "name": "Gold Pola 2",
  "weight": 3,
  "imageFileLocation": "img/pola/pola2.jpg"
},
{
  "name": "Gold Pola 3",
  "weight": 4,
  "imageFileLocation": "img/pola/pola3.jpg"
},
{
  "name": "Gold Pola 4",
  "weight": 5,
  "imageFileLocation": "img/pola/pola4.jpg"
},
{
  "name": "Gold Pola 5",
  "weight": 6,
  "imageFileLocation": "img/pola/pola5.jpg"
},
{
  "name": "Gold Pola 6",
  "weight": 7,
  "imageFileLocation": "img/pola/pola6.jpg"
}]

let templateString = '';

for (let i = 0; i < pola.length; i += 1)
{
  templateString += `<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${pola[i].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${pola[i].name}
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

class Pola extends HTMLElement
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

customElements.define('pola-component', Pola);

