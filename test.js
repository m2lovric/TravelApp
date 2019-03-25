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

let httpfl = new XMLHttpRequest();

httpfl.onreadystatechange = () => {
    if(httpfl.readyState == 4 && httpfl.status == 200){
        let data = JSON.parse(httpfl.response);
        console.log(data.data);
        console.log(data.data[0].flyFrom);
        console.log(data.data[0].flyTo);
    }
}

httpfl.open("GET","https://api.skypicker.com/flights?flyFrom=OSI&to=DUB&dateFrom=18/05/2019&dateTo=25/05/2019&partner=picky", true);
httpfl.send();

