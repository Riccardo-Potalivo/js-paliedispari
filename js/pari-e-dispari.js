
let btn = document.querySelector('button')
let alert = document.querySelector('.alert')

btn.addEventListener('click',
function()
{
    //numero player preso dal value dell'input radio
    let numberPlayer = document.querySelector('input[name="number_player"]:checked').value;
    //even odd preso dal value dell'input radio
    let evenOddPlayer = document.querySelector('input[name="even_odd"]:checked').value;
    // numero random computer
    let numberComputer = getRndInteger(1,5);
    
    alert.classList.remove('bg-warning');
    
    console.log(`Player ${numberPlayer}`);
    console.log(`Computer ${numberComputer}`);
    console.log(parseInt(numberPlayer) + numberComputer);

    // let result = ((parseInt(numberPlayer) + numberComputer) % 2 === 0 && evenOddPlayer === 'even' || (parseInt(numberPlayer) + numberComputer) % 2 === 1 && evenOddPlayer === 'odd') ? 'Player win' : 'computer win';


    if((parseInt(numberPlayer) + numberComputer) % 2 === 0 && evenOddPlayer === 'even' || (parseInt(numberPlayer) + numberComputer) % 2 === 1 && evenOddPlayer === 'odd')
    {
        alert.innerText = 'Player win';
        alert.classList.add('bg-success');
        alert.classList.remove('bg-danger');
    }
    else
    {
        alert.innerText = 'Computer win';
        alert.classList.add('bg-danger');
        alert.classList.remove('bg-success');
    }
    
    // console.log(result);
});
