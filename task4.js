"use strict"

// Kauliukai

const n = +prompt("Enter quantity of players");

let win = 0;
let winner = 0;

for (let i = 1; i <= n; i++){
    let sum =0;
    const k = +prompt("Enter number of rolls");
    for (let j = 0; j < k; j++){
        let roll = +prompt("Enter points rolled");
        sum += roll;
    }

    if (sum > win){
        win = sum;
        winner = i;
    }
}
document.getElementById("content").innerHTML = `daugiausiai tasku surinko ${winner} zaidejas`;

