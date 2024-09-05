// Function to create flashy messages
function createFlashyMessage(text) {
    const message = document.createElement('div');
    message.className = 'flashy-message';
    message.textContent = text;

    // Random position on the screen
    message.style.top = Math.random() * 80 + 'vh'; // Random height
    message.style.left = Math.random() * 80 + 'vw'; // Random width

    document.body.appendChild(message);

    // Remove the message after 3 seconds
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Function to trigger fake alerts and flashy messages
function prankAlerts() {
    const messages = [
        "Stevie, we have your info... you're F*CKED",
        "Critical Error: System Overload!",
        "Congratulations! You've won a free toaster! Click OK to claim.",
        "Wait... Are you still here?",
        "Alert! Your sense of humor has been compromised!",
        "Pop-up Virus Activated. Good luck closing these!"
    ];

    // Loop through the messages with a delay for alerts
    messages.forEach((message, index) => {
        setTimeout(() => {
            alert(message);
        }, index * 2000); // Triggers alerts every 2 seconds
    });

    // Loop to create flashy messages
    setInterval(() => {
        createFlashyMessage("FLASHING ALERT!");
    }, 500); // Creates a new flashy message every 0.5 seconds

    // Keep the prank going by opening more alerts
    setTimeout(() => {
        const keepPranking = confirm("Do you want to stop these messages?");
        if (!keepPranking) {
            prankAlerts(); // Recursively call to keep the alerts coming
        }
    }, messages.length * 2000 + 1000); // Adjust timing to trigger after the last message
}

// Trigger the prank alerts when the page loads
window.onload = prankAlerts;
