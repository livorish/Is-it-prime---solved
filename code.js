// Check if a number is prime or not

//1. Prompt the user to input a whole number

//2. if the user does not provide a whole number, keep prompting the user to input a valid number until they provide one

//3. if the provided number is prime: Print the number is prime

//4. Otherwise print the number is not prime and print its smallest positive divisor other than 1.

(function isPrimeFunction() {

    this.init = function () {
        this.checkNumber();
    }; 

    this.checkNumber = function (num) {
        do{
            num = prompt('input whole humber');
            num = parseInt(num);
            isPrime(num);
        }while (!Number.isInteger(num));
        //
    };

    this.isPrime = function(number) {
        
            var i = 2;

            while ((i * i <= number) && (number % i != 0)) {
                i+=1;
                var a = i * i > number; 
            };
            if (a) {
                console.log(number + ' is a prime number.');
            } else {
                console.log(number + ' is not a prime number.');
                if (number % i == 0) {
                    console.log('It can be divide by ' + i);
                };
                
            };
    };

    this.init();

})();


//solved


// function sum2(myFunction, myArray) {
//     var sum = 0;
//     for (var i = 0; i < myArray.length; i++) {
//         sum += myFunction(myArray[i]);  
//      }
//     return sum;
// }
// operation = sum2 (function (x) {
//     return x + 2;
// }, [1,2,3]); 
// console.log(operation);



// function summing(n) {
//     if (n == 1) {
//         return 1
//     } else {
//         return n + summing(n-1) //  4 + 3 + 2 + 1
//     }
// }

// console.log(summing(4));
