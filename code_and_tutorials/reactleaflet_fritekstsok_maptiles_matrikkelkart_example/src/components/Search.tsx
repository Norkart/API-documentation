import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { apiKey } from '../state/state';

export const Search = () => {
    
    
    const [query, setQuery] = useState<string | null>(null);
    const apiKeyState = useRecoilValue<string | null>(apiKey);
    const suggestions = useRecoilValue<string | null>(apiKey);

    useEffect(() => {
        /*
        var fritekstQuery = `https://www.webatlas.no/WAAPI-FritekstSok/suggest/kommunecustom?Query=${query}&Size=5&Targets=gateadresse`; 

        async function fetchFritekst(){
            var suggestion = new Array<string>();
            const apiResult = await fetch(
                `${fritekstQuery}`,
                {
                    headers: {
                    'Accept': 'application/json',
                    'X-WAAPI-TOKEN': `${apiKeyState}`
                    },
                    method: "GET"
                }
                );
    
            if(apiResult.status === 200){
                var json = await apiResult.json();
                json.Options.forEach((suggestion: any) => {
                    suggestions.push({id: suggestion.Id, adresseMatrikkelid: suggestion.PayLoad.AdresseMatrikkelNummer, text: suggestion.Text, latlng: {lat: suggestion.PayLoad.Posisjon.X, lng: suggestion.PayLoad.Posisjon.Y}})
                });
                return suggestions;
            }
        }
        */
    }, [query])

    return (
        <div>
            <form noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Søk opp adresse"
                    onChange={(e) => setQuery(e.target.value)}
            />
            </form>
            {query && <p>{query}</p>}
        </div>
    )
}
