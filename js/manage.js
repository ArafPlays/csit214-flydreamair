// if a booking exists (we check localStorage), then we show a manage booking section
// if booking doesn't exist, we show a message that tells me to make a booking first.
const isConfirmed = localStorage.getItem("bookingConfirmed")
if(isConfirmed == "yes"){
    document.getElementById("bookingConfirmedNo").innerHTML = ""
} else {
    document.getElementById("bookingConfirmedYes").innerHTML = ""
}


/* clears local storage when cancel booking button is clicked" 
    This clears all booking data and personal details */
cancelButton = document.getElementById("cancelBooking")
cancelButton.addEventListener("click",function(e){
    localStorage.clear();
    cancelButton.textContent = "Done!"
})


/* update contact info */
updateInfoButton = document.getElementById("updateContactInfo") 
updateInfoButton.addEventListener("click",function(e){
    e.preventDefault()

    /* change old contact info to new details */
    personDetailsObj = JSON.parse(localStorage.getItem("personalDetails"))
    personDetailsObj["phoneNumber"] = document.getElementById("newPhone").value
    personDetailsObj["contactEmail"] = document.getElementById("newEmail").value

    /* set new values to local storage */
    localStorage.setItem("personalDetails", JSON.stringify(personDetailsObj))
    
    /* show visual feedback */
    updateInfoButton.textContent = "Done!"
})
