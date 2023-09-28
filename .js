let quote = document.querySelector('.quote');  // Fix the typo here
let person = document.querySelector('.person');
let btn = document.querySelector('#new-quote');

const quotes = [{
    quote: `"i am the best."`,
    person: `shobit`
}, {
    quote: `"i am the hero."`,
    person: `shobit`
}, {
    quote: `"i am the king."`,  // Fix the typo here
    person: `abhishek`
}];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);  // Fix the case here

    quote.innerText = quotes[random].quote;  // Fix the case here
    person.innerText = quotes[random].person;  // Fix the case here
});
