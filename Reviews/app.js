const reviews = [
  {
    id: 1,
    name: 'Ginny Weasley',
    job: 'web developer',
    img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
    text: "Dessert gingerbread chocolate marshmallow dragée. Sweet carrot cake powder pudding topping pie danish. Bear claw marzipan tart wafer marshmallow topping cake fruitcake.",
  },
  {
    id: 2,
    name: 'Hermione Granger',
    job: 'web designer',
    img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
    text: 'Dragée macaroon caramels chocolate cake cotton candy. Sesame snaps toffee danish caramels lollipop biscuit chupa chups. Jujubes marshmallow lollipop croissant macaroon.',
  },
  {
    id: 3,
    name: 'Ron Weasley',
    job: 'intern',
    img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
    text: 'Liquorice marshmallow muffin tiramisu marshmallow lemon drops. Toffee chocolate oat cake powder jelly beans cookie pudding. Donut marzipan croissant topping caramels.',
  },
  {
    id: 4,
    name: 'Harry Potter',
    job: 'the boss',
    img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
    text: 'Carrot cake toffee ice cream cake pastry candy canes. Chocolate chocolate candy canes halvah liquorice tootsie roll sesame snaps danish. ',
  },
];

//select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function() {
    showPerson(currentItem);
});

//show person based on item
function showPerson(person)  {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}
//show next person
nextBtn.addEventListener('click', function() {
    currentItem ++;
    if (currentItem > reviews.length - 1) {//reflects last item of array
        currentItem = 0;
    }    
        showPerson(currentItem);
});
//show previous person
prevBtn.addEventListener('click', function() {
    currentItem --;
    if (currentItem < 0) {//reflects last item of array
        currentItem = reviews.length - 1;
    }    
        showPerson(currentItem);
});

//show random person
randomBtn.addEventListener('click', function() {
    currentItem = Math.floor(Math.random() * reviews.length) 
        showPerson(currentItem);
});
