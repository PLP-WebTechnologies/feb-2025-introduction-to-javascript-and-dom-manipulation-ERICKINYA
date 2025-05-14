// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    textElement.textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById("toggleStyleBtn").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    if (textElement.style.color === "blue") {
        textElement.style.color = "black";
        textElement.style.fontSize = "16px";
    } else {
        textElement.style.color = "blue";
        textElement.style.fontSize = "24px";
    }
});

// Add a new element when the button is clicked
document.getElementById("addElementBtn").addEventListener("click", function() {
    const newElement = document.createElement("p");
    newElement.textContent = "This is a new paragraph added dynamically.";
    document.getElementById("content").appendChild(newElement);
});

// Remove an element when the button is clicked
document.getElementById("removeElementBtn").addEventListener("click", function() {
    const textElement = document.getElementById("text");
    textElement.remove(); // Removes the first paragraph with the id "text"
});
