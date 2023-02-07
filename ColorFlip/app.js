const colors = ["#244653", "#249D8F", "#E9C46A", "#F4A261", "#E76F51"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
   //get random number between 0 - 3
    const randomNumber = getRandomNumber(); 
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);

}