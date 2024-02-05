const number = prompt("Insert number");

for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
}

document.getElementById("somma").innerHTML = sum;

