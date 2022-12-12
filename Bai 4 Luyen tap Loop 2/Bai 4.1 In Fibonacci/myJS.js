let count = 20;

let x1 = 0, x2 = 1, nextTemp;

for(i = 1; i <= 20; i++) {
    document.write(x1, '<br>');
    nextTemp = x1 + x2;
    x1 = x2;
    x2 = nextTemp;
}

