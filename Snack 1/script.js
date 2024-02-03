// chiedo all'utente di inserire due parole attraverso due prompt

let firstWord = prompt("Write one word");
let secondWord = prompt("Write another word");

console.log(firstWord);
console.log(secondWord);

if (firstWord.length >= secondWord.length) {
    document.getElementById("word-compare").innerHTML = secondWord + firstWord;
} else {
    document.getElementById("word-compare").innerHTML = firstWord + secondWord;
}