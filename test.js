let locationInput;

document.querySelector('#locationFrom').addEventListener('input', event => {
    event.preventDefault();
    locationInput = document.querySelector("#locationFrom").value;
    console.log(locationInput);

    let http = new XMLHttpRequest();

    http.onreadystatechange = function(){
        if(http.readyState == 4 && http.status == 200){
            console.log(JSON.parse(http.response));
        }
    }

    http.open("GET", "https://api.skypicker.com/locations?term="+ locationInput +"&locale=en-US&location_types=airport&limit=10&active_only=true&sort=name", true);
    http.send();
});

const flyDur = document.querySelector("#duration");
const fromLocation = document.querySelector("#from");
const toLocation = document.querySelector("#to");

let httpfl = new XMLHttpRequest();
let dTime;
let flyDuration;
httpfl.onreadystatechange = () => {
    if(httpfl.readyState == 4 && httpfl.status == 200){
        let data = JSON.parse(httpfl.response);
        console.log(data.data);
        console.log(data.data[0].flyFrom);
        console.log(data.data[0].flyTo);
        let dTime = data.data[0].dTimeUTC;
        convertTime(dTime);
        flyDur.innerHTML = data.data[0].fly_duration;
        fromLocation.innerHTML = data.data[0].cityFrom;
        toLocation.innerHTML = data.data[0].cityTo;
    }
}

httpfl.open("GET","https://api.skypicker.com/flights?flyFrom=ZAG&to=MUC&dateFrom=11/04/2019&dateTo=15/04/2019&curr=hrk&sort=date&adults=1&max_stopovers=0", true);
httpfl.send();


//epoch to date
let dtimeR;
const timeP = document.querySelector("#time");
convertTime = (dTime) => {
    dtimeR = new Date(0);
    dtimeR.setUTCSeconds(dTime);
    timeP.innerHTML = dtimeR;
}


