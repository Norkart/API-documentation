import { Geometry, Feature } from "geojson";
import * as L from 'leaflet';

export const getBounds = (geometry: Geometry): L.LatLngBounds => L.geoJSON(geometry).getBounds();

export const getBoundsForGeometries = (geometries: Geometry[]): L.LatLngBounds =>
  geometries.slice(1).reduce((acc, g) => acc.extend(getBounds(g)), getBounds(geometries[0]));

export const getBoundsForFeatures = (features: Feature[]): L.LatLngBounds =>
  getBoundsForGeometries(features.map((f) => f.geometry));

export const getBboxString = (geometry: Geometry) => getBounds(geometry).toBBoxString();

const splitBbox = (bbox: string) => bbox.split(',').map(parseFloat);

const fromBBoxArray = (bbox: number[]) =>
  new L.LatLngBounds(new L.LatLng(bbox[1], bbox[0]), new L.LatLng(bbox[3], bbox[2]));

export const fromBboxString = (bbox: string) => fromBBoxArray(splitBbox(bbox));