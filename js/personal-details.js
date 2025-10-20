const personalForm = document.getElementById("personalForm")

// when user submits the form, we store all the inputted values into localStorage.
personalForm.addEventListener("submit",function(e){
    e.preventDefault()

    const titleSelector = document.getElementById("titleSelector").value
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const nationality = document.getElementById("nationality").value
    const address = document.getElementById("address").value
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const phoneNumber = document.getElementById("phoneNumber").value
    const contactEmail = document.getElementById("contactEmail").value


    localStorage.setItem("personalDetails", JSON.stringify({"title":titleSelector,"fname":firstName,"lname":lastName,"nationality":nationality,"address":address,"gender":gender, "phoneNumber":phoneNumber,"contactEmail":contactEmail}))
    window.location.href="seat-selection.html"
})
