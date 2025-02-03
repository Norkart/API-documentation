import { LatLng, Teig } from "../state/state";

export interface MatrikkelkartResponse {
  Teiger: Teiger[];
  GeometryFormat: string;
  SRS: number;
}

export interface Teiger {
  Kommunenummer: number;
  Gaardsnummer: number;
  Bruksnummer: number;
  Festenummer: number;
  Seksjonsnummer: number;
  SeksjonsnummerTeig: number;
  BeregnetAreal: number;
  ArealMerknader: string;
  HovedTeig: boolean;
  Tvist: boolean;
  TeigMedFlereMatrikkelEnheter: boolean;
  Matrikkelenheter: Matrikkelenheter[];
  GIDTekst: string;
  WellKnownTextGeometri: string;
  Geometri: string;
  SRS: number;
  GeometryTextFormat: string;
  Matrikkelnummer: string;
  Id: number;
  Anleggsprojeksjonsflate: boolean;
}

export interface Matrikkelenheter {
  Matrikkelnummer: string;
  Kommunenummer: number;
  Gaardsnummer: number;
  Bruksnummer: number;
  Festenummer: number;
  Seksjonsnummer: number;
}

export const matrikkelkartGetTeiger = async (
  latLng: LatLng,
  key: string
): Promise<Teig | null> => {
  const query = `https://matrikkelkart.api.norkart.no/teig/punkt?X=${latLng.lng}&Y=${latLng.lat}&api_key=${key}&GeometryTextFormat=GeoJson`;

  const apiResult = await fetch(query, {
    headers: {
      Accept: "application/json",
    },
    method: "GET",
  });

  if (apiResult.status === 200) {
    return await matrikkelkartResponseToTeiger(apiResult);
  }

  return null;
};

const matrikkelkartResponseToTeiger = async (
  apiResult: Response
): Promise<Teig | null> => {

  const json = (await apiResult.json()) as MatrikkelkartResponse;
  let teig = json.Teiger.filter(t => t.HovedTeig)[0] ?? json.Teiger[0]

  if (teig === null) return null;

  return {
    Matrikkelnummer: teig.Matrikkelnummer,
    Geometry: JSON.parse(teig.Geometri),
    Kommunenummer: teig.Kommunenummer,
    Gaardsnummer: teig.Gaardsnummer,
    Bruksnummer: teig.Bruksnummer,
    Festenummer: teig.Festenummer,
    Seksjonsnummer: teig.Seksjonsnummer,
    BeregnetAreal: teig.BeregnetAreal,
  }
  
};
