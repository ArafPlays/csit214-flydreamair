// Retrieve stored flight search details from localStorage and parse it back into an object
flightDetailsObj = JSON.parse(localStorage.getItem("flightSearchDetails"))

console.log(flightDetailsObj)

// Update the main title to show the selected route
document.getElementById("availableTitle").innerHTML = "Departure flights from " + flightDetailsObj["from"]+ " to " + flightDetailsObj["to"]

// Using loops to populate details from the previous booking form
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


/* Departure time, arrival time, flight number, duration and price is added to flight object depending on which flight is chosen */
const flight1Button = document.getElementById("flight1selected")
flight1Button.addEventListener("click",function(e){
  e.preventDefault()
  /* these values are hard coded from the UI because we don't have a database yet. 
  In the future, these values from be pulled in from a database of available flights */
  flightDetailsObj.departTime = "8:30"
  flightDetailsObj.arriveTime = "17:30"
  flightDetailsObj.flightNumber = "FDA232"
  flightDetailsObj.duration = "7h 35m"
  flightDetailsObj.price = 728

  // flight details are stored to LocalStorage for later access
  localStorage.setItem("flightSearchDetails", JSON.stringify(flightDetailsObj))
    
  // if a return date is chosen in the previous booking form, we go to the return flight selection page
  // if return date is kept empty on the form, we go straight to filling in user personal details.
  if(flightDetailsObj["return"] != ""){
    window.location.href="return-available-flights.html"
  } else {
    window.location.href="personal-details.html"
  }
})

const flight2Button = document.getElementById("flight2selected")
flight2Button.addEventListener("click",function(e){
  e.preventDefault()
  /* these values are hard coded from the UI because we don't have a database yet. 
  In the future, these values from be pulled in from a database of available flights */
  flightDetailsObj.departTime = "12:30"
  flightDetailsObj.arriveTime = "18:10"
  flightDetailsObj.flightNumber = "FDA162"
  flightDetailsObj.duration = "5h 35m"
  flightDetailsObj.price = 927

  // flight details are stored to LocalStorage for later access
  localStorage.setItem("flightSearchDetails", JSON.stringify(flightDetailsObj))
    
  // if a return date is chosen in the previous booking form, we go to the return flight selection page
  // if return date is kept empty on the form, we go straight to filling in user personal details.
  if(flightDetailsObj["return"] != ""){
    window.location.href="return-available-flights.html"
  } else {
    window.location.href="personal-details.html"
  }
})

const flight3Button = document.getElementById("flight3selected")
flight3Button.addEventListener("click",function(e){
  e.preventDefault()
  /* these values are hard coded from the UI because we don't have a database yet. 
  In the future, these values from be pulled in from a database of available flights */
  flightDetailsObj.departTime = "14:20"
  flightDetailsObj.arriveTime = "22:10"
  flightDetailsObj.flightNumber = "FDA452"
  flightDetailsObj.duration = "4h 35m"
  flightDetailsObj.price = 1300

  // flight details are stored to LocalStorage for later access
  localStorage.setItem("flightSearchDetails", JSON.stringify(flightDetailsObj))
  
  // if a return date is chosen in the previous booking form, we go to the return flight selection page
  // if return date is kept empty on the form, we go straight to filling in user personal details.
  if(flightDetailsObj["return"] != ""){
    window.location.href="return-available-flights.html"
  } else {
    window.location.href="personal-details.html"
  }
})


