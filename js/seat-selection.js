confirmSeat = document.getElementById("confirmSeat")

confirmSeat.addEventListener("click",function(e){
    e.preventDefault()
    // Save chosen seat to localStorage
    localStorage.setItem("chosenSeat", buttonText);
    window.location.href="meal.html"
})

const allButtons = document.querySelectorAll("button")

// Loop through all buttons and add a click listener
for (var i = 0; i < allButtons.length; i++) {
    // Add a click event to each button
    allButtons[i].addEventListener("click", function(event) {
    
    // Get the text inside the button that was clicked
    buttonText = event.target.innerText;
    
    // Show it in the console (for testing purposes)
    console.log(buttonText)
    
    // change
    for(i=0;i<allButtons.length;i++){
      allButtons[i].style.backgroundColor ='white'
      allButtons[i].style.color ='black'
      confirmSeat.style.color="#910c00"
    }
    
    event.target.style.backgroundColor = "#910c00"
    event.target.style.color = "white"
    
  })
}
