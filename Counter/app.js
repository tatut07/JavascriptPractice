let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');


//callback function == we access the 3 btns
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count --;
        } else if (styles.contains('increase')) {
            count ++;
        } else {
            count = 0;
        }
        // if(count > 0) {
        //     value.style.color = 'green';
        // } else if (count < 0) {
        //     value.style.color = 'red';
        // } else {
        //     value.style.color ='black';
        // }
        //change text content on that SPAN
        value.textContent = count;
    })
})