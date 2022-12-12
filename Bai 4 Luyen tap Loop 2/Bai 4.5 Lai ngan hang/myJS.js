

function calcInterest() {
    let amount = + document.getElementById('amount').value;
    let interest = + document.getElementById('interest').value / 100;
    let time = + document.getElementById('time').value;
    let interestPerMonth = interest / 12;
    let totalInterest = amount * interestPerMonth * time;
    let total = totalInterest + amount;
    document.getElementById('totalInterest').innerHTML = totalInterest;
    document.getElementById('total').innerHTML = total;
}
