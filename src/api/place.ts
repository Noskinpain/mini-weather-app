export interface HourlyData {
    time: string[];
    temperature_2m: number[];
  }
  
  export interface HourlyUnits {
    time: string;
    temperature_2m: string;
  }
  
  export interface Place {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly: HourlyData;
    hourly_units: HourlyUnits;
  }
  