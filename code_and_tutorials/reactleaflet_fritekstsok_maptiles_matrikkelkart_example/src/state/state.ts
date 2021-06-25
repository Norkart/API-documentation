import { atom, selector } from "recoil";

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

export const selectedPosition = selector<LatLng | null>({
    key: "selectedPosition",
    get: ({get}) => {
      const address = get(selectedAddress);
      if(address){
        return {lat: address.latLng.lat, lng: address.latLng.lng}
      }
      return { lat:63.441342575975796 , lng:  10.401360822656011 };
    }
  });

export const selectedTeig = selector<Teig[] | null>({
    key: "selectedTeig",
    get: async ({get}) => {      

      const position = get(selectedPosition);
      const key = get(apiKey);
     
      if (position && key) {
        const apiResult = await fetch(
          `https://www.webatlas.no/WAAPI-Matrikkelkart/teig/punkt?X=${position.lng}&Y=${position.lat}&api_key=${key}&GeometryTextFormat=GeoJson`,
          {
            headers: {
              Accept: "application/json",
            },
            method: "GET",
          }
        );
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