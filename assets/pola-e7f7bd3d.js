import"./navbar-helper-93beb6d7.js";let o=[{name:"Gold Pola 1",weight:2,imageFileLocation:"img/pola/pola1.jpg"},{name:"Gold Pola 2",weight:2,imageFileLocation:"img/pola/pola2.jpg"},{name:"Gold Pola 3",weight:2,imageFileLocation:"img/pola/pola3.jpg"},{name:"Gold Pola 4",weight:2,imageFileLocation:"img/pola/pola4.jpg"},{name:"Gold Pola 5",weight:2,imageFileLocation:"img/pola/pola5.jpg"},{name:"Gold Pola 6",weight:2,imageFileLocation:"img/pola/pola6.jpg"},{name:"Gold Pola 7",weight:2,imageFileLocation:"img/pola/pola7.jpg"},{name:"Gold Pola 8",weight:2,imageFileLocation:"img/pola/pola8.jpg"},{name:"Gold Pola 9",weight:2,imageFileLocation:"img/pola/pola9.jpg"},{name:"Gold Pola 10",weight:2,imageFileLocation:"img/pola/pola10.jpg"},{name:"Gold Pola 11",weight:2,imageFileLocation:"img/pola/pola11.jpg"},{name:"Gold Pola 12",weight:2,imageFileLocation:"img/pola/pola12.jpg"},{name:"Gold Pola 13",weight:2,imageFileLocation:"img/pola/pola13.jpg"},{name:"Gold Pola 14",weight:2,imageFileLocation:"img/pola/pola14.jpg"},{name:"Gold Pola 15",weight:2,imageFileLocation:"img/pola/pola15.jpg"},{name:"Gold Pola 16",weight:2,imageFileLocation:"img/pola/pola16.jpg"},{name:"Gold Pola 17",weight:2,imageFileLocation:"img/pola/pola17.jpg"},{name:"Gold Pola 18",weight:2,imageFileLocation:"img/pola/pola18.jpg"},{name:"Gold Pola 19",weight:2,imageFileLocation:"img/pola/pola19.jpg"},{name:"Gold Pola 20",weight:2,imageFileLocation:"img/pola/pola20.jpg"},{name:"Gold Pola 21",weight:2,imageFileLocation:"img/pola/pola21.jpg"},{name:"Gold Pola 22",weight:2,imageFileLocation:"img/pola/pola22.jpg"},{name:"Gold Pola 23",weight:2,imageFileLocation:"img/pola/pola23.jpg"}],e="";for(let a=0;a<o.length;a+=1)e+=`<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${o[a].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${o[a].name}
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
  </div>`;class l extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=e}}customElements.define("pola-component",l);
