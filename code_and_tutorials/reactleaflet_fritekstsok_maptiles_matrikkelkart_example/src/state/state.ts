import { Geometry } from "geojson";
import { atom, selector } from "recoil";
import { matrikkelkartGetTeiger } from "../api/matrikkelkartapi";

export interface Address {
  id: string;
  matrikkelId: string;
  text: string;
  latlng: LatLng;
}

export interface LatLng {
  lat: number;
  lng: number;
}

export interface Teig {
    Matrikkelnummer: string,
    Geometry: Geometry,
    Kommunenummer: number,
    Gaardsnummer: number;
    Bruksnummer: number;
    Festenummer: number;
    Seksjonsnummer: number;
    BeregnetAreal: number;
}

export const apiKey = atom<string | null>({
  key: "apiKey",
  default: "",
});

export const selectedAddress = atom<Address | null>({
  key: "selectedAddress",
  default: null,
});

export const selectedTeig = selector<Teig | null>({
    key: "selectedTeig",
    get: async ({get}) => {      

      const address = get(selectedAddress);
      const key = get(apiKey);
     
      if (address && key) {
        return await matrikkelkartGetTeiger(address.latlng, key);
      } 
      return null;
    },
  });