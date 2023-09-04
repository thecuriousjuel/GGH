import"./navbar-helper-4f8ec215.js";let t=[{name:"Gold Bracelet 1",weight:2,imageFileLocation:"img/bracelet/bracelet1.jpg"},{name:"Gold Bracelet 2",weight:2,imageFileLocation:"img/bracelet/bracelet2.jpg"},{name:"Gold Bracelet 3",weight:2,imageFileLocation:"img/bracelet/bracelet3.jpg"},{name:"Gold Bracelet 4",weight:2,imageFileLocation:"img/bracelet/bracelet4.jpg"},{name:"Gold Bracelet 5",weight:2,imageFileLocation:"img/bracelet/bracelet5.jpg"},{name:"Gold Bracelet 6",weight:2,imageFileLocation:"img/bracelet/bracelet6.jpg"},{name:"Gold Bracelet 7",weight:2,imageFileLocation:"img/bracelet/bracelet7.jpg"}],a="";for(let e=0;e<t.length;e+=1)a+=`<div
  class="w-full max-w-xs rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20"
  >
  <div
    class="cursor-pointer object-cover transition duration-500 hover:scale-110"
  >
    <img
      class="rounded-t-lg p-4"
      src="${t[e].imageFileLocation}"
      alt="product image"
    />
  </div>
  <div class="px-5 pb-5">
    <a href="tel:+919434000984">
      <h5
        class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white"
      >
      ${t[e].name}
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
  </div>`;class l extends HTMLElement{constructor(){super()}connectedCallback(){this.innerHTML=a}}customElements.define("bracelet-component",l);
