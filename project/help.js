import { ID, Query } from "appwrite";
import { Account, Avatars, Client, Databases, Storage } from "appwrite";
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject("65da2b49ca4a23a67256");

const storage = new Storage(client);
const databases = new Databases(client)


export const sendRedData = async (name)=>{
    const  red = await databases.listDocuments('animalsdatabase', name, [
        Query.equal("health", 0)
    ]);
    return red
}
  
export const sendYellowData = async (name)=>{
    const yellow = await databases.listDocuments('animalsdatabase', name, [
        Query.equal("health", 2)
    ]);
    return yellow
}
export const sendGreenData = async (name)=>{
    const green = await databases.listDocuments('animalsdatabase', name, [
        Query.equal("health", 3)
    ]);
    return green
}