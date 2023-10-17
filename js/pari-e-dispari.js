
let numberPlayer = 2;
let evenOddPlayer = 'even';
console.log(`Player ${numberPlayer}`)
// numero random computer
let numberComputer = getRndInteger(1,5);
console.log(`Computer ${numberComputer}`)

let result = ((numberPlayer += numberComputer) % 2 === 0 && evenOddPlayer === 'even') ? 'Player win' : 'computer win';

console.log(result)
