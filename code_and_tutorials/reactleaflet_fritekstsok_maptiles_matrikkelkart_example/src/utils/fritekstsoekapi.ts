
export const getGateadresseByQuery = async (query : string, key: string) => {
    const apiResult = await fetch(
        `https://www.webatlas.no/WAAPI-FritekstSok/suggest/kommunecustom?Query=${query}&Size=5&Targets=gateadresse`,
        {
            headers: {
                'Accept': 'application/json',
                'X-WAAPI-TOKEN': `${key}`
                },
                method: "GET"
        }
      );
    return apiResult;
}