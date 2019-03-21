const destinations = ['#tokyo', '#prague', 'iceland']
showPrague = () => {
    document.querySelector("#tokyo").style.display = "none";
    document.querySelector("#prague").style.display = "block";
    console.log("triggered");
}

showTokyo = () => {
    document.querySelector("#prague").style.display = "none";
    document.querySelector("#tokyo").style.display = "block";
    
    console.log("triggered")
}