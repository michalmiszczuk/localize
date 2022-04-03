import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

async function findCoordinates(ip) {
  const {data} = await axios.get(`http://api.ipstack.com/${ip}?access_key=${apiKey}&hostname=1`);
  return data;
}

console.log(process.env);
async function findMyCoordinates() {
  //   const {data} = await axios.get(
  //     `http://api.ipstack.com/check?access_key=${apiKey}&fields=main`
  //   );
  //   console.log(data);
  //   return data;
  return {
    city: "Wrocław",
    continent_name: "Europe",
    country_name: "Poland",
    latitude: 51.1148910522,
    longitude: 17.038040164,
    zip: "50-124",
  };
}

export {findMyCoordinates, findCoordinates};
