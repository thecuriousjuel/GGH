import"./navbar-helper-93beb6d7.js";let e=[{name:"Gold Bala 1",weight:2,imageFileLocation:"img/bala/bala1.jpg"},{name:"Gold Bala 2",weight:2,imageFileLocation:"img/bala/bala2.jpg"},{name:"Gold Bala 3",weight:2,imageFileLocation:"img/bala/bala3.jpg"},{name:"Gold Bala 4",weight:2,imageFileLocation:"img/bala/bala4.jpg"},{name:"Gold Bala 5",weight:2,imageFileLocation:"img/bala/bala5.jpg"},{name:"Gold Bala 6",weight:2,imageFileLocation:"img/bala/bala6.jpg"},{name:"Gold Bala 7",weight:2,imageFileLocation:"img/bala/bala7.jpg"},{name:"Gold Bala 8",weight:2,imageFileLocation:"img/bala/bala8.jpg"},{name:"Gold Bala 9",weight:2,imageFileLocation:"img/bala/bala9.jpg"},{name:"Gold Bala 10",weight:2,imageFileLocation:"img/bala/bala10.jpg"},{name:"Gold Bala 11",weight:2,imageFileLocation:"img/bala/bala11.jpg"},{name:"Gold Bala 12",weight:2,imageFileLocation:"img/bala/bala12.jpg"},{name:"Gold Bala 13",weight:2,imageFileLocation:"img/bala/bala13.jpg"},{name:"Gold Bala 14",weight:2,imageFileLocation:"img/bala/bala14.jpg"},{name:"Gold Bala 15",weight:2,imageFileLocation:"img/bala/bala15.jpg"}],l="";for(let a=0;a<e.length;a+=1)l+=`<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${e[a].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${e[a].name}
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
  </div>`;class i extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=l}}customElements.define("bala-component",i);
