// get tiger

import { databases } from "./config";
import { Query } from "appwrite";


// get all coordinates

export async function getallcoordinate(name) {
    let coordinates = []
    if (name == "elephants") {
        let response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASEID,
            import.meta.env.VITE_APPWRITE_ELEPHANTS,
            [
                Query.startsWith("id", `${name[0]}`)
            ]
        );
        for (let i = 0; i < response.total; i++) {
            const latitude = response.documents[i].latitude
            const longitude = response.documents[i].longitude
            const health = response.documents[i].health
            coordinates.push({ latitude, longitude, health });
        }
        return coordinates
    }
    else if (name == "tigers") {
        let response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASEID,
            import.meta.env.VITE_APPWRITE_TIGERS,
            [
                Query.startsWith("id", `${name[0]}`)
            ]
        );
        for (let i = 0; i < response.total; i++) {
            const latitude = response.documents[i].latitude
            const longitude = response.documents[i].longitude
            const health = response.documents[i].health
            coordinates.push({ latitude, longitude, health });
        }
        return coordinates
    }
    else if (name == "deers") {
        let response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASEID,
            import.meta.env.VITE_APPWRITE_DEERS,
            [
                Query.startsWith("id", `${name[0]}`)
            ]
        );
        for (let i = 0; i < response.total; i++) {
            const latitude = response.documents[i].latitude
            const longitude = response.documents[i].longitude
            const health = response.documents[i].health
            coordinates.push({ latitude, longitude, health });
        }
        return coordinates
    }
    else if (name == "lions") {
        let response = await databases.listDocuments(
            import.meta.env.VITE_APPWRITE_DATABASEID,
            import.meta.env.VITE_APPWRITE_LIONS,
            [
                Query.startsWith("id", `${name[0]}`)
            ]
        );
        for (let i = 0; i < response.total; i++) {
            const latitude = response.documents[i].latitude
            const longitude = response.documents[i].longitude
            const health = response.documents[i].health
            coordinates.push({ latitude, longitude, health });
        }
        return coordinates
    }
    let response = await databases.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASEID,
        import.meta.env.VITE_APPWRITE_ELEPHANTS,
        [
            Query.startsWith("id", `${name[0]}`)
        ]
    );
    for (let i = 0; i < response.total; i++) {
        const latitude = response.documents[i].latitude
        const longitude = response.documents[i].longitude
        const health = response.documents[i].health
        coordinates.push({ latitude, longitude, health });
    }
    return coordinates
}
