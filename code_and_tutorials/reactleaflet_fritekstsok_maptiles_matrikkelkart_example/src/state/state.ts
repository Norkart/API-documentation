import { atom, selector } from "recoil";

export const apiKey = atom<string>({
  key: "apiKey",
  default: "",
});

export const selectedAddress = atom<Address>({
  key: "selectedAddress",
  default: { latLng: { lat: 10, lng: 60 }, id: "1", text: "text" },
});

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
    Geometri: string
}

export const position = atom<LatLng>({
    key: "position",
    default: { lat:63.441342575975796 , lng:  10.401360822656011 }
  });

export const selectedTeig = selector<Teig[]>({
    key: "selectedTeig",
    get: async ({get}) => {
      const address = get(selectedAddress);
      const key = get(apiKey);
  
      if (address && key) {
        const apiResult = await fetch(
          `https://www.webatlas.no/WAAPI-Matrikkelkart/teig/punkt?X=${address.latLng.lat}&Y=${address.latLng.lng}&apikey=${key}&GeometryTextFormat=GeoJson`,
          {
            headers: {
              Accept: "application/json",
            },
            method: "GET",
          }
        );
        var json = await apiResult.json();
        var enheter = new Array<Teig>();
        json.Teiger.forEach((teig: any) => {
          enheter.push({
            Matrikkelnummer: teig.Matrikkelnummer,
            Geometri: teig.Geometri
          });
        });
  
        return enheter;
      } else {
        return [
          {
            Matrikkelnummer: "123",
            Geometri: "POLYGON((10.0014616518526 61.0002879282129,10.0015130320538 61.0002742404286,10.0014542845817 61.0000328011808,10.0014075581422 60.999949386396,10.0013422780209 60.9999256286805,10.0011365356023 60.9998804668708,9.99981714094307 60.9997951327384,9.99977735437955 60.9998170571433,9.99973260266397 61.0000198659132,10.0002015436525 61.00012512095,10.0005545812847 61.0001890255485,10.0014616518526 61.0002879282129))"
          }
        ];
      }
    },
  });