"use strict"

// uzdaviniu sprendimo varzybos

const n = +prompt("Enter number of students who participated");
content.innerHTML += `Dalyvavo ${n} moksleiviai.<br>`;
let sum = 0;
for (let i = 1; i <= n; i++) {
    let student = 0;
    const d = +prompt("Enter number of days the student participated");
    for (let k = 1; k <= d; k++) {
        const task = +prompt("Enter number of solved tasks");
        student += task;
    }
    sum += student;
    content.innerHTML += `${i} moksleivis dirbo ${d} dienas ir issprende ${student} uzdaviniu<br>`;
}
content.innerHTML += `Visi moksleiviai issprende ${sum} uzdaviniu`;