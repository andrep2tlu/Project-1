const fs = require ("fs");
const textRef = "txt/vanasonad.txt";
const dateET = require ("./class_3_1.js");

function pickOneSentence(rawText) {
    let wordList = rawText.split(";");
    let wordCount = wordList.length;
    let wordDay = wordList[Math.round(Math.random() * (wordCount - 1))];
    console.log(wordDay);

}

function readTxtFile() {
    fs.readFile(textRef, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
           // console.log(data);
           pickOneSentence(data);
        }

    });

}

console.log("Täna on " + dateET.fullDate() + " aeg on: " + dateET.timeET());
console.log("Tänane vanasõna on: ")
readTxtFile();