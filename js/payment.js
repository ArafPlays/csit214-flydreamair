chosenFlightObj = JSON.parse(localStorage.getItem("flightSearchDetails"))
console.log(chosenFlightObj)

/* adding departure flight values */
document.getElementById("flightFrom").innerHTML = chosenFlightObj["from"]
document.getElementById("flightTo").innerHTML = chosenFlightObj["to"]
document.getElementById("flightNumber").innerHTML = chosenFlightObj["flightNumber"]
document.getElementById("departDay").innerHTML = chosenFlightObj["depart"]
document.getElementById("departTime").innerHTML = chosenFlightObj["departTime"]
document.getElementById("arrivalTime").innerHTML = chosenFlightObj["arriveTime"]
document.getElementById("flightClass").innerHTML = chosenFlightObj["fClass"]
document.getElementById("flightCost").innerHTML = chosenFlightObj["price"]
document.getElementById("mealChosen").innerHTML = chosenFlightObj["meal"]
/* getting chosen seat value from local storage*/
document.getElementById("seatChosen").innerHTML = localStorage.getItem("chosenSeat")


/* adding return flight values only if return flight exists */
if(chosenFlightObj["return"] != ""){
    
    document.getElementById("returnflightFrom").innerHTML = chosenFlightObj["to"]
    document.getElementById("returnflightTo").innerHTML = chosenFlightObj["from"]
    document.getElementById("returnflightNumber").innerHTML = chosenFlightObj["returnflightNumber"]
    document.getElementById("returnDay").innerHTML = chosenFlightObj["return"]
    document.getElementById("returndepartTime").innerHTML = chosenFlightObj["returndepartTime"]
    document.getElementById("returnarrivalTime").innerHTML = chosenFlightObj["returnarriveTime"]
    document.getElementById("returnflightClass").innerHTML = chosenFlightObj["fClass"]
    document.getElementById("returnflightCost").innerHTML = chosenFlightObj["returnprice"]

    document.getElementById("returnmealChosen").innerHTML = chosenFlightObj["meal"]
    document.getElementById("totalDue").innerHTML = chosenFlightObj["price"]+chosenFlightObj["returnprice"]
    document.getElementById("returnseatChosen").innerHTML = localStorage.getItem("chosenSeat")
    document.getElementById("totalDue").innerHTML = chosenFlightObj["price"] + chosenFlightObj["returnprice"]
} else {
    document.getElementById("returnFlightDetails").innerHTML =""
    document.getElementById("totalDue").innerHTML = chosenFlightObj["price"]
}




/* getting personal details from local storage and adding it to passenger summary section */
personDetailsObj = JSON.parse(localStorage.getItem("personalDetails"))
console.log(personDetailsObj)

document.getElementById("passengerTitle").innerHTML = personDetailsObj["title"]
document.getElementById("passengerFirstName").innerHTML = personDetailsObj["fname"]
document.getElementById("passengerLastName").innerHTML = personDetailsObj["lname"]
document.getElementById("passengerPhone").innerHTML = personDetailsObj["phoneNumber"]
document.getElementById("passengerEmail").innerHTML = personDetailsObj["contactEmail"]


document.getElementById("paymentForm").addEventListener("submit",function(e){
    e.preventDefault()
    window.location.href="confirmed.html"
})