const numbers = + prompt('Input Number');

let x1 = 0, x2 = 1, nextTerm;

for(i = 1; i <= numbers; i++) {
    nextTerm = x1 + x2;
    x1 = x2;
    x2 = nextTerm;

    if (x1 % 5 == 0) {
        console.log(x1);
        break;
    }
}
