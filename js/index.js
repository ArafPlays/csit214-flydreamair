const searchForm = document.getElementById("searchForm")

// Add an event listener to run code when the form is submitted
searchForm.addEventListener("submit",function(e){
    // Prevent the default form submission (which would reload the page)
    e.preventDefault()
    
    // Get the values entered or selected by the user in each input field
    const locationFrom = document.getElementById("locationFrom").value
    const locationTo = document.getElementById("locationTo").value
    const departDate = document.getElementById("departDate").value
    const returnDate = document.getElementById("returnDate").value
    const flightClass = document.getElementById("flightClass").value

    // Save all the collected flight search details in localStorage
    // Convert the JavaScript object into a JSON string before storing
    localStorage.setItem("flightSearchDetails", JSON.stringify({"from":locationFrom,"to":locationTo,"depart":departDate,"return":returnDate,"fClass":flightClass}))
    
    // Redirect the user to the available flights page
    window.location.href="available-flights.html"
})
