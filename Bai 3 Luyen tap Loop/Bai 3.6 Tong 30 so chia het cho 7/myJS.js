function getSum() {
    let count = 0;
    let x1 = 0;
    let sum = 0;
    while (count <= 30) {
        x1++;
        if (x1 % 7 === 0) {
            sum += x1;
            count++;
            console.log(x1)
        }
    }
    console.log(sum);
}

getSum()


// function Sum30_chia7() {
//     count = 0;
//     n1 = 0;
//     let SUM = 0;
//     while (count <= 30){
//         n1++
//         if (n1 % 7 === 0){
//             SUM = SUM + n1;
//             count++;
//             console.log(n1)
//         }
//     }
//     console.log()(SUM);
// }
//
// Sum30_chia7()
