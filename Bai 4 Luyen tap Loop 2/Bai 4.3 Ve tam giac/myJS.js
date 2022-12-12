let length = 5;
let width = 5;

for(i = 1; i <= length; i++) {
    for(j = 1; j <= width; j ++) {
        if(i <= j) {
            document.write('*');
        }
    }
    document.write('<br>');
}

for(i = length; i >= 1; i--) {
    for(j = length; j >= 1; j--) {
        if(i <= j) {
            document.write('*');
        }
    }
    document.write('<br>');
}
