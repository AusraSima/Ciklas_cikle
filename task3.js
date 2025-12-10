"use strict"

// Automobiliu lenktynes

const n = +prompt("Enter number of racers");

let consumption = 1000;
let racer = 0;

for (let i = 1; i <= n; i++) {
    let sum = 0;

    const loop = +prompt("Enter number of loops");
    for (let k = 1; k <= loop; k++) {
        const fuel = +prompt("Enter number consumption of fuel per loop");
        sum += fuel;
    }
    if (sum < consumption) {
        consumption = sum;
        racer = i;
    }

}
document.getElementById("content").innerHTML = `Maziausiai degalu sunaudojo ${racer} lenktynininkas`;