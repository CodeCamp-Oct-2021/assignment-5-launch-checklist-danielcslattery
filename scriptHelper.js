// Write your helper functions here!
require('isomorphic-fetch');

function validateInput(testInput) {

    if (testInput === ""){
        return "Empty";
    } else if (!isNaN(Number(testInput))) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");

    missionTarget.innerHTML = 
        `<h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">`;
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let launchStatus = document.getElementById("launchStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    //Reset html
    launchStatus.style.color = "rgb(65, 159, 106)";
    launchStatus.innerHTML = "Shuttle is Ready for Launch";
    fuelStatus.innerHTML = "Fuel level high enough for launch";
    cargoStatus.innerHTML = "Cargo mass low enough for launch";

    if (fuelLevel < 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
    }

    if (cargoLevel > 10000){
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
        list.style.visibility = "visible";
    }

    if (fuelLevel >= 10000 && cargoLevel <= 10000){
        list.style.visibility = "visible";
        // launchStatus.style.color = "rgb(65, 159, 106)";
        // launchStatus.innerHTML = "Shuttle is Ready for Launch";
        // fuelStatus.innerHTML = "Fuel level high enough for launch";
        // cargoStatus.innerHTML = "Cargo mass low enough for launch";
    }

}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
