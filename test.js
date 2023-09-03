let bracelet = [{
    "name": "Gold Bracelet 1",
    "weight": 2,
    "imageFileLocation": "img/bracelet/bracelet1.jpg"
},
{
    "name": "Gold Bracelet 2",
    "weight": 3,
    "imageFileLocation": "img/bracelet/bracelet2.jpg"
},
{
    "name": "Gold Bracelet 3",
    "weight": 4,
    "imageFileLocation": "img/bracelet/bracelet3.jpg"
},
{
    "name": "Gold Bracelet 4",
    "weight": 5,
    "imageFileLocation": "img/bracelet/bracelet4.jpg"
},
{
    "name": "Gold Bracelet 5",
    "weight": 6,
    "imageFileLocation": "img/bracelet/bracelet5.jpg"
},
{
    "name": "Gold Bracelet 6",
    "weight": 7,
    "imageFileLocation": "img/bracelet/bracelet6.jpg"
}]

let templateString = '';

for (let i = 0; i < bracelet.length; i += 1)
{
    templateString += `    <div
    class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow drop-shadow-2xl dark:bg-gray-700 md:m-20">
    <div class="cursor-pointer object-cover transition duration-500 hover:scale-110">
        <img class="rounded-t-lg p-4" src="${bracelet[i].imageFileLocation}" alt="product image" />
    </div>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
                ${bracelet[i].name}
            </h5>
        </a>
    
        <div class="flex items-center justify-between">
            <span class="text-xl font-bold text-gray-900 dark:text-white">Weight : ${bracelet[i].weight} grams (Approx)</span>
            <a href="tel:+919434000984"
                class="rounded-lg bg-blue-700 px-5 py-2.5 text-center font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact</a>
        </div>
    </div>
    </div>`
}
console.log(templateString);

