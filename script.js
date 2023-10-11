document.addEventListener("DOMContentLoaded", function() {

    // Get references to the menu toggle elements
    const menuToggleLabel = document.querySelector(".menu-toggle label");
    const menu = document.querySelector(".menu");

    // Get references to the input box elements
    const inputBox = document.querySelector(".input-box input");

    const chatBox = document.getElementById("chat");

    // Add an event listener for the search button
    document.querySelector(".search-button").addEventListener("click", function() {
        const userInput = inputBox.value.trim();

        // Display user's message in the chat box
        displayMessage("user", userInput);
        
        // Check the user's input and provide a specific response
        if (userInput === "help") {
            
            // Display a help message
            displayMessage("bot", "I'm here to help you with mental health resources!");
            
        } 

        else if (userInput === "hi" || userInput === "hello") {
            // Provide information about the chatbot
            displayMessage("bot", "I am Carla, your mental health chatbot.");
            } 

        else if (userInput === "bye") {
            // Provide information about the chatbot
            displayMessage("bot", "Bye! I hope you feel better soon.");
            } 

        else if (userInput === "i'm feeling sad") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling anxious") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling depressed") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling stressed") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling lonely") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling suicidal") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling overwhelmed") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling angry") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
            } 

        else if (userInput === "i'm feeling tired") {
            // Provide information about the chatbot
            displayMessage("bot", "I'm sorry to hear that. Here are some resources that might help.");
        } 

        else if (userInput === "this semester has been really hard") {
            // Provide information about the chatbot
            displayMessage("bot", "College life can be stressful. CSP students have access to confidential and licensed professional counseling. Students can walk-in during open hours or schedule an appointment (preferred) to be seen by a licensed counselor in a professional and confidential manner. Counseling is available from 9:30am – 3:30pm Monday-Friday during the academic year. To schedule appointments please send an email to counseling@csp.edu");
        }

        else if (userInput === "i have not been feeling great this past month can you connect me to the therapist on campus") {
            displayMessage("bot", "I can help you with that! Here is a link to the therapist on campus: https://www.csp.edu/student-services/student-health-and-wellness/");
        }


        else {
            // Handle other user inputs here
            displayMessage("bot", "I'm sorry, I don't understand. Please try another phrase.");
            }

        // Clear the input box
        inputBox.value = "";
        });

    // Add a keypress event listener to handle Enter key
    inputBox.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            // Trigger the click event on the search button
            document.querySelector(".search-button").click();
        }
    });

    function displayMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.innerText = message;
        chatBox.appendChild(messageElement);
    }


    // Add a click event listener to the menu toggle label
    menuToggleLabel.addEventListener("click", function() {
        // Toggle the visibility of the menu when the label is clicked
        if (menu.style.display === "block" || menu.style.display === "") {
        menu.style.display = "none";
        } else {
        menu.style.display = "block";
        }
    });
    });