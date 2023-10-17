
const inputEl = document.getElementById('word');
const btn = document.querySelector('button');

btn.addEventListener('click',
function()
{
    console.log(inputEl.value);

});

//generare ordine inverso della stringa
let word = 'ciao';
let reverse = '';
for(let i = word.length - 1; i >= 0; i--)
{
    console.log(word[i])
}