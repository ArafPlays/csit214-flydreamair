
flightDetailsObj = JSON.parse(localStorage.getItem("flightSearchDetails"))

console.log(flightDetailsObj)

document.getElementById("availableTitle").innerHTML = "Choose Your Return flight from " + flightDetailsObj["to"]+ " to " + flightDetailsObj["from"]


document.getElementById("returnDate").innerHTML = flightDetailsObj["return"];

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


/* Departure time, arrival time, flight number, duration and price is added to flight object depending on which flight is chosen */
const flight1Button = document.getElementById("flight1selected")
flight1Button.addEventListener("click",function(e){
  e.preventDefault()
  /* these values are hard coded from the UI because we don't have a database yet. 
  In the future, these values from be pulled in from a database of available flights */
  flightDetailsObj.returndepartTime = "8:30"
  flightDetailsObj.returnarriveTime = "17:30"
  flightDetailsObj.returnflightNumber = "FDA232"
  flightDetailsObj.returnduration = "7h 35m"
  flightDetailsObj.returnprice = 728

  localStorage.setItem("flightSearchDetails", JSON.stringify(flightDetailsObj))
    
  window.location.href="personal-details.html"
})

const flight2Button = document.getElementById("flight2selected")
flight2Button.addEventListener("click",function(e){
  e.preventDefault()
  /* these values are hard coded from the UI because we don't have a database yet. 
  In the future, these values from be pulled in from a database of available flights */
  flightDetailsObj.returndepartTime = "12:30"
  flightDetailsObj.returnarriveTime = "18:10"
  flightDetailsObj.returnflightNumber = "FDA162"
  flightDetailsObj.returnduration = "5h 35m"
  flightDetailsObj.returnprice = 927

  localStorage.setItem("flightSearchDetails", JSON.stringify(flightDetailsObj))
    
  window.location.href="personal-details.html"
})

const flight3Button = document.getElementById("flight3selected")
flight3Button.addEventListener("click",function(e){
  e.preventDefault()
  /* these values are hard coded from the UI because we don't have a database yet. 
  In the future, these values from be pulled in from a database of available flights */
  flightDetailsObj.returndepartTime = "14:20"
  flightDetailsObj.returnarriveTime = "22:10"
  flightDetailsObj.returnflightNumber = "FDA452"
  flightDetailsObj.returnduration = "4h 35m"
  flightDetailsObj.returnprice = 1300

  localStorage.setItem("flightSearchDetails", JSON.stringify(flightDetailsObj))
    
  window.location.href="personal-details.html"
})


