

var winsDisplay = document.getElementById("wins");
var lossesDisplay = document.getElementById("losses");
var valuationDisplay = document.getElementById("valuation");
var valueSelectedDisplay = document.getElementById("valueSelected");

var randomValuation = Math.floor(Math.random() * (120 - 19));

// Diamond Set Valuation
valuationDisplay.textContent = "Crystal Collection is $" + randomValuation;
winsDisplay.textContent = "No Win yet";


var diamondValue1 = Math.ceil(Math.random() * (12 - 1));;
var diamondValueTotal1 = 0;
var collectedValue = 0;

var diamondValue2 = Math.ceil(Math.random() * (12 - 1));;
var diamondValueTotal2 = 0;

var diamondValue3 = Math.ceil(Math.random() * (12 - 1));;
var diamondValueTotal3 = 0;

var diamondValue4 = Math.ceil(Math.random() * (12 - 1));;
var diamondValueTotal4 = 0;


function master(button) {
    console.log(button);

    switch (button) {

        case "diamond1": diamondValueTotal1 += diamondValue1;
            break;
        case "diamond2": diamondValueTotal2 += diamondValue2;
            break;
        case "diamond3": diamondValueTotal3 += diamondValue3;
            break;
        case "diamond4": diamondValueTotal4 += diamondValue4;

    };

    var total = diamondValueTotal1 + diamondValueTotal2 + diamondValueTotal3 + diamondValueTotal4;

    valueSelectedDisplay.textContent = "Collected diamond value $" + total;

    if (total > randomValuation) {
        alert("You lost.");
    } if (total == randomValuation) {
        alert("You win.");
    };

};



