
import { Place } from '../api/place';

interface WeatherDetailsProps {
  place: Place;
  name: string;
  nameOnLoad: string
}

const WeatherDetails = ({ place, name,  nameOnLoad }: WeatherDetailsProps) => {
  const { hourly } = place;
  const { temperature_2m, time } = hourly;

  return (
    <div className='text-center'>
      <h1 className=' font-bold text-3xl mt-6 text-blue-400'>Weather Details for {name || nameOnLoad}</h1>
      {/* <p>Latitude: {latitude}</p>
      <p>Longitude: {longitude}</p> */}
      
      <p className=' font-[600] mt-6'>Timezone: {place.timezone}</p>
      <h2 className='mt-6 font-bold text-2xl'>Hourly Forecast (Temperature)</h2>
      <div className='mt-10'>
        {/* Display the first few hours as an example */}
        {time.slice(0, 5).map((t, index) => (
          <div key={t} className='w-full h-10 mt-5 bg-gray-100 '>
            <p>
              Time: {t} | Temperature: {temperature_2m[index]}°C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDetails;
