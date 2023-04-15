// Get the button and counter elements
var clickBtn = document.getElementById("clickBtn");
var clickCount = document.getElementById("clickCount");

// Load the click count from local storage (if available)
var count = localStorage.getItem("clickCount") || 0;
clickCount.textContent = count;

// Add a click event listener to the button
clickBtn.addEventListener("click", function () {
    // Update the counter and display the new count
    count++;
    clickCount.textContent = count;

    // Store the new count in local storage
    localStorage.setItem("clickCount", count);
});
