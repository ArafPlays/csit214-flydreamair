const searchForm = document.getElementById("searchForm")


searchForm.addEventListener("submit",function(e){
    e.preventDefault()
    
    const locationFrom = document.getElementById("locationFrom").value
    const locationTo = document.getElementById("locationTo").value
    const departDate = document.getElementById("departDate").value
    const returnDate = document.getElementById("returnDate").value
    const flightClass = document.getElementById("flightClass").value


    localStorage.setItem("flightSearchDetails", JSON.stringify({"from":locationFrom,"to":locationTo,"depart":departDate,"return":returnDate,"fClass":flightClass}))
    
    window.location.href="available-flights.html"
})
