var amountDue = 0;
var amountReceived = 0;
var changeAmount;
var dollars = 100;
var quarters = 25;
var dimes = 10;
var nickels = 5;
var pennies = 1;
var dollarsDue = 0;
var quartersDue = 0;
var dimesDue = 0;
var nickelsDue = 0;
var penniesDue = 0;

$(document).ready(function() {
    $("#calculate-change").click(handleClickEvent)
})
function handleClickEvent() {
    calculateChangeDue();
}

function calculateChangeDue() {
    var amountDue = (document.getElementById("amount-due").value);
    console.log(amountDue);
    var amountReceived = (document.getElementById("amount-received").value);
    console.log(amountReceived);
    
    changeAmountTest = (amountReceived*100) - (amountDue*100);
    changeAmount = changeAmountTest.toFixed(0);
    console.log(changeAmount);
    document.getElementById("total-output").innerHTML = "The total change due is $" + changeAmount/100 + ".";

    if (changeAmount >= 100) {
        dollarsDue = Math.floor(changeAmount/dollars);
        console.log(dollarsDue);
        remaining = changeAmount % dollars;
        console.log(remaining);
        changeAmount = remaining;
        console.log(changeAmount);
        document.getElementById("dollars-output").innerHTML = dollarsDue;
    }
    if (25<=changeAmount<100) {
        quartersDue = Math.floor(changeAmount/quarters);
        console.log(quartersDue);
        remaining = changeAmount % quarters;
        console.log(remaining);
        changeAmount = remaining;
        console.log(changeAmount);
        document.getElementById("quarters-output").innerHTML = quartersDue;
    }
    if (10<=changeAmount<25) {
        dimesDue = Math.floor(changeAmount / dimes);
        console.log(dimesDue);
        remaining = changeAmount % dimes;
        console.log(remaining);
        changeAmount = remaining;
        console.log(changeAmount);
        document.getElementById("dimes-output").innerHTML = dimesDue;
    }
    if (5<=changeAmount<10) {
        nickelsDue = Math.floor(changeAmount / nickels);
        console.log(nickelsDue);
        remaining = changeAmount % nickels;
        console.log(remaining);
        changeAmount = remaining;
        console.log(changeAmount);
        document.getElementById("nickels-output").innerHTML = nickelsDue;

    }
    if (1<=changeAmount<5) {
        penniesDue = Math.floor(changeAmount / pennies);
        console.log(penniesDue);
        document.getElementById("pennies-output").innerHTML = penniesDue;
    }
}    


