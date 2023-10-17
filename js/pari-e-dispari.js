
let btn = document.querySelector('button')

btn.addEventListener('click',
function()
{
    //numero player preso dal value dell'input radio
    let numberPlayer = document.querySelector('input[name="number_player"]:checked').value;
    //even odd preso dal value dell'input radio
    let evenOddPlayer = document.querySelector('input[name="even_odd"]:checked').value;
    // numero random computer
    let numberComputer = getRndInteger(1,5);

    console.log(`Player ${numberPlayer}`);
    console.log(`Computer ${numberComputer}`);
    console.log(parseInt(numberPlayer) + numberComputer);

    let result = ((parseInt(numberPlayer) + numberComputer) % 2 === 0 && evenOddPlayer === 'even') ? 'Player win' : 'computer win';
    
    console.log(result);
});
