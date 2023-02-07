const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `Topping liquorice dessert chocolate cake danish gummies danish chocolate bar. `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `Gummies jelly-o chocolate jelly-o apple pie. Caramels sweet cupcake pie gummies dragée cake lollipop. `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `Marshmallow gummi bears sugar plum apple pie topping cotton candy topping.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Croissant halvah tart chocolate cake jujubes halvah shortbread. Jujubes icing chocolate cake chocolate cake cupcake cupcake. `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `Topping jujubes chocolate bar cake fruitcake soufflé. `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `Candy canes chocolate bar sweet donut candy. Chocolate bar halvah cupcake brownie candy canes donut. `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `Biscuit caramels carrot cake ice cream bonbon. Chocolate cake muffin gummies halvah gingerbread candy cake.  `,
  },
  {
    id: 9,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `Biscuit caramels carrot cake ice cream bonbon. Chocolate cake muffin gummies halvah gingerbread candy cake.  `,
  },
];
const sectionCenter = document.querySelector(".section-center");
const container = document.querySelector(".btn-container");

//load items
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
let displayMenu = menuItems.map(function(item){

    return `<article class="menu-item">
                <img src=${item.img} class="photo" alt=${item.title} />
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">€${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`
    });
    displayMenu = displayMenu.join('');
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
const categories = menu.reduce(function(values, item) {
    if (!values.includes(item.category)) {
        values.push(item.category);
    }
    return values
  },['all']);
  const categoryBtn = categories.map(function(category) {
    return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
  }).join('');
  container.innerHTML = categoryBtn;

  const filterBtns = document.querySelectorAll(".filter-btn");

  //filter items
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
            console.log(menuItem.category);
            if(menuItem.category === category) {
                return menuItem;
            }
        });
        if(category === "all") {
            displayMenuItems(menu);
        } else {
            displayMenuItems(menuCategory);    
        }
    });
});
}