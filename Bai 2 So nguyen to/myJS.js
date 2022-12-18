
function onScreen() {
    // input: số lượng số nguyên tố cần in: 20
    let numbers = + document.getElementById('numbersInput').value;
    let count = 0;
    let N = 2;
    let isPrime = true;
    let arr = [];
    while (count < numbers) {
        // Kiểm tra số nguyên tố
        for (let i = 2; i < N; i++) {
            if(N % i == 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if(isPrime) {
            console.log(N);
            arr.push(N);
            console.log(arr)
            count++;
        }
        N++;
    }
    document.getElementById('result').innerHTML = arr;
}




