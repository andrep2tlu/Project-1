<<<<<<< HEAD
const dateNowFormat = function(){
    let timeNow = new Date();
    let dayNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();
    const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
    
    return dayNow + "." + monthNamesET[monthNow] + " " + yearNow;
}

const timeNowFormat = function(){
    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let minutesNow = timeNow.getMinutes();
    let secondsNow = timeNow.getSeconds();
    let millisecondsNow = timeNow.getMilliseconds();

    return hoursNow + ":" + minutesNow + ":" + secondsNow + ":" + millisecondsNow
}

const partOfDay = function(){
    let dayPart = "idk, vaata õue või midagi";
    let hoursNow = new Date().getHours();

    if(0 >= hoursNow <=6 ){
        dayPart = "varahommik";
    }
    else if(7 >= hoursNow <= 12 ){
        dayPart = "hommik";
    }
    else if(13 >= hoursNow <= 17 ){
        dayPart = "lõuna";
    }
    else if(18 >= hoursNow <= 23 ){
        dayPart = "õhtu";
    }
}



=======
const dateNowFormat = function(){
    let timeNow = new Date();
    let dayNow = timeNow.getDate();
    let monthNow = timeNow.getMonth();
    let yearNow = timeNow.getFullYear();
    const monthNamesET = ["Jaanuar", "Veebruar", "Märts", "Aprill", "Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"]
    
    return dayNow + "." + monthNamesET[monthNow] + " " + yearNow;
}

const timeNowFormat = function(){
    let timeNow = new Date();
    let hoursNow = timeNow.getHours();
    let minutesNow = timeNow.getMinutes();
    let secondsNow = timeNow.getSeconds();
    let millisecondsNow = timeNow.getMilliseconds();

    return hoursNow + ":" + minutesNow + ":" + secondsNow + ":" + millisecondsNow
}

const partOfDay = function(){
    let dayPart = "idk, vaata õue või midagi";
    let hoursNow = new Date().getHours();

    if(0 >= hoursNow <=6 ){
        dayPart = "varahommik";
    }
    else if(7 >= hoursNow <= 12 ){
        dayPart = "hommik";
    }
    else if(13 >= hoursNow <= 17 ){
        dayPart = "lõuna";
    }
    else if(18 >= hoursNow <= 23 ){
        dayPart = "õhtu";
    }
}



>>>>>>> 2e244c5931fe061dc37a0490395c3c4ad58f1022
module.exports = {fullDate: dateNowFormat, timeET: timeNowFormat};