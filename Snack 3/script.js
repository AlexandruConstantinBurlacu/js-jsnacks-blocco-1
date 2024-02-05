const emptyArray = [];

for (let i = 0; i < 6; i++) {
    const number = Number(prompt("Insert number"));

    if(number % 2 != 0) {
        emptyArray.push(number);
    }
}

const listElement = document.querySelector("h1");

for (let i = 0; i < emptyArray.length; i++) {
    const newElement = document.createElement("h1");

    newElement.innerText = emptyArray[i];

    listElement.append(newElement);
}