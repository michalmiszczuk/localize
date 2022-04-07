import axios from "axios";

const apiKey = process.env.REACT_APP_API_KEY;

async function findCoordinates(ip) {
  const {data} = await axios.get(`http://api.ipstack.com/${ip}/?access_key=${apiKey}&fields=main&hostname=1`);
  return data;
}

async function findMyCoordinates() {
  const {data} = await axios.get(`http://api.ipstack.com/check/?access_key=${apiKey}&fields=main`);
  console.log(data);
  return data;
}

export {findMyCoordinates, findCoordinates};
