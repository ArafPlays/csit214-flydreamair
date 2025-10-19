
flightDetailsObj = JSON.parse(localStorage.getItem("flightSearchDetails"))

console.log(flightDetailsObj)

document.getElementById("availableTitle").innerHTML = "Departure flights from " + flightDetailsObj["from"]+ " to " + flightDetailsObj["to"]+":"


const departDate = document.getElementsByClassName("departDate");
for (let element of departDate) {
  element.innerHTML = flightDetailsObj["depart"];
}

const departLocationHTML = document.getElementsByClassName("departLocationHTML")
for (let element of departLocationHTML) {
  element.innerHTML = flightDetailsObj["from"];
}

const toLocationHTML = document.getElementsByClassName("toLocationHTML")
for (let element of toLocationHTML) {
  element.innerHTML = flightDetailsObj["to"];
}

const flightClassHTML = document.getElementsByClassName("flightClassHTML")
for (let element of flightClassHTML) {
  element.innerHTML = flightDetailsObj["fClass"];
}