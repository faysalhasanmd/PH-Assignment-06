const cardContainer = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allCard(data.plants);
    });
};

const allCard = (values) => {
  values.forEach((value) => {
    // console.log(value.name, value.price);
    const cardItems = document.getElementById("card-container");
    // cardItems.innerHTML = "";
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="bg-white rounded-[10px] p-2 h-[100%] hover:bg-gray-100 transition duration-700">
            <div
              class="flex w-[100%] m-auto bg-gray-300 h-[180px] rounded-[10px]"
            ><img class="w-full h-full object-cover rounded-[7px]" src="${value.image}" alt="" /></div>
            <h1 class="text-[20px] font-semibold mb-2 mt-1">${value.name}</h1>
            <p class="text-gray-400">
              ${value.description}
            </p>
            <div class="flex items-center justify-between mb-2 ">
              <h1 class="bg-[#f0fdf4] w-[130px] p-2 m-1.5 text-center rounded-full">${value.category}</h1>
              <h1 class="font-semibold">৳ ${value.price}</h1>
            </div>
            <button
              class="bg-green-700 text-white w-[100%] rounded-full flex justify-center m-auto p-1.5 hover:bg-green-800 "
            >
              Add to your cart
            </button>
          </div>
    `;
    cardItems.appendChild(div);
  });
};
// call main func
cardContainer();
