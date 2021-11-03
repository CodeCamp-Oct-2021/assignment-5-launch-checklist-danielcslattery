
//const { validateInput, formSubmission, myFetch, pickPlanet, addDestinationInfo } = require("./scriptHelper");

window.addEventListener("load", function() {
    
    let launchForm = document.getElementById("launchForm");

    launchForm.addEventListener("submit", function(event){
        let pilot = document.querySelector("input[name=pilotName]");
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        let myList

        inputArray = [pilot, copilot, fuelLevel, cargoMass]; 

        if (inputArray.some(el => validateInput(el.value) === "Empty")){
            alert("Some fields are empty");
            event.preventDefault();
        } else if (validateInput(fuelLevel.value) === "Not a Number" || 
        validateInput(cargoMass.value) === "Not a Number"){
            alert("Fuel Level and Cargo Mass must be numbers");
            event.preventDefault();
        } else {
            formSubmission(document, myList, pilot.value, copilot.value, fuelLevel.value, cargoMass.value);
            event.preventDefault();
        }

    })


   let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let target = pickPlanet(listedPlanets);
       addDestinationInfo(document, target.name, target.diameter, target.star, target.distance, target.moons, target.image);
   })
   
});