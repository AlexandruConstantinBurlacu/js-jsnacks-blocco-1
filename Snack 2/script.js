let number;
let sommaNumeri = 0;

for(let i = 0; i < 10; i++) {
    number = Number(prompt("Please insert number"));
    sommaNumeri += number;
    document.getElementById("somma-numeri").innerHTML = sommaNumeri;   
}