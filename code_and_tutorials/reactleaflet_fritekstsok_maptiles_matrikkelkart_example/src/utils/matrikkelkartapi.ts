import { LatLng } from "../state/state";

export const getTeigByCoordinate = async (latLng : LatLng, key: string) => {
    const apiResult = await fetch(
        `https://www.webatlas.no/WAAPI-Matrikkelkart/teig/punkt?X=${latLng.lng}&Y=${latLng.lat}&api_key=${key}&GeometryTextFormat=GeoJson`,
        {
          headers: {
            Accept: "application/json",
          },
          method: "GET",
        }
      );
    return apiResult;
}