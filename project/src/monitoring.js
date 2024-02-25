import cron from 'node-cron';
import "appwrite"

import { ID, Query } from "appwrite";
import { Account, Avatars, Client, Databases, Storage } from "appwrite";
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("65da2b49ca4a23a67256");
let  totalDeathWeekly ;
let threatIndex;
const storage = new Storage(client);
const databases = new Databases(client)
// export const avatars = new Avatars(client)
// export const account = new Account(client)
function evaluatetotal () {
    return Math.floor(Math.random() * 17) + 1;
}
function getDate() {
    // Create a new Date object to get the current date
    const currentDate = new Date();

    // Get the day, month, and year components
    const day = String(currentDate.getDate()).padStart(2, '0'); // Ensure two digits with leading zero
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based (January is 0)
    const year = currentDate.getFullYear();

    // Concatenate the components to get the date in dd mm yyyy format
    const formattedDate = `${day} ${month} ${year}`;
    return formattedDate
    // console.log(formattedDate);

}
async function updateDatabase(responseAnimal) {
    const date = getDate()
    for (let i = 0; i < responseAnimal.total; i++) {

        const response = await databases.createDocument('animalsdatabase', 'deathrecordcollection', ID.unique(), { "animalid": responseAnimal.documents[i].id, "date": date, "latitude": responseAnimal.documents[i].latitude, "longitude": responseAnimal.documents[i].longitude });
        // console.log(response)
    }
    totalDeathWeekly = evaluatetotal()

}


export async function MonitorDatabase() {
    // console.log("daily query")
    const collectionArray = ['deerscollection', 'elephantscollection', 'lionscollection', 'tigerscollection']
    for (let i = 0; i < collectionArray.length; i++) {
        const response = await databases.listDocuments('animalsdatabase', collectionArray[i], [
            Query.equal("health", 0)
        ]);
        if (response.total > 0) {

            updateDatabase(response)
        }
        // console.log('Query result:', response);
    }
getData()
return threatIndex
}

 async function weeklyDeath() {
    const date = getDate()

    const trimDate =date.split(' ')[0];
    const startDate = parseInt(trimDate)
    const lastDate = startDate - 7;
let queryArray =  []

    for (let i = lastDate;i<=startDate;i++){
queryArray.push(`${i} 02 2024`)
    }

    const response = await databases.listDocuments('animalsdatabase', 'deathrecordcollection', [
        Query.equal("date",queryArray)
    ]);
   totalDeathWeekly =  response.total
   
//    console.log(totalDeathWeekly)
 totalDeathWeekly
}
// setInterval(MonitorDatabase,  6 * 1000);

import axios from "axios";
const urlweather = 'http://api.weatherapi.com/v1/current.json?key=068d735a4d4a46158aa24712242502&q=30.026742797208023,78.14920864779964'

let temperature,humidity,airquality,totaldeath;
const getData = ()=>{
    const sum_of_weights = 1;
    const weights = [0.3, 0.3, 0.2, 0.2]
    axios.get(urlweather)
      .then(response => {
        temperature = response.data.current.temp_c
        humidity = response.data.current.humidity
        airquality = response.data.current.wind_kph
        // console.log(temperature,humidity,airquality,totalDeathWeekly);  // Access the response data
      })
      .catch(error => {
        console.error(error);        // Handle errors
      });

      threatIndex = ((weights[0] * temperature +
        weights[1] * humidity +
        weights[2] * airquality +
        weights[3] * totalDeathWeekly) * 10 / sum_of_weights)/20.0
//  console.log(threatIndex)
    }
  






// cron.schedule('02 16 * * *', () => {
//     console.log('Scheduled task started...');
    
//     MonitorDatabase();

// });



// import twilio from 'twilio';

// // Twilio credentials
// const accountSid = 'ACf95057f46b34e253f07f3dfd79ca2e80';
// const authToken = '0233a097a3987600a293c3b933c07770';
// const twilioPhoneNumber = '+16505177378';
// const recipientPhoneNumber = '+918583927570'; // Replace with your desired recipient phone number

// // Initialize Twilio client
// const Client = twilio(accountSid, authToken);

// // Function to simulate motion sensor data
// function generateMotionData() {
//    // Generate a random value of either 0 or 1
// const randomValue = Math.round(Math.random());
// return randomValue
// // Or, alternatively, you can explicitly generate either 0 or 1
// // const randomValue = Math.floor(Math.random() * 2);

// console.log(randomValue); // Output: 0 or 1

// }

// // Function to analyze motion sensor data for anomalies
// function analyzeMotionData() {
//     // Threshold for detecting anomalies (adjust as needed)
//     const anomalyThreshold = 0.3;

//     const id = setInterval(() => {
//         // Generate motion sensor data
//         const motionData = generateMotionData();

//         // Check for anomalies
//         if (motionData > anomalyThreshold) {
//             // Anomaly detected, trigger alert
//             console.log("Potential threat detected: may be poaching activity going on");
//             // Call function to send SMS alert to forest authorities
//             sendSmsAlert(`Potential threat detected: may be poaching activity going on${totalDeathWeekly}`);
//             clearInterval(id);
//         }
//     }, 1000); // Wait for next data point
// }

// // Function to send SMS alert
// function sendSmsAlert(message) {
//     try {
//         // Send SMS message
//         Client.messages.create({
//             body: message,
//             from: twilioPhoneNumber,
//             to: recipientPhoneNumber
//         }).then(message => console.log("SMS alert sent successfully:", message.sid));
//     } catch (error) {
//         console.log("Error sending SMS alert:", error.message);
//     }
// }

// // Main function
// function main() {
//     // Start analyzing motion sensor data
//     analyzeMotionData();
// }

// // Run the main function
// main();
