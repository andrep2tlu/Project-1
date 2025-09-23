const { time } = require("console");
const { getRandomValues } = require("crypto");
const { isDate } = require("util/types");

const firstName = "Andre";
const lastName = "Priks";

function randomNumber()
{
   let rand = Math.round(Math.random()*10);
   return rand;
}

function tellName()
{
    console.log(firstName + "\n" + lastName);
}

function dateNowFormat(){
    const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
    const weekNamesET = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"]
    
    return weekNamesET[new Date().getDay()] + " " + new Date().getDate() + "." + monthNamesET[new Date().getMonth()] + " " + new Date().getFullYear();
}

function timeNowFormat(){
    return new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + ":" + new Date().getMilliseconds();
}

tellName();
console.log("\nRandom number "+ randomNumber());
console.log(dateNowFormat());
console.log(timeNowFormat());
 


