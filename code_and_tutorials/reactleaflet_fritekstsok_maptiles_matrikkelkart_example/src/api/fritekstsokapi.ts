import { Address } from "../state/state";

interface FritekstsokResponse {
    Id: string;
    Type: string;
    Text: string;
    Score: number;
    Url: string;
    PayLoad: PayLoad;
    LevenshteinScore: number;
    ExactMatches: number;
  }
  
  interface PayLoad {
    AdresseMatrikkelNummer?: string;
    MatrikkelNummer?: string;
    Text: string;
    AdresseId: string;
    VegAdresseId: string;
    Posisjon: {
      X: number;
      Y: number;
      SRS: number;
    };
    PostNummer: string;
    PostSted: string;
  }


  export async function fritekstsok(
    searchText: string,
    apiKey: string
  ): Promise<Address[]> {
    if (searchText !== null && searchText !== "") {
      const query = `https://www.webatlas.no/WAAPI-FritekstSok/suggest/kommunecustom?Query=${searchText}&Size=5&Targets=gateadresse`;
  
      const apiResult = await fetch(query, {
        headers: {
          Accept: "application/json",
          "X-WAAPI-TOKEN": `${apiKey}`,
        },
        method: "GET",
      });
  
      if (apiResult.status === 200) {
        return await fritekstsokResultToAdress(apiResult);
      }
    }
  
    return [];
  }
  
  const fritekstsokResultToAdress = async (
    apiResult: Response
  ): Promise<Address[]> => {
    const suggestions = new Array<Address>();
  
    const json = await apiResult.json();
    json.Options.forEach((suggestion: FritekstsokResponse) => {
  
      if (
        suggestion?.PayLoad?.Posisjon?.X &&
        suggestion?.PayLoad?.Posisjon?.Y &&
        suggestion?.PayLoad?.AdresseMatrikkelNummer
      ) {
        suggestions.push({
          id: suggestion.Id,
          matrikkelId: suggestion.PayLoad.AdresseMatrikkelNummer,
          text: suggestion.Text,
          latlng: {
            lat: suggestion.PayLoad.Posisjon.Y,
            lng: suggestion.PayLoad.Posisjon.X,
          },
        });
      } else if (
        suggestion?.PayLoad?.Posisjon?.X &&
        suggestion?.PayLoad?.Posisjon?.Y &&
        suggestion?.PayLoad?.MatrikkelNummer
      ) {
        suggestions.push({
          id: suggestion.Id,
          matrikkelId: suggestion.PayLoad.MatrikkelNummer,
          text: suggestion.Text,
          latlng: {
            lat: suggestion.PayLoad.Posisjon.Y,
            lng: suggestion.PayLoad.Posisjon.X,
          },
        });
      }
    });
  
    return suggestions ?? [];
  };