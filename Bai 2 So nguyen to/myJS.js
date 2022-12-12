let N = 2;
let count = 0;
let numbers = + document.getElementById('numbersInput').value;
let isPrime = 1;
let result = document.getElementById('result');


for (i = 2; i < (N - 1); i++) {
    console.log(N);
    if(N % i == 0) {
        isPrime = 0;
        console.log(isPrime);
        break;
    }
    console.log(N);
}
