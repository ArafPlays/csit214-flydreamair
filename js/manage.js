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
