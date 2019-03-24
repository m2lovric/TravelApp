document.querySelector('#locationFrom').addEventListener('input', event => {
    event.preventDefault();
    let 
    locationInput = document.querySelector("#location").value;
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



