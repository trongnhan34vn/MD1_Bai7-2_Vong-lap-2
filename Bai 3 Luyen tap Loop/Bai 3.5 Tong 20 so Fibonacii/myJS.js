function getSum() {
    const numbers = 20;
    let sum = 0;
    let x1 = 0, x2 = 1, nextTerms;
    for(i = 1; i <= numbers; i++) {
        console.log(x1);
        nextTerms = x1 + x2;
        x1 = x2;
        x2 = nextTerms;
        sum += x1;
    }
    console.log(sum)
}

getSum();

