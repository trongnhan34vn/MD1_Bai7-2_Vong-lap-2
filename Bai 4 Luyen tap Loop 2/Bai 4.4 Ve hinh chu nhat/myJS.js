// Input chiều dài, chiều cao:
// let length = + prompt('Nhập chiều dài');
// let width = + prompt('Nhập chiều rộng');
let length = 6;
let width = 5;
// Process: -Sử dụng DOM * để vẽ
// - 1 vòng lặp chạy từ 1 đến length (i).
// - 1 vòng lặp chạy từ 1 đến width (j)
// vẽ chiều dài
for(i = 1; i <= length; i++) {
        // vẽ chiều rộng
        for(j = 1; j <= width; j++) {
            if  (i == 1 || i == length || j == 1 || j == width) {
                document.write('* ')
            } else {
                document.write('\xa0\xa0\xa0')
            }
        }
        document.write('<br>');
}


