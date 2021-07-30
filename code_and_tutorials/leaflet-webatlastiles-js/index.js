import L from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  webatlasTileLayer,
  WebatlasTileLayerTypes,
} from "leaflet-webatlastile";

//this is the api key, stored in an environment variable
const API_KEY = process.env.API_KEY;

const map = L.map("map").setView([60, 11], 5);

//webatlasTileLayer is used just like L.TileLayer from leaflet
//to choose another mapType, check what WebatlasTileLayerTypes provide
webatlasTileLayer({
  apiKey: API_KEY,
  mapType: WebatlasTileLayerTypes.VECTOR,
}).addTo(map);
