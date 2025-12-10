"use strict"

// Skaiciu dalyba

const start = +prompt("Enter sequence start number");
const end = +prompt("Enter sequence end number");

content.innerHTML += `Skaicius   Dalijasi is<br>`;
for (let a = start; a <= end; a++) {
    let sum = 0;
    for (let b = 2; b < a; b++) {
        if (a % b == 0) {
            sum++;
        }
    }
    content.innerHTML += `${a}  ${sum}<br>`;
}