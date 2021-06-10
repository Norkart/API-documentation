import { TextField } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Address, apiKey, selectedAddress } from '../state/state';

export const Search = () => {
    
    
    const [query, setQuery] = useState<string | null>(null);
    const [suggestedAdress, setSuggestedAddresses] = useState<Address[] | null>(null);
    const apiKeyState = useRecoilValue<string>(apiKey);
    const setAddress = useSetRecoilState<Address>(selectedAddress);

    useEffect(() => {
        
        var fritekstQuery = `https://www.webatlas.no/WAAPI-FritekstSok/suggest/kommunecustom?Query=${query}&Size=5&Targets=gateadresse`; 

        async function fetchFritekst(){
            if(query){
                var suggestions = new Array<Address>();
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
                        suggestions.push({id: suggestion.Id,  text: suggestion.Text, latLng: {lat: suggestion.PayLoad.Posisjon.X, lng: suggestion.PayLoad.Posisjon.Y}})
                    });
                    setSuggestedAddresses(suggestions);
                }
            }
        }
        fetchFritekst();
        
    }, [query])

    return (
        <div>
            {apiKeyState != "" &&
            <div>
                <form noValidate autoComplete="off">
                <TextField
                    id="standard-basic"
                    label="Søk opp adresse"
                    onChange={(e) => setQuery(e.target.value)}
            />
            </form>
                {suggestedAdress && suggestedAdress.map((address : Address) => <p onClick={setAddress.bind(this, address)}>{address.text}</p>)}
            </div>                 
            }
        </div>
    )
}
