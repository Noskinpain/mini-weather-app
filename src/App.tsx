import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";
import { Place } from "./api/place";
import { search } from "./api/search";
import WeatherDetails from "./components/WeatherDetails";

function App() {


  const [place, setPlace] = useState<Place | null>(null);
  const [placeName, setPlaceName] = useState("")
  const [name, setName] = useState<string>("");
 // Default location (e.g., New York)
 const defaultCity = "New York";

 // Fetch weather for default location when the app loads
 useEffect(() => {
   const fetchDefaultLocationWeather = async () => {
     try {
       const result = await search(defaultCity);
       setPlace(result);
       setName(defaultCity);
     } catch (error) {
       console.error("Error fetching weather for default location:", error);
     }
   };

   fetchDefaultLocationWeather();
 }, []);




  const handleSubmit = async (term: string) => {
   const result = await search(term)
   setPlace(result)
   setPlaceName(term)
  }
console.log(place)

  return (
    <>
      <div
        className="bg-[url('https://images.unsplash.com/photo-1493364391862-bb90969a4cc1?w=1920&auto=format&fit=crop&q=100&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGNsb3VkfGVufDB8fDB8fHww')] 
             bg-cover 
             bg-center 
             bg-no-repeat 
             h-full
             w-full"
      >
        <div className="flex justify-center items-center">
          <div className="w-[45rem] h-[45rem] bg-white my-14 rounded-lg bg-opacity-80 shadow-xl">
          <SearchBar handleSubmit = {handleSubmit}/>
            {place && <WeatherDetails place={place} name={placeName} nameOnLoad = {name}/>}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
