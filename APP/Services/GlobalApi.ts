
// Services/GlobalApi.tsx
import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://maps.googleapis.com/maps/api/place";
const API_KEY = "AIzaSyCulc43DqsOQXkaufUXJ59VacYHMJ6q52Y"; // Replace with your actual API key

interface Place {
  name: string;
  vicinity: string;
  // Add other properties as needed (e.g., place_id, geometry, etc.)
}

const nearByPlace = async (
  lat: number,
  lng: number,
  type: string
): Promise<AxiosResponse<Place[]>> => {
  try {
    const response = await axios.get(
      `${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=15000&type=${type}&key=${API_KEY}`
    );
    return response;
  } catch (error) {
    throw new Error(`Error fetching nearby places: ${error}`);
  }
};

export default nearByPlace;

// import axios, { AxiosResponse } from "axios";

// const BASE_URL= "https://maps.googleapis.com/maps/api/place";
// const API_KEY="AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0";

// interface Place {
//   // Define the structure of a place if necessary
// }

// const nearByPlace = async (lat: number, lng: number,
// type:string
// ): Promise<AxiosResponse<any>> => {
//   try {
//     const response = await axios.get(`${BASE_URL}/nearbysearch/json?location=${lat},${lng}&radius=15000&type=${type}&key=${API_KEY}`);
//     return response;
//   } catch (error) {
//     throw new Error(`Error fetching nearby places: ${error}`);
//   }
// };

// export default nearByPlace;

// //"AIzaSyB9ctiAb-J9CZil_ZlpAg3Z0XpxwudHlNw"
// //"AIzaSyAlIDUiTW6M9p6qb7mHsMCvqk0_OMO3MV0"