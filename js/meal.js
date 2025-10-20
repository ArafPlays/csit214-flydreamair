/* Add meal preference to local storage inside flight object for future access. */
chosenFlightObj = JSON.parse(localStorage.getItem("flightSearchDetails"))

document.getElementById("defaultChosen").addEventListener("click",function(e){
    e.preventDefault()
    
    chosenFlightObj.meal = "No Preference"
    localStorage.setItem("flightSearchDetails", JSON.stringify(chosenFlightObj))

    window.location.href="payment.html"
})

document.getElementById("halalChosen").addEventListener("click",function(e){
    e.preventDefault()

    chosenFlightObj.meal = "Halal"
    localStorage.setItem("flightSearchDetails", JSON.stringify(chosenFlightObj))

    window.location.href="payment.html"
})


document.getElementById("kosherChosen").addEventListener("click",function(e){
    e.preventDefault()

    chosenFlightObj.meal = "Kosher"
    localStorage.setItem("flightSearchDetails", JSON.stringify(chosenFlightObj))

    window.location.href="payment.html"
})

document.getElementById("vegChosen").addEventListener("click",function(e){
    e.preventDefault()

    chosenFlightObj.meal = "Vegetarian"
    localStorage.setItem("flightSearchDetails", JSON.stringify(chosenFlightObj))

    window.location.href="payment.html"
})