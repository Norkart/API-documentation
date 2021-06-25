import { atom, selector } from "recoil";
import { getTeigByCoordinate } from "../utils/matrikkelkartapi";

export type Address = {
  id: string;
  latLng: LatLng;
  text: string;
};

export type LatLng = {
  lat: number;
  lng: number;
};

export type Teig = {
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
        const apiResult = await getTeigByCoordinate(address.latLng, key);
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