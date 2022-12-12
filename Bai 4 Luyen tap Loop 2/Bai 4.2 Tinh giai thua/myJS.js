let number = + prompt('input number');

function factorial() {
    if (number < 0) {
        alert('Error');
    } else if (number === 0) {
        alert(number + 'has 1 factorial')
    } else {
        let result = 1;
        for(i = 1; i <= number; i++) {
            result = result * i;
        }
        document.write(result);
    }
}
factorial()