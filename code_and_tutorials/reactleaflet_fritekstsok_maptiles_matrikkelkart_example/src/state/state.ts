import { atom, selector } from "recoil";
import { getTeigByCoordinate } from "../utils/matrikkelkartapi";

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
    Geometri: any
}

export const apiKey = atom<string | null>({
  key: "apiKey",
  default: "",
});

export const selectedAddress = atom<Address | null>({
  key: "selectedAddress",
  default: null,
});

export const selectedTeig = selector<Teig[] | null>({
    key: "selectedTeig",
    get: async ({get}) => {      

      const address = get(selectedAddress);
      const key = get(apiKey);
     
      if (address && key) {
        const apiResult = await getTeigByCoordinate(address.latlng, key);
        const json = await apiResult.json();
        const enheter = new Array<Teig>();
        json.Teiger.forEach((teig: any) => {
          enheter.push({
            Matrikkelnummer: teig.Matrikkelnummer,
            Geometri: teig.Geometri
          });
        });
        return enheter;
      } 
      return null;
    },
  });