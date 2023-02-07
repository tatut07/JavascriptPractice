const questions = document.querySelectorAll('.question');

//question and item are the same thing//
questions.forEach(function(question){
    const btn = question.querySelector('.question-btn');
    btn.addEventListener('click', function(){
        questions.forEach(function (item) {
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });
        question.classList.toggle('show-text');
    });
 });



//Transversing the DOM//

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;

//         if()
//         question.classList.toggle('show-text');
//     })
// })