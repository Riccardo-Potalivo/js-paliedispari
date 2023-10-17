
const inputEl = document.getElementById('word');
const btn = document.querySelector('button');

btn.addEventListener('click',
function()
{
    let word = inputEl.value;
    let reverse = '';
    for(let i = word.length - 1; i >= 0; i--)
    {
        console.log(word[i]);
        reverse += word[i];
    }
    console.log(word)
    console.log(reverse)
    let result = (word === reverse) ? 'palindromo' : 'non palindromo';
    console.log(result) 
});

//generare ordine inverso della stringa