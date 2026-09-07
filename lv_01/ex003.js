//FizzBuzz — From 1 to 100: multiples of 3 print "Fizz", multiples of 5 print "Buzz", multiples of both print "FizzBuzz".

for(let i = 1; i <= 100; i++){

    if(i % 3 === 0 && i % 5 === 0) {
        console.log(i + " FizzBuzz");

    }else if (i % 3 === 0) { 
        console.log(i + " Fizz");

    }else if(i % 5 === 0) {
        console.log(i + " Buzz");
    }
}