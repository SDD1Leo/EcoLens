
import twilio from 'twilio';

// Twilio credentials
const accountSid = 'ACf95057f46b34e253f07f3dfd79ca2e80';
const authToken = '0233a097a3987600a293c3b933c07770';
const twilioPhoneNumber = '+16505177378';
const recipientPhoneNumber = '+918583927570'; // Replace with your desired recipient phone number

// Initialize Twilio client
const client = twilio(accountSid, authToken);

// Function to simulate motion sensor data
function generateMotionData() {
   // Generate a random value of either 0 or 1
const randomValue = Math.round(Math.random());
return randomValue
// Or, alternatively, you can explicitly generate either 0 or 1
// const randomValue = Math.floor(Math.random() * 2);

console.log(randomValue); // Output: 0 or 1

}

// Function to analyze motion sensor data for anomalies
function analyzeMotionData() {
    // Threshold for detecting anomalies (adjust as needed)
    const anomalyThreshold = 0.3;

    const id = setInterval(() => {
        // Generate motion sensor data
        const motionData = generateMotionData();

        // Check for anomalies
        if (motionData > anomalyThreshold) {
            // Anomaly detected, trigger alert
            console.log("Potential threat detected: Motion anomaly");
            // Call function to send SMS alert to forest authorities
            sendSmsAlert("Potential threat detected: Motion anomaly");
            clearInterval(id);
        }
    }, 1000); // Wait for next data point
}

// Function to send SMS alert
function sendSmsAlert(message) {
    try {
        // Send SMS message
        client.messages.create({
            body: message,
            from: twilioPhoneNumber,
            to: recipientPhoneNumber
        }).then(message => console.log("SMS alert sent successfully:", message.sid));
    } catch (error) {
        console.log("Error sending SMS alert:", error.message);
    }
}

// Main function
function main() {
    // Start analyzing motion sensor data
    analyzeMotionData();
}

// Run the main function
main();
