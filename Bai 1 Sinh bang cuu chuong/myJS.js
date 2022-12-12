let sout;

sout = "<table border='1'; width='500px'; cellspacing='0'; cellpadding='3'; style='margin: auto';>"

for(let i = 1; i <= 10; i++) {
    sout = sout + '<tr>'
    for(let j = 2; j <= 10; j++) {
        let k = i * j;
        sout = sout + '<td>' + `${j}` + 'x' + `${i}` + '=' + `${k}` + '</td>'
    }
    sout = sout +'</tr>';
}
document.write(sout)