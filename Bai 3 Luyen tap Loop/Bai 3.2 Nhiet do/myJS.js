let inputTemp = + prompt('Nhập vào nhiệt độ');
console.log(inputTemp);

if(inputTemp > 100) {
    alert('Giảm nhiệt độ');
} else if(inputTemp < 20) {
    alert('Tăng nhiệt độ');
}
