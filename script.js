let allPlants = [];
let cartItems = [];
let total = 0;

const cardContainer = () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      allPlants = data.plants;
      dynamicCard(allPlants);
    });
};

const dynamicCard = (values) => {
  const cardItems = document.getElementById("card-container");
  cardItems.innerHTML = "";
  values.forEach((value) => {
    // console.log(value.name, value.price);
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
              <h1 class="font-semibold"> ৳${value.price}</h1>
            </div>
            <button
              class="bg-green-700 text-white w-[100%] mt-auto rounded-full flex justify-center m-auto p-1.5 hover:bg-green-800 add-to-cart"
              data-name="${value.name}"
              data-price="${value.price}"
            >
              Add to your cart
            </button>
          </div>
    `;
    cardItems.appendChild(div);
  });

  const buttons = document.getElementsByClassName("add-to-cart");
  for (const btn of buttons) {
    btn.addEventListener("click", (e) => {
      const name = e.currentTarget.getAttribute("data-name");
      const price = parseInt(e.currentTarget.getAttribute("data-price"));

      let countItems = cartItems.find((item) => item.name === name);
      if (countItems) {
        countItems.count += 1;
        total += price;
      } else {
        cartItems.push({ name, price, count: 1 });
        total += price;
      }
      historyCont();
    });
  }
};

const historyCont = () => {
  const historyContainer = document.getElementById("history-parent");
  historyContainer.innerHTML = `
  <button class="text-[20px] font-semibold border-amber-600 m-2">
            Your Cart
          </button>
  `;

  cartItems.forEach((items, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <div
            class="bg-[#cff0dc] w-[90%] m-auto p-2 rounded-[10px] flex justify-between mb-1.5"
          >
            <div>
              <h1 class="text-[12px]">${items.name}</h1>
              
              <h1 class="text-[12px]"><span class="text-[18px]">৳</span>${items.price} x ${items.count}</h1>
            </div>
            <div><p class="h-[10px] cursor-default">❌</p></div>
          </div>
    `;
    div.querySelector("p").addEventListener("click", () => {
      if (items.count > 1) {
        items.count -= 1;
        total -= items.price;
      } else {
        total -= items.price;
        cartItems.splice(index, 1);
      }
      historyCont();
    });

    historyContainer.appendChild(div);
  });

  const totalAmount = document.createElement("div");
  totalAmount.className = "font-semibold text-right mr-4";
  totalAmount.innerHTML = `
    Total = ${total}
    `;
  historyContainer.appendChild(totalAmount);
};

const filteringCard = (category) => {
  if (category === "all") {
    dynamicCard(allPlants);
  } else {
    const filerCard = allPlants.filter((plant) => plant.category === category);
    dynamicCard(filerCard);
  }
};
// call main func
cardContainer();
