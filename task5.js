"use strict"

// Beveik tobulieji skaiciai

function divideNumbers(x, y) {
    return x % y == 0;
}

function isInRange(z, number, s) {
    return number >= z - s && number <= z + s;
}

function isPerfect(dividersSum) {
    return dividersSum === 1;
}


const a = +prompt("Enter sequence start number");
const b = +prompt("Enter sequence end number");
const c = +prompt("Enter precision number");

let perfectCount = 0;

switch (a > b) {
    case true:
        content.innerHTML += `Netinkami reziai<br>`;
        break;
}

for (let i = a; i <= b; i++) {
    let sum = 0;
    let divider = 0;
    let perfect = 0;

    for (let k = 1; k < i; k++) {
        if (divideNumbers(i, k)) {
            sum += k;
            divider++;
            perfect++;
        }
    }
    if (isInRange(i, sum, c)) {
        if (i == sum){
            content.innerHTML += `${i}**; suma ${sum}; dalikliu skaicius ${divider}<br>`;
        } else {
        content.innerHTML += `${i}; suma ${sum}; dalikliu skaicius ${divider}<br>`;}
    }

    isPerfect(perfect) ? perfectCount++ : perfectCount;
}

content.innerHTML += `Pirminiu skaiciu kiekis intervale ${perfectCount}`;
