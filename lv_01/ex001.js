//Even or Odd — Given a number, say whether it is even or Odd.

let number = 8;

function EvenOdd(number){
    let result = number % 2 === 0 ? "Even" : "Odd";
    return result;
}

console.log(EvenOdd(number))