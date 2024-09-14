// import { Place } from "./place";

interface GeoResponse{
    results: {
        geometry: {
            lat: number,
            lng: number
        }
    }[]
}

export const geoCode = async (term: string) => {
    const apiKey = "352dbb177aae43c5a6cfe737c0f64e99";
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(term)}&key=${apiKey}`;
    
    try {
        const req = await fetch(url);
        const data: GeoResponse = await req.json();
        
        if (data.results.length > 0) {
            // Access the first result's geometry object
            const { lat, lng } = data.results[0].geometry;

            // Return the Place object
            return { latitude: lat, longitude: lng };
        } else {
            throw new Error("Location not found");
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
} 


// interface searchResponse{
   
// }

export const search = async(term: string) => {
    try{
        const {latitude, longitude} = await geoCode(term)
        const req = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`);
        const data = await req.json()
        return data
    } catch(error){
        console.error((error as Error) .message)
    }
   
}

